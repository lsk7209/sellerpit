"use client";

import { useState, useEffect } from "react";
import RelatedTools from "@/components/shared/RelatedTools";
import { RotateCcw, ArrowRightLeft } from "lucide-react";

// Mock rates (In a real app, fetch from an API like exchangerate-api.com)
const MOCK_RATES: Record<string, number> = {
    USD: 1,
    KRW: 1350,
    CNY: 7.2,
    JPY: 150,
    EUR: 0.92,
};

export default function CurrencyConverterPage() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("KRW");
    const [converted, setConverted] = useState(0);

    useEffect(() => {
        // Convert base to USD then to target
        const rateFrom = MOCK_RATES[from];
        const rateTo = MOCK_RATES[to];

        // Amount / RateFrom = USD Value
        // USD Value * RateTo = Target Value
        const result = (amount / rateFrom) * rateTo;
        setConverted(result);
    }, [amount, from, to]);

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    return (
        <section className="max-w-4xl mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-indigo-500 mb-2">환율 변환기</h1>
                    <p className="text-slate-400">
                        주요 통화 간의 환율을 실시간(예시)으로 변환합니다.
                    </p>
                </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 max-w-2xl mx-auto mb-12 shadow-xl">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 w-full">
                        <label className="block text-sm font-medium text-slate-400 mb-2">보낼 금액</label>
                        <div className="flex bg-slate-800 rounded-xl border border-slate-700 overflow-hidden focus-within:border-indigo-500 transition-colors">
                            <input
                                type="number"
                                value={amount || ""}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="flex-1 p-4 bg-transparent text-white outline-none text-xl font-bold placeholder:text-slate-600"
                            />
                            <select
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                                className="bg-slate-700 text-white px-4 outline-none font-bold cursor-pointer hover:bg-slate-600 transition-colors"
                            >
                                {Object.keys(MOCK_RATES).map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleSwap}
                        className="p-3 bg-slate-800 rounded-full text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all shadow-lg transform hover:scale-110 active:scale-95"
                    >
                        <ArrowRightLeft className="w-6 h-6" />
                    </button>

                    <div className="flex-1 w-full">
                        <label className="block text-sm font-medium text-slate-400 mb-2">받을 금액 (예상)</label>
                        <div className="flex bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                            <div className="flex-1 p-4 bg-transparent text-indigo-400 text-xl font-bold flex items-center">
                                {converted.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                            </div>
                            <select
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                className="bg-slate-700 text-white px-4 outline-none font-bold cursor-pointer hover:bg-slate-600 transition-colors"
                            >
                                {Object.keys(MOCK_RATES).map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-500">
                        1 {from} = <span className="text-slate-300 font-medium">{(MOCK_RATES[to] / MOCK_RATES[from]).toFixed(4)} {to}</span>
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                        * 기준 환율: 1 USD = {MOCK_RATES.KRW} KRW (예시 데이터)
                    </p>
                </div>
            </div>

            <RelatedTools currentPath="/currency-converter" />
        </section>
    );
}
