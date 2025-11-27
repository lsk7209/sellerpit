import { NAV_GROUPS } from '@/config/navGroups';

export const dynamic = 'force-static';

const baseUrl = 'https://sellerpit.kr';
const siteName = 'Seller Pit - 셀러핏';
const siteDescription = '온라인 셀러를 위한 스마트 마진 계산기 및 유틸리티 모음';

// 도구별 상세 설명 매핑
const toolDescriptions: Record<string, string> = {
  '/vat': '부가세(VAT) 자동 계산기 - 공급가액, 부가세, 총액을 즉시 계산하세요',
  '/cbm': 'CBM 계산기 - 화물의 부피를 정확하게 계산하여 배송비를 최적화하세요',
  '/tax-calculator': '세금 계산기 - 소득세, 부가세 등 각종 세금을 간편하게 계산',
  '/discount-calculator': '할인율 계산기 - 원가 대비 할인가격과 할인율을 빠르게 산출',
  '/break-even': '손익분기점 계산기 - 사업의 손익분기점을 분석하여 목표 매출 설정',
  '/shipping-cost': '배송비 계산기 - 국내외 배송비를 정확하게 계산하고 비교',
  '/ad-roi': '광고 ROI 계산기 - 광고 투자 대비 수익률을 분석하고 최적화',
  '/currency-converter': '환율 변환기 - 실시간 환율로 다양한 통화를 빠르게 변환',
  '/inventory-cost': '재고 비용 계산기 - 재고 보관 비용과 회전율을 관리',
  '/profit-trend': '수익 추세 분석 - 매출과 수익의 변화 추이를 시각화',
  '/sales-forecast': '매출 예측 도구 - 과거 데이터 기반 미래 매출 예측',
  '/platform-comparison': '플랫폼 비교 - 쿠팡, 네이버, 11번가 등 판매 플랫폼 수수료 비교',
  '/glossary': '용어 사전 - 온라인 판매 관련 필수 용어 정리',
};

export async function GET() {
  const allTools = NAV_GROUPS.flatMap(group => group.items);
  const currentDate = new Date().toUTCString();

  const rssItems = allTools.map((tool) => {
    const description = toolDescriptions[tool.href] || `${tool.label} - 온라인 셀러를 위한 필수 도구`;

    return `
    <item>
      <title><![CDATA[${tool.label}]]></title>
      <link>${baseUrl}${tool.href}</link>
      <guid isPermaLink="true">${baseUrl}${tool.href}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${currentDate}</pubDate>
      <category><![CDATA[온라인 판매 도구]]></category>
      <category><![CDATA[셀러 유틸리티]]></category>
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteName}]]></title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description><![CDATA[${siteDescription}]]></description>
    <language>ko</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <generator>Next.js</generator>
    <webMaster>contact@sellerpit.kr (Seller Pit Team)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Seller Pit. All rights reserved.</copyright>
    <category><![CDATA[온라인 판매]]></category>
    <category><![CDATA[전자상거래]]></category>
    <category><![CDATA[비즈니스 도구]]></category>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
