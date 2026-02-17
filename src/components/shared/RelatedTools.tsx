"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NAV_GROUPS } from "@/config/navGroups";

const TOOL_DESCRIPTIONS: Record<string, string> = {
    "/": "순수익과 마진율을 빠르게 계산해 수익 구조를 점검하세요.",
    "/vat": "공급가액, 부가세, 합계 금액을 즉시 계산합니다.",
    "/cbm": "화물 부피(CBM)와 컨테이너 적재량을 계산합니다.",
    "/tax-calculator": "예상 부가세와 종합소득세를 간편하게 확인하세요.",
    "/discount-calculator": "할인율과 최종 판매가를 빠르게 계산합니다.",
    "/break-even": "손익분기점과 목표 판매량을 계산해보세요.",
    "/shipping-cost": "국내·해외 배송비를 조건별로 비교 계산합니다.",
    "/ad-roi": "ROAS/ROI를 계산해 광고 효율을 점검하세요.",
    "/currency-converter": "주요 통화를 실무 기준으로 빠르게 변환합니다.",
    "/inventory-cost": "재고 보관·입출고 비용을 합산해 관리합니다.",
    "/profit-trend": "월별 매출·비용·이익 추이를 시각적으로 분석합니다.",
    "/sales-forecast": "과거 실적 기반의 향후 판매량을 예측합니다.",
    "/platform-comparison": "판매 플랫폼 수수료를 비교해 의사결정을 돕습니다.",
    "/glossary": "온라인 판매 필수 용어를 쉽게 찾아볼 수 있습니다.",
};

export default function RelatedTools({ currentPath }: { currentPath?: string }) {
    const suggestions = NAV_GROUPS.flatMap((group) => group.items)
        .filter((item) => item.href !== currentPath)
        .map((item) => ({
            href: item.href,
            label: item.label,
            desc: TOOL_DESCRIPTIONS[item.href] ?? `${item.label} 관련 계산과 분석을 도와드립니다.`,
        }))
        .slice(0, 3);

    return (
        <div className="mt-12 border-t border-slate-800 pt-8">
            <h3 className="text-xl font-bold text-slate-200 mb-4">함께 쓰면 좋은 도구</h3>
            <div className="grid gap-4 md:grid-cols-3">
                {suggestions.map((tool) => (
                    <Link
                        key={tool.href}
                        href={tool.href}
                        className="group block p-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-indigo-500 transition-all"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-indigo-400 group-hover:text-indigo-300">{tool.label}</h4>
                            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                        </div>
                        <p className="text-sm text-slate-400 line-clamp-2">{tool.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
