import Calculator from "@/components/calculator/Calculator";
import RelatedTools from "@/components/shared/RelatedTools";

export default function Home() {
  // 구조화된 데이터 (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Seller Fit",
        "alternateName": "셀러핏",
        "url": "https://sellerfit.kr",
        "description": "온라인 셀러를 위한 무료 마진 계산기. 스마트스토어, 쿠팡 등 다양한 플랫폼의 수수료를 고려한 정확한 수익 계산",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "KRW"
        },
        "featureList": [
          "마진 계산",
          "상품 비교",
          "부가세 자동 계산",
          "CBM 계산",
          "계산 기록 저장"
        ]
      },
      {
        "@type": "Organization",
        "name": "Seller Fit",
        "url": "https://sellerfit.kr",
        "logo": "https://sellerfit.kr/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contact@sellerfit.kr",
          "contactType": "customer service"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "마진율은 어떻게 계산되나요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "마진율은 (순수익 ÷ 판매가) × 100으로 계산됩니다. 예를 들어, 판매가 10,000원에 순수익이 2,000원이라면 마진율은 20%입니다."
            }
          },
          {
            "@type": "Question",
            "name": "스마트스토어 수수료는 정확한가요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "네, 각 플랫폼의 공식 수수료율을 기준으로 계산합니다. 스마트스토어는 5.63%, 쿠팡은 10.8% 등 최신 정보를 반영하고 있습니다."
            }
          },
          {
            "@type": "Question",
            "name": "적정 마진율은 얼마인가요?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "일반적으로 20% 이상이 안정적인 수익 구조입니다. 광고비, 반품률, 재고 관리 비용 등을 고려하면 최소 20% 이상의 마진율을 확보하는 것이 안전합니다."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* JSON-LD 구조화된 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-950 text-slate-200 pb-24">
        <Calculator />
        <div className="max-w-4xl mx-auto px-4">
          <RelatedTools currentPath="/" />
        </div>
      </main>
    </>
  );
}
