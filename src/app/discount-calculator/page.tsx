"use client";

import { useState } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import { RotateCcw } from "lucide-react";
import ToolContent from "@/components/shared/ToolContent";

export default function DiscountCalculatorPage() {
    const [price, setPrice] = useState(0);
    const [discountRate, setDiscountRate] = useState(0);
    const [coupon, setCoupon] = useState(0);

    const discountAmount = price * (discountRate / 100);
    const priceAfterRate = price - discountAmount;
    const finalPrice = Math.max(0, priceAfterRate - coupon);
    const totalDiscount = price - finalPrice;

    const handleReset = () => {
        setPrice(0);
        setDiscountRate(0);
        setCoupon(0);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "할인율과 쿠폰 중 무엇이 먼저 적용되나요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "일반적으로 % 할인이 먼저 적용된 후, 금액 할인(쿠폰)이 차감됩니다. 이 계산기도 해당 방식을 따릅니다."
                }
            },
            {
                "@type": "Question",
                "name": "마진율을 유지하려면 할인율을 어떻게 설정해야 하나요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "목표 마진율을 정한 후, 원가와 판매가를 고려하여 역산해야 합니다. 마진 계산기를 함께 활용하면 도움이 됩니다."
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
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">할인 계산기</h1>
                    <p className="text-slate-400">
                        할인율과 쿠폰을 적용한 최종 판매가를 계산합니다.
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
                        <label className="block text-sm font-medium text-slate-300 mb-2">정가 (원)</label>
                        <input
                            type="number"
                            value={price || ""}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">할인율 (%)</label>
                            <input
                                type="number"
                                value={discountRate || ""}
                                onChange={(e) => setDiscountRate(Number(e.target.value))}
                                placeholder="0"
                                className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">추가 쿠폰 (원)</label>
                            <input
                                type="number"
                                value={coupon || ""}
                                onChange={(e) => setCoupon(Number(e.target.value))}
                                placeholder="0"
                                className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">총 할인액</span>
                        <span className="text-xl font-bold text-slate-200">{totalDiscount.toLocaleString()} 원</span>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium">최종 가격</span>
                        <span className="text-3xl font-bold text-indigo-400">{finalPrice.toLocaleString()} 원</span>
                    </div>
                </div>
            </div>

            <ToolContent
                title="할인율 계산 및 가격 책정 가이드"
                description={`할인 프로모션 기획 시 최종 판매가와 총 할인 금액을 미리 확인하는 것이 중요합니다. \n이 계산기는 정가에 퍼센트(%) 할인과 금액(원) 할인을 순차적으로 적용하여 최종 가격을 산출합니다.`}
                formula={`1단계: 정가 × (1 - 할인율/100) = 1차 할인가\n2단계: 1차 할인가 - 추가 쿠폰 금액 = 최종 판매가`}
                usage={[
                    "세일 기간 프로모션 가격 설정 시",
                    "쿠폰 발행 전 마진 시뮬레이션",
                    "쇼핑몰 상세페이지 할인가 표기 확인"
                ]}
                faqs={[
                    {
                        question: "할인율과 쿠폰 중 무엇이 먼저 적용되나요?",
                        answer: "일반적으로 % 할인이 먼저 적용된 후, 금액 할인(쿠폰)이 차감됩니다. 이 계산기도 해당 방식을 따릅니다."
                    },
                    {
                        question: "마진율을 유지하려면 할인율을 어떻게 설정해야 하나요?",
                        answer: "목표 마진율을 정한 후, 원가와 판매가를 고려하여 역산해야 합니다. 마진 계산기를 함께 활용하면 도움이 됩니다."
                    }
                ]}
            />

            <RelatedTools currentPath="/discount-calculator" />
        </section>
    );
}
