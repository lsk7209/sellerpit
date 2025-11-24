import { NAV_GROUPS } from '@/config/navGroups';

const baseUrl = 'https://sellerfit.kr';

export async function GET() {
    const allTools = NAV_GROUPS.flatMap(group => group.items);

    const rssItems = allTools.map((tool) => `
    <item>
      <title><![CDATA[${tool.label}]]></title>
      <link>${baseUrl}${tool.href}</link>
      <guid>${baseUrl}${tool.href}</guid>
      <description><![CDATA[${tool.label} - 온라인 셀러를 위한 필수 도구]]></description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `).join('');

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Seller Fit - 셀러핏 도구 모음</title>
        <link>${baseUrl}</link>
        <description>온라인 셀러를 위한 스마트 마진 계산기 및 유틸리티 모음</description>
        <language>ko</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${rssItems}
      </channel>
    </rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
