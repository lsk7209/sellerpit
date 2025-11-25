"use client";

import { useState } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import ToolContent from "@/components/shared/ToolContent";
import { RotateCcw } from "lucide-react";

export default function AdRoiCalculator() {
    const [adSpend, setAdSpend] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [marginRate, setMarginRate] = useState(30);

    const roas = adSpend > 0 ? (revenue / adSpend) * 100 : 0;
    const profit = (revenue * (marginRate / 100)) - adSpend;
    const roi = adSpend > 0 ? (profit / adSpend) * 100 : 0;

    const handleReset = () => {
        setAdSpend(0);
        setRevenue(0);
        setMarginRate(30);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "ROAS와 ROI의 차이는 무엇인가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ROAS는 광고비 대비 매출액 비율로, 광고 1원당 발생한 매출을 의미합니다. ROI는 광고비 대비 순이익 비율로, 실제 남은 이익을 계산합니다. ROAS가 높아도 마진이 낮으면 ROI는 마이너스일 수 있습니다."
                }
            },
            {
                "@type": "Question",
                "name": "적정 ROAS 기준은 얼마인가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "업종과 마진율에 따라 다르지만, 일반적으로 ROAS 300% 이상이면 양호하다고 봅니다. 단, 마진율이 30%라면 최소 ROAS 333% 이상은 되어야 손익분기점을 넘깁니다."
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
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">광고 ROI 계산기</h1>
                    <p className="text-slate-400">
                        광고비와 매출을 입력하여 ROAS(광고 수익률)와 ROI(투자 수익률)를 계산합니다.
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
                        <label className="block text-sm font-medium text-slate-300 mb-2">광고비 (원)</label>
                        <input
                            type="number"
                            value={adSpend || ""}
                            onChange={(e) => setAdSpend(Number(e.target.value))}
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">광고 매출 (원)</label>
                        <input
                            type="number"
                            value={revenue || ""}
                            onChange={(e) => setRevenue(Number(e.target.value))}
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">상품 마진율 (%)</label>
                        <input
                            type="number"
                            value={marginRate || ""}
                            onChange={(e) => setMarginRate(Number(e.target.value))}
                            placeholder="30"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                        />
                    </div>
                </div>

                <div className="grid gap-4">
                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-slate-400 font-medium">ROAS (광고 수익률)</span>
                            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">목표: 300%↑</span>
                        </div>
                        <span className={`text-4xl font-bold ${roas >= 300 ? 'text-emerald-400' : roas >= 200 ? 'text-yellow-400' : 'text-rose-400'}`}>
                            {roas.toFixed(0)}%
                        </span>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 mt-4 overflow-hidden">
                            <div
                                className={`h-full rounded-full ${roas >= 300 ? 'bg-emerald-500' : roas >= 200 ? 'bg-yellow-500' : 'bg-rose-500'}`}
                                style={{ width: `${Math.min(100, roas / 5)}%` }}
                            />
                        </div>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-slate-400 font-medium">ROI (순수익률)</span>
                            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">순수익: {profit.toLocaleString()}원</span>
                        </div>
                        <span className={`text-4xl font-bold ${roi > 0 ? 'text-indigo-400' : 'text-rose-400'}`}>
                            {roi.toFixed(0)}%
                        </span>
                    </div>
                </div>
            </div>

            <ToolContent
                title="광고 ROI/ROAS 분석 가이드"
                description={`광고 성과를 정확히 측정하려면 ROAS(매출 기준)와 ROI(이익 기준)를 함께 봐야 합니다.\n높은 ROAS에도 불구하고 마진이 낮으면 실제 수익은 마이너스일 수 있습니다.`}
                formula={`ROAS = (광고로 발생한 매출 ÷ 광고비) × 100\nROI = ((매출 × 마진율 - 광고비) ÷ 광고비) × 100`}
                usage={[
                    "네이버 파워링크, 쇼핑검색 광고 성과 분석",
                    "쿠팡 로켓그로스, 브랜드관 광고 효율 측정",
                    "광고 예산 배분 및 입찰가 조정 판단",
                    "손익분기 ROAS 계산 (최소 ROAS = 100 ÷ 마진율)"
                ]}
                faqs={[
                    {
                        question: "ROAS와 ROI의 차이는 무엇인가요?",
                        answer: "ROAS는 광고비 대비 매출액 비율로, 광고 1원당 발생한 매출을 의미합니다. ROI는 광고비 대비 순이익 비율로, 실제 남은 이익을 계산합니다. ROAS가 높아도 마진이 낮으면 ROI는 마이너스일 수 있습니다."
                    },
                    {
                        question: "적정 ROAS 기준은 얼마인가요?",
                        answer: "업종과 마진율에 따라 다르지만, 일반적으로 ROAS 300% 이상이면 양호하다고 봅니다. 단, 마진율이 30%라면 최소 ROAS 333% 이상은 되어야 손익분기점을 넘깁니다."
                    },
                    {
                        question: "광고 효율을 높이는 방법은?",
                        answer: "타겟팅 정교화, 키워드 최적화, 상품 상세페이지 개선, 전환율 높은 시간대 집중 광고, A/B 테스트를 통한 소재 개선 등이 효과적입니다."
                    }
                ]}
            />

            <RelatedTools currentPath="/ad-roi" />
        </section>
    );
}
