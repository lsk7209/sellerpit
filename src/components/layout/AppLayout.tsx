"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    Calculator,
    Percent,
    Box,
    BookOpen,
    TrendingUp,
    Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BottomNav from "@/components/layout/BottomNav";

// Navigation groups for better readability
type NavGroup = {
    label: string;
    items: { href: string; label: string; icon: any }[];
};

const NAV_GROUPS: NavGroup[] = [
    {
        label: "계산기",
        items: [
            { href: "/", label: "마진 계산기", icon: Calculator },
            { href: "/vat", label: "부가세 계산기", icon: Percent },
            { href: "/cbm", label: "CBM 계산기", icon: Box },
            { href: "/tax-calculator", label: "세금 계산기", icon: TrendingUp },
            { href: "/discount-calculator", label: "할인 계산기", icon: TrendingUp },
            { href: "/break-even", label: "손익분기점", icon: TrendingUp },
            { href: "/profit-trend", label: "수익 추이", icon: TrendingUp },
            { href: "/sales-forecast", label: "판매 예측", icon: TrendingUp },
        ],
    },
    {
        label: "플랫폼·배송",
        items: [
            { href: "/platform-comparison", label: "플랫폼 비교", icon: TrendingUp },
            { href: "/shipping-cost", label: "배송비 계산", icon: TrendingUp },
        ],
    },
    {
        label: "광고·환율·재고",
        items: [
            { href: "/ad-roi", label: "광고 ROI", icon: TrendingUp },
            { href: "/currency-converter", label: "환율 변환", icon: TrendingUp },
            { href: "/inventory-cost", label: "재고 비용", icon: TrendingUp },
        ],
    },
    {
        label: "기타",
        items: [
            { href: "/glossary", label: "셀러 용어 사전", icon: BookOpen },
        ],
    },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 flex-col bg-slate-900 text-slate-200 border-r border-slate-800">
                <div className="p-4 flex items-center gap-2 border-b border-slate-800">
                    <div className="bg-indigo-600 p-1.5 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Seller Fit</span>
                </div>
                {/* Navigation groups */}
                <nav className="flex-1 p-4 space-y-4">
                    {NAV_GROUPS.map((group) => (
                        <div key={group.label}>
                            <p className="text-xs font-semibold text-slate-400 mb-1">{group.label}</p>
                            {group.items.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? "bg-indigo-700 text-indigo-100" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                            }`}
                                    >
                                        <Icon className={`w-5 h-5 ${isActive ? "text-indigo-100" : "text-slate-400"}`} />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </nav>
                {/* Footer links */}
                <div className="p-4 border-t border-slate-800 space-y-2">
                    <Link href="/about" className="block text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                        서비스 소개
                    </Link>
                    <Link href="/contact" className="block text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                        문의하기
                    </Link>
                    <Link href="/privacy" className="block text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                        개인정보처리방침
                    </Link>
                    <Link href="/terms" className="block text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                        이용약관
                    </Link>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 text-slate-200">
                <div className="flex items-center gap-2">
                    <div className="bg-indigo-600 p-1.5 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold">Seller Fit</span>
                </div>
                <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-slate-200">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 bg-slate-900 text-slate-200 p-0">
                        <div className="p-4 flex items-center gap-2 border-b border-slate-800">
                            <div className="bg-indigo-600 p-1.5 rounded-lg">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">셀러핏</span>
                        </div>
                        <nav className="flex-1 p-4 space-y-4">
                            {NAV_GROUPS.map((group) => (
                                <div key={group.label}>
                                    <p className="text-xs font-semibold text-slate-400 mb-1">{group.label}</p>
                                    {group.items.map((item) => {
                                        const isActive = pathname === item.href;
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsMobileOpen(false)}
                                                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? "bg-indigo-700 text-indigo-100" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                                    }`}
                                            >
                                                <Icon className={`w-5 h-5 ${isActive ? "text-indigo-100" : "text-slate-400"}`} />
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            ))}
                        </nav>
                        <div className="p-4 border-t border-slate-800 space-y-2">
                            <Link href="/about" onClick={() => setIsMobileOpen(false)} className="block text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                                서비스 소개
                            </Link>
                            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="block text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                                문의하기
                            </Link>
                            <Link href="/privacy" onClick={() => setIsMobileOpen(false)} className="block text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                                개인정보처리방침
                            </Link>
                            <Link href="/terms" onClick={() => setIsMobileOpen(false)} className="block text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                                이용약관
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Main Content */}
            <main className="flex-1 pt-4 md:pt-0 md:ml-64 p-4 md:p-8 bg-slate-950 text-slate-200 overflow-y-auto">
                {children}
            </main>

            {/* Mobile Bottom Navigation */}
            <BottomNav />
        </div>
    );
}
