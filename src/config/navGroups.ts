// src/config/navGroups.ts

type NavItem = {
    href: string;
    label: string;
    icon: any;
};

type NavGroup = {
    label: string;
    items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
    {
        label: "계산기",
        items: [
            { href: "/", label: "마진 계산기", icon: require("lucide-react").Calculator },
            { href: "/vat", label: "부가세 계산기", icon: require("lucide-react").Percent },
            { href: "/cbm", label: "CBM 계산기", icon: require("lucide-react").Box },
            { href: "/tax-calculator", label: "세금 계산기", icon: require("lucide-react").TrendingUp },
            { href: "/discount-calculator", label: "할인 계산기", icon: require("lucide-react").TrendingUp },
            { href: "/break-even", label: "손익분기점", icon: require("lucide-react").TrendingUp },
            { href: "/profit-trend", label: "수익 추이", icon: require("lucide-react").TrendingUp },
            { href: "/sales-forecast", label: "판매 예측", icon: require("lucide-react").TrendingUp },
        ],
    },
    {
        label: "플랫폼·배송",
        items: [
            { href: "/platform-comparison", label: "플랫폼 비교", icon: require("lucide-react").TrendingUp },
            { href: "/shipping-cost", label: "배송비 계산", icon: require("lucide-react").TrendingUp },
        ],
    },
    {
        label: "광고·환율·재고",
        items: [
            { href: "/ad-roi", label: "광고 ROI", icon: require("lucide-react").TrendingUp },
            { href: "/currency-converter", label: "환율 변환", icon: require("lucide-react").TrendingUp },
            { href: "/inventory-cost", label: "재고 비용", icon: require("lucide-react").TrendingUp },
        ],
    },
    {
        label: "기타",
        items: [
            { href: "/glossary", label: "셀러 용어 사전", icon: require("lucide-react").BookOpen },
        ],
    },
];
