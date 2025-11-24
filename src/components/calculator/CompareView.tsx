"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalculatorState, CalculationResult } from "@/types/calculator";
import InputSection from "./InputSection";
import ResultSection from "./ResultSection";
import { calculateMargin } from "@/lib/calculator";
import { ArrowRightLeft } from "lucide-react";

const INITIAL_STATE: CalculatorState = {
    salePrice: 0,
    costPrice: 0,
    shippingCost: 0,
    marketFee: 0,
    vat: 0,
    extraCost: 0,
    isVatIncluded: true,
};

export default function CompareView() {
    const [productA, setProductA] = useState<CalculatorState>(INITIAL_STATE);
    const [productB, setProductB] = useState<CalculatorState>(INITIAL_STATE);
    const [resultA, setResultA] = useState<CalculationResult | null>(null);
    const [resultB, setResultB] = useState<CalculationResult | null>(null);

    useEffect(() => {
        setResultA(calculateMargin(productA));
    }, [productA]);

    useEffect(() => {
        setResultB(calculateMargin(productB));
    }, [productB]);

    const handleChangeA = (key: keyof CalculatorState, value: number) => {
        setProductA(prev => ({ ...prev, [key]: value }));
    };

    const handleVatChangeA = (checked: boolean) => {
        setProductA(prev => ({ ...prev, isVatIncluded: checked }));
    };

    const handleChangeB = (key: keyof CalculatorState, value: number) => {
        setProductB(prev => ({ ...prev, [key]: value }));
    };

    const handleVatChangeB = (checked: boolean) => {
        setProductB(prev => ({ ...prev, isVatIncluded: checked }));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
                <ArrowRightLeft className="w-6 h-6 text-indigo-600" />
                <h2>상품 수익성 비교 (A/B 테스트)</h2>
            </div>

            <Tabs defaultValue="mobile" className="w-full md:hidden">
                <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1">
                    <TabsTrigger value="mobile" className="data-[state=active]:bg-white data-[state=active]:text-indigo-600">상품 A</TabsTrigger>
                    <TabsTrigger value="desktop" className="data-[state=active]:bg-white data-[state=active]:text-indigo-600">상품 B</TabsTrigger>
                </TabsList>
                <TabsContent value="mobile" className="space-y-4">
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <CardTitle className="text-slate-800">상품 A 설정</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <InputSection values={productA} onChange={handleChangeA} onVatChange={handleVatChangeA} />
                        </CardContent>
                    </Card>
                    {resultA && <ResultSection result={resultA} />}
                </TabsContent>
                <TabsContent value="desktop" className="space-y-4">
                    <Card className="border-slate-200 shadow-sm">
                        <CardHeader className="bg-slate-50 border-b border-slate-100">
                            <CardTitle className="text-slate-800">상품 B 설정</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <InputSection values={productB} onChange={handleChangeB} onVatChange={handleVatChangeB} />
                        </CardContent>
                    </Card>
                    {resultB && <ResultSection result={resultB} />}
                </TabsContent>
            </Tabs>

            <div className="hidden md:grid md:grid-cols-2 gap-6">
                {/* Product A Column */}
                <div className="space-y-6">
                    <Card className="border-slate-200 shadow-sm border-t-4 border-t-indigo-500">
                        <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                            <CardTitle className="text-slate-800 flex justify-between items-center">
                                <span>상품 A</span>
                                <span className="text-xs font-normal text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">기준 상품</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <InputSection values={productA} onChange={handleChangeA} onVatChange={handleVatChangeA} />
                        </CardContent>
                    </Card>
                    {resultA && <ResultSection result={resultA} />}
                </div>

                {/* Product B Column */}
                <div className="space-y-6">
                    <Card className="border-slate-200 shadow-sm border-t-4 border-t-emerald-500">
                        <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                            <CardTitle className="text-slate-800 flex justify-between items-center">
                                <span>상품 B</span>
                                <span className="text-xs font-normal text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">비교 상품</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <InputSection values={productB} onChange={handleChangeB} onVatChange={handleVatChangeB} />
                        </CardContent>
                    </Card>
                    {resultB && <ResultSection result={resultB} />}
                </div>
            </div>
        </div>
    );
}
