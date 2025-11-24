import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, Percent, Box, BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
    { href: "/", label: "마진 계산기", icon: Calculator },
    { href: "/vat", label: "부가세 계산기", icon: Percent },
    { href: "/cbm", label: "CBM 계산기", icon: Box },
    { href: "/glossary", label: "셀러 용어 사전", icon: BookOpen },
];

export default function BottomNav() {
    const pathname = usePathname();
    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-around bg-slate-900 border-t border-slate-800 p-2 md:hidden">
            {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 text-xs transition-colors ${isActive ? "text-indigo-400" : "text-slate-400 hover:text-slate-200"}`}
                    >
                        <Icon className={`w-5 h-5 ${isActive ? "text-indigo-400" : "text-slate-400"}`} />
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
