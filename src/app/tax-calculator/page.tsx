"use client";

import { useState } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import { RotateCcw } from "lucide-react";
import ToolContent from "@/components/shared/ToolContent";

export default function TaxCalculatorPage() {
    const [revenue, setRevenue] = useState(0);
    const [cost, setCost] = useState(0);
    const [vatRate] = useState(10); // 10% default

    const vat = (revenue - cost) * (vatRate / 100);
    const net = revenue - cost - vat;

    const handleReset = () => {
        setRevenue(0);
        setCost(0);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "종합소득세는 어떻게 계산되나요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "종합소득세는 연간 총 소득에서 필요경비와 소득공제를 뺀 '과세표준'에 세율(6%~45%)을 곱하여 계산합니다. 매출이 높을수록 높은 세율이 적용되는 누진세 구조입니다."
                }
            },
            {
                "@type": "Question",
                "name": "간이과세자도 종합소득세를 내야 하나요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "네, 간이과세자는 부가가치세 혜택을 받는 것이며, 종합소득세는 일반과세자와 동일하게 소득에 대해 신고 및 납부해야 합니다."
                }
            }
        ]
    };

    return (
        <section className="max-w-4xl mx-auto py-8 px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">세금 계산기 (간이)</h1>
                    <p className="text-slate-400">
                        예상 매출과 매입액을 입력하여 부가세와 순수익을 계산해 보세요.
                    </p>
                </div>
                <button
                    onClick={handleReset}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                    title="초기화"
                >
                    <RotateCcw className="w-5 h-5" />
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">매출액 (원)</label>
                        <input
                            type="number"
                            value={revenue || ""}
                            onChange={(e) => setRevenue(Number(e.target.value))}
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">매입액 (원)</label>
                        <input
                            type="number"
                            value={cost || ""}
                            onChange={(e) => setCost(Number(e.target.value))}
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                        />
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">예상 부가세 (10%)</span>
                        <span className="text-xl font-bold text-rose-400">{vat.toLocaleString()} 원</span>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium">예상 순수익</span>
                        <span className="text-3xl font-bold text-indigo-400">{net.toLocaleString()} 원</span>
                    </div>
                </div>
            </div>

            <ToolContent
                title="사업자 세금 계산 가이드"
                description={`사업자가 납부해야 할 주요 세금은 부가가치세와 종합소득세입니다. \n이 계산기는 매출과 매입을 기반으로 대략적인 부가가치세와 예상 순수익을 확인하는 데 도움을 줍니다.`}
                formula={`예상 부가세 = (매출액 - 매입액) × 10%\n예상 순수익 = 매출액 - 매입액 - 부가세`}
                usage={[
                    "월별 예상 세금 미리 확인하기",
                    "매입 자료(세금계산서) 수취 필요성 점검",
                    "사업 손익 구조 파악"
                ]}
                faqs={[
                    {
                        question: "종합소득세는 어떻게 계산되나요?",
                        answer: "종합소득세는 연간 총 소득에서 필요경비와 소득공제를 뺀 '과세표준'에 세율(6%~45%)을 곱하여 계산합니다. 매출이 높을수록 높은 세율이 적용되는 누진세 구조입니다."
                    },
                    {
                        question: "간이과세자도 종합소득세를 내야 하나요?",
                        answer: "네, 간이과세자는 부가가치세 혜택을 받는 것이며, 종합소득세는 일반과세자와 동일하게 소득에 대해 신고 및 납부해야 합니다."
                    }
                ]}
            />

            <RelatedTools currentPath="/tax-calculator" />
        </section>
    );
}
