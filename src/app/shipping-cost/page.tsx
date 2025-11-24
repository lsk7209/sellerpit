"use client";

import { useState } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import ToolContent from "@/components/shared/ToolContent";
import { RotateCcw } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "배송비 계산기 - 국내/해외 배송비 예상 | Seller Fit",
    description: "무게와 배송 지역별 배송비를 즉시 계산하세요. 국내 일반/제주도, 해외 미국/중국/일본 배송비 예상 견적. 온라인 셀러 필수 도구.",
    keywords: ["배송비계산", "택배비", "국제배송비", "제주배송비", "해외배송", "물류비용", "배송료"],
    alternates: {
        canonical: "./",
    },
};

const ZONES = [
    { id: "kr-main", label: "국내 (일반)", baseRate: 3000, perKg: 500 },
    { id: "kr-jeju", label: "제주/도서산간", baseRate: 6000, perKg: 500 },
    { id: "intl-us", label: "해외 (미국)", baseRate: 25000, perKg: 12000 },
    { id: "intl-cn", label: "해외 (중국)", baseRate: 18000, perKg: 8000 },
    { id: "intl-jp", label: "해외 (일본)", baseRate: 20000, perKg: 9000 },
];

export default function ShippingCostPage() {
    const [weight, setWeight] = useState(1);
    const [zoneId, setZoneId] = useState("kr-main");

    const selectedZone = ZONES.find(z => z.id === zoneId) || ZONES[0];

    const extraWeight = Math.max(0, Math.ceil(weight) - 1);
    const estimatedCost = selectedZone.baseRate + (extraWeight * selectedZone.perKg);

    const handleReset = () => {
        setWeight(1);
        setZoneId("kr-main");
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "제주도 배송비는 왜 더 비싼가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "제주도와 도서산간 지역은 추가 운송 단계(선박, 항공)가 필요하고 물량이 적어 배송 효율이 낮기 때문에 추가 비용이 발생합니다."
                }
            },
            {
                "@type": "Question",
                "name": "해외 배송비는 어떻게 결정되나요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "해외 배송비는 무게, 부피(CBM), 목적지 국가, 배송 방식(항공/선박), 관세 및 통관 비용 등을 종합적으로 고려하여 산정됩니다."
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
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">배송비 계산기</h1>
                    <p className="text-slate-400">
                        무게와 배송 지역을 기준으로 대략적인 배송비를 계산합니다.
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
                        <label className="block text-sm font-medium text-slate-300 mb-2">배송 지역</label>
                        <select
                            value={zoneId}
                            onChange={(e) => setZoneId(e.target.value)}
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 outline-none transition-all text-lg font-medium appearance-none cursor-pointer hover:bg-slate-700"
                        >
                            {ZONES.map(z => (
                                <option key={z.id} value={z.id}>{z.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">무게 (kg)</label>
                        <input
                            type="number"
                            value={weight || ""}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            placeholder="0"
                            min="0"
                            step="0.1"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                        />
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">기본 요금</span>
                        <span className="text-slate-200">{selectedZone.baseRate.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">추가 요금 ({extraWeight}kg)</span>
                        <span className="text-slate-200">{(extraWeight * selectedZone.perKg).toLocaleString()} 원</span>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-bold">예상 배송비</span>
                        <span className="text-3xl font-bold text-indigo-400">{estimatedCost.toLocaleString()} 원</span>
                    </div>
                    <p className="text-xs text-slate-500 text-center bg-slate-800/50 p-2 rounded">
                        * 실제 택배사 요금과 다를 수 있으며, 유류할증료 등 추가 비용은 포함되지 않았습니다.
                    </p>
                </div>
            </div>

            <ToolContent
                title="배송비 계산 및 물류비 절감 가이드"
                description={`배송비는 온라인 셀러의 주요 고정 비용 중 하나입니다.\n정확한 배송비 예측을 통해 상품 가격을 책정하고, 무료배송 기준을 설정하며, 물류 전략을 수립할 수 있습니다.`}
                formula={`예상 배송비 = 기본 요금 + (추가 무게 × kg당 요금)\n* 추가 무게 = 총 무게 - 1kg (1kg 초과분)`}
                usage={[
                    "상품 가격 책정 시 배송비 반영",
                    "무료배송 기준 금액 설정",
                    "해외 직구/역직구 물류비 예측",
                    "제주/도서산간 추가 배송비 안내"
                ]}
                faqs={[
                    {
                        question: "제주도 배송비는 왜 더 비싼가요?",
                        answer: "제주도와 도서산간 지역은 추가 운송 단계(선박, 항공)가 필요하고 물량이 적어 배송 효율이 낮기 때문에 추가 비용이 발생합니다."
                    },
                    {
                        question: "해외 배송비는 어떻게 결정되나요?",
                        answer: "해외 배송비는 무게, 부피(CBM), 목적지 국가, 배송 방식(항공/선박), 관세 및 통관 비용 등을 종합적으로 고려하여 산정됩니다."
                    },
                    {
                        question: "배송비를 절감하는 방법은?",
                        answer: "포장 최적화로 부피/무게 줄이기, 택배사 계약 할인, 합배송 유도, 배송대행 서비스 활용 등의 방법이 있습니다."
                    }
                ]}
            />

            <RelatedTools currentPath="/shipping-cost" />
        </section>
    );
}
