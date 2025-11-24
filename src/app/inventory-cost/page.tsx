"use client";

import { useState } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import { RotateCcw } from "lucide-react";

export default function InventoryCostPage() {
    const [storage, setStorage] = useState(0);
    const [inbound, setInbound] = useState(0);
    const [outbound, setOutbound] = useState(0);
    const total = storage + inbound + outbound;

    const handleReset = () => {
        setStorage(0);
        setInbound(0);
        setOutbound(0);
    };

    return (
        <section className="max-w-4xl mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">재고 비용 계산기</h1>
                    <p className="text-slate-400">
                        보관비, 입고비, 출고비를 입력하면 총 비용을 자동으로 합산합니다.
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
                        <label className="block text-sm font-medium text-slate-300 mb-2">보관비 (원)</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                            value={storage || ""}
                            onChange={e => setStorage(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">입고비 (원)</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                            value={inbound || ""}
                            onChange={e => setInbound(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">출고비 (원)</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-lg font-medium placeholder:text-slate-600"
                            value={outbound || ""}
                            onChange={e => setOutbound(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400">총 재고 비용</span>
                        <span className="text-3xl font-bold text-indigo-400">{total.toLocaleString()} 원</span>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">보관비 비중</span>
                            <span className="text-slate-300">{total > 0 ? ((storage / total) * 100).toFixed(1) : 0}%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${total > 0 ? (storage / total) * 100 : 0}%` }} />
                        </div>
                    </div>
                </div>
            </div>

            <RelatedTools currentPath="/inventory-cost" />
        </section>
    );
}
