"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TOOLS = [
    { href: "/", label: "마진 계산기", desc: "순수익과 마진율을 빠르게 확인하세요." },
    { href: "/vat", label: "부가세 계산기", desc: "공급가액과 세액을 간편하게 계산합니다." },
    { href: "/tax-calculator", label: "세금 계산기", desc: "예상 부가세와 종합소득세를 계산합니다." },
    { href: "/cbm", label: "CBM 계산기", desc: "수출입 화물의 부피(CBM)를 계산합니다." },
    { href: "/break-even", label: "손익분기점", desc: "언제부터 이익이 나는지 확인해보세요." },
    { href: "/platform-comparison", label: "플랫폼 비교", desc: "스마트스토어, 쿠팡 등 수수료 비교." },
];

export default function RelatedTools({ currentPath }: { currentPath?: string }) {
    // Filter out the current page
    const suggestions = TOOLS.filter(t => t.href !== currentPath).slice(0, 3);
    // Randomize or rotate? For now, just static slice is fine, or random.
    // Let's make it random to expose more tools.
    const shuffled = TOOLS.filter(t => t.href !== currentPath).sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div className="mt-12 border-t border-slate-800 pt-8">
            <h3 className="text-xl font-bold text-slate-200 mb-4">함께 쓰면 좋은 도구</h3>
            <div className="grid gap-4 md:grid-cols-3">
                {shuffled.map((tool) => (
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
