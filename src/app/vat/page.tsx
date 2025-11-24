

"use client";

import { useState } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import { RotateCcw } from "lucide-react";
import ToolContent from "@/components/shared/ToolContent";

export default function VatCalculatorPage() {
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState<"inclusive" | "exclusive">("inclusive");

    const calculate = () => {
        if (type === "exclusive") {
            // 별도: 입력값이 공급가액
            const supply = amount;
            const vat = Math.floor(amount * 0.1);
            const total = supply + vat;
            return { supply, vat, total };
        } else {
            // 포함: 입력값이 합계금액
            const supply = Math.round(amount / 1.1);
            const vat = amount - supply;
            const total = amount;
            return { supply, vat, total };
        }
    };

    const { supply, vat, total } = calculate();

    const handleReset = () => {
        setAmount(0);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "일반과세자와 간이과세자의 차이는 무엇인가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "일반과세자는 10% 세율이 적용되며 세금계산서 발행이 가능합니다. 간이과세자는 업종별로 1.5%~4%의 낮은 세율이 적용되지만 매입세액 공제가 제한적이며, 연 매출 4,800만 원 미만이면 세금계산서 발행이 불가능할 수 있습니다."
                }
            },
            {
                "@type": "Question",
                "name": "부가세 신고 기간은 언제인가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "일반과세자는 매년 1월(2기 확정)과 7월(1기 확정)에 신고합니다. 법인사업자는 4월과 10월에 예정신고가 추가됩니다. 간이과세자는 매년 1월에 한 번 신고합니다."
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
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">부가세 계산기</h1>
                    <p className="text-slate-400">
                        공급가액 또는 합계금액을 기준으로 부가가치세(VAT)를 계산합니다.
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
                <div className="space-y-6">
                    <div className="flex bg-slate-800 p-1 rounded-lg">
                        <button
                            onClick={() => setType("inclusive")}
                            className={`flex-1 py-3 rounded-md text-sm font-medium transition-all ${type === "inclusive" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                        >
                            부가세 포함 (합계금액)
                        </button>
                        <button
                            onClick={() => setType("exclusive")}
                            className={`flex-1 py-3 rounded-md text-sm font-medium transition-all ${type === "exclusive" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                        >
                            부가세 별도 (공급가액)
                        </button>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">금액 입력 (원)</label>
                        <input
                            type="number"
                            value={amount || ""}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-2xl font-bold placeholder:text-slate-600"
                        />
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">공급가액</span>
                        <span className="text-lg font-semibold text-slate-200">{supply.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">부가세 (10%)</span>
                        <span className="text-lg font-semibold text-rose-400">{vat.toLocaleString()} 원</span>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-bold">합계금액</span>
                        <span className="text-3xl font-bold text-indigo-400">{total.toLocaleString()} 원</span>
                    </div>
                </div>
            </div>

            <ToolContent
                title="부가가치세(VAT)란?"
                description={`부가가치세(Value Added Tax)는 재화나 용역의 공급 과정에서 생성된 부가가치에 대해 부과되는 세금입니다. \n한국의 일반적인 부가세율은 10%입니다. 사업자는 매출세액에서 매입세액을 뺀 금액을 납부하게 됩니다.`}
                formula={`공급가액 기준: 합계금액 = 공급가액 + (공급가액 × 10%)\n합계금액 기준: 공급가액 = 합계금액 ÷ 1.1`}
                usage={[
                    "세금계산서 발행 시 공급가액과 세액 구분",
                    "상품 가격 책정 시 마진 계산 전 세금 공제",
                    "종합소득세 신고 시 비용 처리 확인"
                ]}
                faqs={[
                    {
                        question: "일반과세자와 간이과세자의 차이는?",
                        answer: "일반과세자는 10% 세율이 적용되며 세금계산서 발행이 가능합니다. 간이과세자는 1.5%~4%의 낮은 세율이 적용되지만 매입세액 공제가 제한적입니다."
                    },
                    {
                        question: "부가세 신고 기간은 언제인가요?",
                        answer: "일반과세자는 1월과 7월에 확정신고를 하며, 법인사업자는 4월과 10월에 예정신고도 진행합니다."
                    }
                ]}
            />

            <RelatedTools currentPath="/vat" />
        </section>
    );
}
