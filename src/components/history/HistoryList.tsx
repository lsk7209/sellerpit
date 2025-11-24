"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Trash2, RotateCcw, X, History } from "lucide-react";
import { CalculatorState, CalculationResult } from "@/types/calculator";
import { formatNumber } from "@/lib/utils";

interface HistoryItem {
    id: string;
    timestamp: number;
    input: CalculatorState;
    result: CalculationResult;
}

interface HistoryListProps {
    onRestore: (state: CalculatorState) => void;
}

export default function HistoryList({ onRestore }: HistoryListProps) {
    const [history, setHistory] = useState<HistoryItem[]>(() => {
        if (typeof window === "undefined") return [];

        const saved = localStorage.getItem("calculator_history");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Validate items to ensure they match the expected structure
                if (Array.isArray(parsed)) {
                    return parsed.filter((item: any) =>
                        item &&
                        item.result &&
                        typeof item.result.netProfit === 'number' &&
                        item.input
                    );
                }
                return [];
            } catch (e) {
                console.error("Failed to parse history", e);
                return [];
            }
        }
        return [];
    });

    const deleteItem = (id: string) => {
        const newHistory = history.filter(item => item.id !== id);
        setHistory(newHistory);
        localStorage.setItem("calculator_history", JSON.stringify(newHistory));
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem("calculator_history");
    };

    if (history.length === 0) {
        return (
            <Card className="border-slate-200 shadow-sm h-full">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-800 flex items-center gap-2">
                        <History className="w-5 h-5 text-indigo-600" />
                        계산 기록
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex flex-col items-center justify-center h-[300px] text-slate-500">
                    <History className="w-12 h-12 mb-4 text-slate-300" />
                    <p>저장된 계산 기록이 없습니다.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-slate-200 shadow-sm h-full flex flex-col">
            <CardHeader className="bg-slate-50 border-b border-slate-100 flex flex-row items-center justify-between py-4">
                <CardTitle className="text-slate-800 flex items-center gap-2 text-lg">
                    <History className="w-5 h-5 text-indigo-600" />
                    계산 기록
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                        {history.length}
                    </Badge>
                </CardTitle>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearHistory}
                    className="text-slate-500 hover:text-red-600 hover:bg-red-50 h-8 px-2"
                >
                    <Trash2 className="w-4 h-4 mr-1" />
                    전체 삭제
                </Button>
            </CardHeader>
            <CardContent className="p-0 flex-1 min-h-0">
                <ScrollArea className="h-[400px]">
                    <div className="divide-y divide-slate-100">
                        {history.map((item) => {
                            if (!item?.result) return null;
                            return (
                                <div key={item.id} className="p-4 hover:bg-slate-50 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-slate-900">
                                                    {formatNumber(item.result.netProfit)}원
                                                </span>
                                                <Badge variant={item.result.margin >= 20 ? "default" : "destructive"} className={item.result.margin >= 20 ? "bg-emerald-500 hover:bg-emerald-600" : "bg-rose-500 hover:bg-rose-600"}>
                                                    마진 {item.result.margin}%
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-slate-400">
                                                {new Date(item.timestamp).toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                                                onClick={() => onRestore(item.input)}
                                                title="불러오기"
                                            >
                                                <RotateCcw className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50"
                                                onClick={() => deleteItem(item.id)}
                                                title="삭제"
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-500">
                                        <div className="flex justify-between">
                                            <span>판매가:</span>
                                            <span>{formatNumber(item.input.salePrice)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>매입가:</span>
                                            <span>{formatNumber(item.input.costPrice)}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
