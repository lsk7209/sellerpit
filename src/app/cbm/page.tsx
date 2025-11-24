"use client";

import { useState } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import { RotateCcw } from "lucide-react";

export default function CbmCalculatorPage() {
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [unit, setUnit] = useState<"cm" | "mm" | "m">("cm");

    const calculateCbm = () => {
        let l = length, w = width, h = height;
        if (unit === "mm") { l /= 1000; w /= 1000; h /= 1000; }
        else if (unit === "cm") { l /= 100; w /= 100; h /= 100; }
        // m is already m

        const cbmPerUnit = l * w * h;
        return cbmPerUnit * quantity;
    };

    const totalCbm = calculateCbm();

    const handleReset = () => {
        setLength(0);
        setWidth(0);
        setHeight(0);
        setQuantity(1);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "CBM이란 무엇인가요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CBM(Cubic Meter)은 입방미터를 뜻하며, 가로 1m x 세로 1m x 높이 1m인 정육면체의 부피를 의미합니다. 국제 물류에서 화물의 부피를 측정하여 운송비를 산정하는 기준이 됩니다."
                }
            },
            {
                "@type": "Question",
                "name": "컨테이너 하나에 몇 CBM이 들어가나요?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "일반적으로 20피트(20ft) 컨테이너는 약 28~33 CBM, 40피트(40ft) 컨테이너는 약 58~67 CBM 정도 적재 가능합니다. 단, 포장 상태와 적재 방식에 따라 실제 적재량은 달라질 수 있습니다."
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
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">CBM 계산기</h1>
                    <p className="text-slate-400">
                        화물의 가로, 세로, 높이를 입력하여 CBM(입방미터)을 계산합니다.
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
                        {["cm", "mm", "m"].map((u) => (
                            <button
                                key={u}
                                onClick={() => setUnit(u as any)}
                                className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${unit === u ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                            >
                                {u.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-2">가로</label>
                            <input
                                type="number"
                                value={length || ""}
                                onChange={e => setLength(Number(e.target.value))}
                                placeholder="0"
                                className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 outline-none text-center"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-2">세로</label>
                            <input
                                type="number"
                                value={width || ""}
                                onChange={e => setWidth(Number(e.target.value))}
                                placeholder="0"
                                className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 outline-none text-center"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-2">높이</label>
                            <input
                                type="number"
                                value={height || ""}
                                onChange={e => setHeight(Number(e.target.value))}
                                placeholder="0"
                                className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 outline-none text-center"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">수량 (박스 개수)</label>
                        <input
                            type="number"
                            value={quantity || ""}
                            onChange={e => setQuantity(Number(e.target.value))}
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 outline-none text-lg font-medium"
                        />
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">총 CBM</span>
                        <span className="text-4xl font-bold text-indigo-400">{totalCbm.toFixed(4)}</span>
                    </div>

                    <div className="h-px bg-slate-800" />

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">20ft 컨테이너 (약 28 CBM)</span>
                            <span className="text-slate-200 font-medium">약 {(totalCbm / 28 * 100).toFixed(1)}% 차지</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${Math.min(100, totalCbm / 28 * 100)}%` }} />
                        </div>

                        <div className="flex justify-between text-sm mt-4">
                            <span className="text-slate-400">40ft 컨테이너 (약 58 CBM)</span>
                            <span className="text-slate-200 font-medium">약 {(totalCbm / 58 * 100).toFixed(1)}% 차지</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${Math.min(100, totalCbm / 58 * 100)}%` }} />
                        </div>
                    </div>
                </div>
            </div>

            <ToolContent
                title="CBM(Cubic Meter) 계산 가이드"
                description={`CBM은 화물의 부피를 나타내는 단위로, 해상/항공 운송료 산정의 기준이 됩니다.\n정확한 CBM 계산을 통해 컨테이너 적재량을 예측하고 물류비를 절감할 수 있습니다.`}
                formula={`가로(m) × 세로(m) × 높이(m) × 박스 수량 = 총 CBM`}
                usage={[
                    "해상 운송(LCL/FCL) 견적 산출 시",
                    "컨테이너 적재 가능 수량 예측 시",
                    "창고 보관료 견적 확인 시"
                ]}
                faqs={[
                    {
                        question: "CBM 계산 시 단위는 무엇인가요?",
                        answer: "기본적으로 미터(m) 단위를 사용합니다. cm나 mm로 입력하더라도 공식 적용 시에는 m로 환산하여 계산해야 합니다."
                    },
                    {
                        question: "R/T(Revenue Ton)란 무엇인가요?",
                        answer: "운임톤이라고도 하며, CBM(부피)과 중량(Weight) 중 더 큰 값을 기준으로 운임을 부과하는 방식입니다. 해상 운송은 주로 CBM을 기준으로 합니다."
                    }
                ]}
            />

            <RelatedTools currentPath="/cbm" />
        </section>
    );
}
