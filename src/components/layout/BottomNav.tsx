import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator, Percent, Box, BookOpen } from "lucide-react";

const NAV_ITEMS = [
    { href: "/", label: "마진", icon: Calculator },
    { href: "/vat", label: "부가세", icon: Percent },
    { href: "/cbm", label: "CBM", icon: Box },
    { href: "/glossary", label: "용어", icon: BookOpen },
];

export default function BottomNav() {
    const pathname = usePathname();
    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 bg-slate-900/95 backdrop-blur border-t border-slate-800 px-2 py-2 md:hidden">
            {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex min-w-0 flex-col items-center gap-1 rounded-md py-1 text-[10px] leading-tight transition-colors ${isActive ? "text-indigo-400" : "text-slate-400 hover:text-slate-200"}`}
                    >
                        <Icon className={`w-5 h-5 ${isActive ? "text-indigo-400" : "text-slate-400"}`} />
                        <span className="truncate">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
