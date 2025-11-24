"use client";

import { useState } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import { RotateCcw } from "lucide-react";
import ToolContent from "@/components/shared/ToolContent";

export default function BreakEvenPage() {
    const [fixedCost, setFixedCost] = useState(0);
    const [variableCost, setVariableCost] = useState(0);
    const [price, setPrice] = useState(0);

    // BEP (Quantity) = Fixed Cost / (Price - Variable Cost)
    const marginPerUnit = price - variableCost;
    const bepQuantity = marginPerUnit > 0 ? Math.ceil(fixedCost / marginPerUnit) : 0;
    const bepRevenue = bepQuantity * price;

    const handleReset = () => {
        setFixedCost(0);
        setVariableCost(0);
        setPrice(0);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "고정비와 변동비의 차이는 무엇인가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "고정비는 매출과 관계없이 매달 일정하게 나가는 비용(임대료, 인건비 등)이며, 변동비는 판매량에 비례하여 증가하는 비용(원가, 포장비, 수수료 등)입니다."
                }
            },
            {
                "@type": "Question",
                "name": "손익분기점을 낮추려면 어떻게 해야 하나요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "고정비를 줄이거나, 판매가를 높여 개당 마진(공헌이익)을 늘리거나, 변동비를 절감하는 방법이 있습니다."
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
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">손익분기점(BEP) 계산기</h1>
                    <p className="text-slate-400">
                        고정비와 변동비를 입력하여 손익분기점이 되는 판매 수량을 확인하세요.
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
                        <label className="block text-sm font-medium text-slate-300 mb-2">고정비 (월세, 인건비 등)</label>
                        <input
                            type="number"
                            value={fixedCost || ""}
                            onChange={(e) => setFixedCost(Number(e.target.value))}
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">개당 판매가</label>
                            <input
                                type="number"
                                value={price || ""}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                placeholder="0"
                                className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">개당 변동비</label>
                            <input
                                type="number"
                                value={variableCost || ""}
                                onChange={(e) => setVariableCost(Number(e.target.value))}
                                placeholder="0"
                                className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">개당 공헌이익</span>
                        <span className={`text-xl font-bold ${marginPerUnit > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {marginPerUnit.toLocaleString()} 원
                        </span>
                    </div>

                    <div className="h-px bg-slate-800" />

                    {marginPerUnit <= 0 ? (
                        <div className="text-rose-400 text-center py-4 font-medium bg-rose-500/10 rounded-lg">
                            판매가가 변동비보다 커야 계산이 가능합니다.
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-300 font-medium">손익분기 판매량</span>
                                <span className="text-3xl font-bold text-indigo-400">{bepQuantity.toLocaleString()} 개</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">손익분기 매출액</span>
                                <span className="text-lg font-semibold text-slate-200">{bepRevenue.toLocaleString()} 원</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <ToolContent
                title="손익분기점(BEP) 분석 가이드"
                description={`손익분기점(Break-Even Point)은 총 매출과 총 비용이 같아져 이익도 손실도 없는 상태를 말합니다. \n사업 초기 목표 설정이나 신제품 가격 책정 시 필수적으로 확인해야 하는 지표입니다.`}
                formula={`손익분기 판매량 = 고정비 ÷ (판매가 - 변동비)\n손익분기 매출액 = 손익분기 판매량 × 판매가`}
                usage={[
                    "신규 사업 런칭 전 최소 판매 목표 설정",
                    "고정비 투자(인력, 사무실) 전 수익성 검토",
                    "가격 할인 프로모션 시 마지노선 확인"
                ]}
                faqs={[
                    {
                        question: "고정비와 변동비의 차이는 무엇인가요?",
                        answer: "고정비는 매출과 관계없이 매달 일정하게 나가는 비용(임대료, 인건비 등)이며, 변동비는 판매량에 비례하여 증가하는 비용(원가, 포장비, 수수료 등)입니다."
                    },
                    {
                        question: "손익분기점을 낮추려면 어떻게 해야 하나요?",
                        answer: "고정비를 줄이거나, 판매가를 높여 개당 마진(공헌이익)을 늘리거나, 변동비를 절감하는 방법이 있습니다."
                    }
                ]}
            />

            <RelatedTools currentPath="/break-even" />
        </section>
    );
}
