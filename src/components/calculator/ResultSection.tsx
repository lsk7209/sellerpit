"use client";



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalculationResult } from "@/types/calculator";
import { formatNumber } from "@/lib/utils";
import { Copy, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface ResultSectionProps {
    result: CalculationResult;
}

export default function ResultSection({ result }: ResultSectionProps) {
    const copyReport = () => {
        const report = `
[셀러핏 마진 계산 리포트]
------------------
순수익: ${formatNumber(result.netProfit)}원
마진율: ${result.margin}%
------------------
판매가: ${formatNumber(result.breakdown.salePrice)}원
매입가: ${formatNumber(result.breakdown.costPrice)}원
배송비: ${formatNumber(result.breakdown.shippingCost)}원
마켓수수료: ${formatNumber(result.breakdown.marketFee)}원
부가세: ${formatNumber(result.breakdown.vat)}원
기타비용: ${formatNumber(result.breakdown.extraCost)}원
------------------
* 셀러핏(Seller Fit)에서 계산됨
`;
        navigator.clipboard.writeText(report);
        toast.success("리포트가 복사되었습니다.");
    };

    const isProfit = result.netProfit > 0;
    const marginClass = result.margin >= 20
        ? "text-emerald-600"
        : result.margin > 0
            ? "text-amber-600"
            : "text-rose-600";

    const bgClass = result.margin >= 20
        ? "bg-emerald-50 border-emerald-100"
        : result.margin > 0
            ? "bg-amber-50 border-amber-100"
            : "bg-rose-50 border-rose-100";

    return (
        <Card className="border-slate-200 shadow-sm overflow-hidden">
            <CardHeader className="bg-slate-50 border-b border-slate-100 flex flex-row items-center justify-between py-4">
                <CardTitle className="text-slate-800 flex items-center gap-2 text-lg">
                    {isProfit ? (
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                    ) : (
                        <TrendingDown className="w-5 h-5 text-rose-600" />
                    )}
                    계산 결과
                </CardTitle>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={copyReport}
                    className="h-8 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border-slate-200"
                >
                    <Copy className="w-4 h-4 mr-2" />
                    리포트 복사
                </Button>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                {/* Main Result */}
                <div className={`rounded-xl p-6 border ${bgClass} text-center space-y-2`}>
                    <p className="text-slate-600 font-medium">예상 순수익</p>
                    <div className={`text-4xl font-bold ${isProfit ? "text-slate-900" : "text-rose-600"}`}>
                        {formatNumber(result.netProfit)}원
                    </div>
                    <div className={`text-lg font-bold flex items-center justify-center gap-1 ${marginClass}`}>
                        마진율 {result.margin}%
                        {result.margin < 15 && (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <AlertCircle className="w-4 h-4 text-amber-500" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>마진율이 15% 미만입니다. 광고비 등을 고려하면 적자가 날 수 있습니다.</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-slate-900 text-sm">상세 내역</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                            <span className="text-slate-600">판매가</span>
                            <span className="font-bold text-slate-900">{formatNumber(result.breakdown.salePrice)}원</span>
                        </div>

                        <div className="border-t border-slate-100 my-2"></div>

                        <div className="flex justify-between px-2">
                            <span className="text-slate-500">상품 매입가</span>
                            <span className="text-slate-700">-{formatNumber(result.breakdown.costPrice)}원</span>
                        </div>
                        <div className="flex justify-between px-2">
                            <span className="text-slate-500">배송비</span>
                            <span className="text-slate-700">-{formatNumber(result.breakdown.shippingCost)}원</span>
                        </div>
                        <div className="flex justify-between px-2">
                            <span className="text-slate-500">마켓 수수료</span>
                            <span className="text-slate-700">-{formatNumber(result.breakdown.marketFee)}원</span>
                        </div>
                        <div className="flex justify-between px-2">
                            <span className="text-slate-500">부가세</span>
                            <span className="text-slate-700">-{formatNumber(result.breakdown.vat)}원</span>
                        </div>
                        {result.breakdown.extraCost > 0 && (
                            <div className="flex justify-between px-2">
                                <span className="text-slate-500">기타 비용</span>
                                <span className="text-slate-700">-{formatNumber(result.breakdown.extraCost)}원</span>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
