"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { CalculatorState, HistoryItem } from "@/types/calculator";
import { formatNumber } from "@/lib/utils";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";

import CompareView from "./CompareView";
import HistoryList from "../history/HistoryList";
import SeoContent from "../seo/SeoContent";
import { calculateMargin } from "@/lib/calculator";

export default function Calculator() {
    const [mode, setMode] = useState<"single" | "compare">("single");
    const [valuesA, setValuesA] = useState<CalculatorState>({
        salePrice: 0,
        costPrice: 0,
        shippingCost: 0,
        marketFee: 0,
        vat: 0,
        extraCost: 0,
        isVatIncluded: true,
    });
    const [valuesB, setValuesB] = useState<CalculatorState>({
        salePrice: 0,
        costPrice: 0,
        shippingCost: 0,
        marketFee: 0,
        vat: 0,
        extraCost: 0,
        isVatIncluded: true,
    });
    const [historyUpdateTrigger, setHistoryUpdateTrigger] = useState(0);

    const resultA = calculateMargin(valuesA);
    const resultB = calculateMargin(valuesB);

    // History Saving Logic (Debounced)
    useEffect(() => {
        const saveToHistory = () => {
            // Don't save empty states
            if (valuesA.salePrice === 0 && valuesA.costPrice === 0 && valuesA.shippingCost === 0 && valuesA.marketFee === 0) return;

            const newItem: HistoryItem = {
                id: Date.now().toString(),
                timestamp: Date.now(),
                input: valuesA,
                result: resultA,
            };

            const saved = localStorage.getItem("profit_lab_history");
            const history: HistoryItem[] = saved ? JSON.parse(saved) : [];

            // Prevent duplicate saves (check if last item is identical)
            if (history.length > 0) {
                const lastItem = history[0];
                const isSameInput = JSON.stringify(lastItem.input) === JSON.stringify(valuesA);
                if (isSameInput) return;
            }

            const newHistory = [newItem, ...history].slice(0, 50);
            localStorage.setItem("calculator_history", JSON.stringify(newHistory));
            setHistoryUpdateTrigger(prev => prev + 1);
        };

        const timeoutId = setTimeout(saveToHistory, 2000); // Save after 2 seconds of inactivity
        return () => clearTimeout(timeoutId);
    }, [valuesA, valuesB, mode, resultA.netProfit, resultB.netProfit]);

    const handleRestore = (state: CalculatorState) => {
        setValuesA(state);
    };

    const handleValueChangeA = (key: keyof CalculatorState, value: number) => {
        setValuesA((prev) => ({ ...prev, [key]: value }));
    };

    const handleVatChangeA = (checked: boolean) => {
        setValuesA((prev) => ({ ...prev, isVatIncluded: checked }));
    };

    const handleValueChangeB = (key: keyof CalculatorState, value: number) => {
        setValuesB((prev) => ({ ...prev, [key]: value }));
    };

    const handleVatChangeB = (checked: boolean) => {
        setValuesB((prev) => ({ ...prev, isVatIncluded: checked }));
    };

    const handleReset = () => {
        const emptyState: CalculatorState = {
            salePrice: 0,
            costPrice: 0,
            shippingCost: 0,
            marketFee: 0,
            vat: 0,
            extraCost: 0,
            isVatIncluded: true,
        };
        setValuesA(emptyState);
        setValuesB(emptyState);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-8 pb-32">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900">셀러핏</h1>
                <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900 hover:bg-slate-100" onClick={handleReset}>
                    <RotateCcw className="w-5 h-5" />
                </Button>
            </div>

            <Tabs value={mode} onValueChange={(v) => setMode(v as "single" | "compare")} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-100">
                    <TabsTrigger value="single" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">단일 계산</TabsTrigger>
                    <TabsTrigger value="compare" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">비교 모드</TabsTrigger>
                </TabsList>

                <TabsContent value="single" className="mt-6 space-y-6">
                    <Card className="bg-white border-slate-200 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-slate-900">마진 계산기</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <InputSection
                                values={valuesA}
                                onChange={handleValueChangeA}
                                onVatChange={handleVatChangeA}
                            />
                        </CardContent>
                    </Card>

                    <ResultSection result={resultA} />
                </TabsContent>

                <TabsContent value="compare" className="mt-6">
                    <CompareView />
                </TabsContent>
            </Tabs>

            <HistoryList onRestore={handleRestore} />

            <SeoContent />

            {/* Mobile Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 pb-8 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-center max-w-md mx-auto">
                    <span className="text-slate-500 text-sm">예상 순수익 ({mode === 'single' ? '단일' : 'A vs B'})</span>
                    <div className="flex items-baseline gap-2">
                        {mode === 'single' ? (
                            <>
                                <span className={`text-xl font-bold ${resultA.netProfit < 0 ? "text-rose-500" : "text-emerald-500"}`}>
                                    {formatNumber(resultA.netProfit)}원
                                </span>
                                <span className={`text-sm ${resultA.netProfit < 0 ? "text-rose-400" : "text-emerald-400"}`}>
                                    ({resultA.margin.toFixed(1)}%)
                                </span>
                            </>
                        ) : (
                            <div className="flex gap-4 text-sm">
                                <span className={resultA.netProfit < 0 ? "text-rose-600" : "text-emerald-600"}>A: {formatNumber(resultA.netProfit)}</span>
                                <span className="text-slate-400">|</span>
                                <span className={resultB.netProfit < 0 ? "text-rose-600" : "text-emerald-600"}>B: {formatNumber(resultB.netProfit)}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
