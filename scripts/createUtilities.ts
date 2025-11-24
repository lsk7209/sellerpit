
import { promises as fs } from "fs";
import { join, resolve } from "path";

// Define the structure locally to avoid import issues if ts-node isn't perfectly set up for alias imports
type NavItem = {
    href: string;
    label: string;
    icon: any;
};

type NavGroup = {
    label: string;
    items: NavItem[];
};

// We will read the file content directly or just hardcode the list for the script to be safe, 
// but importing is better if it works. Let's try to import.
// If import fails, we will fallback to a hardcoded list in a second attempt or just parse the file.
// For now, let's try to import relative to this script.
// Note: We need to handle the 'lucide-react' require in the config file if we import it in Node.
// The config file uses `require("lucide-react")`. This should work in Node.

const ROOT = resolve(__dirname, "..");

// To avoid runtime issues with the `require('lucide-react')` in the config file during script execution,
// we might want to just regex parse the file or duplicate the config here. 
// Duplicating is safer for a quick script to avoid dependency hell with 'require' in TS files.

const NAV_GROUPS_DATA = [
    {
        label: "계산기",
        items: [
            { href: "/", label: "마진 계산기" },
            { href: "/vat", label: "부가세 계산기" },
            { href: "/cbm", label: "CBM 계산기" },
            { href: "/tax-calculator", label: "세금 계산기" },
            { href: "/discount-calculator", label: "할인 계산기" },
            { href: "/break-even", label: "손익분기점" },
            { href: "/profit-trend", label: "수익 추이" },
            { href: "/sales-forecast", label: "판매 예측" },
        ],
    },
    {
        label: "플랫폼·배송",
        items: [
            { href: "/platform-comparison", label: "플랫폼 비교" },
            { href: "/shipping-cost", label: "배송비 계산" },
        ],
    },
    {
        label: "광고·환율·재고",
        items: [
            { href: "/ad-roi", label: "광고 ROI" },
            { href: "/currency-converter", label: "환율 변환" },
            { href: "/inventory-cost", label: "재고 비용" },
        ],
    },
    {
        label: "기타",
        items: [
            { href: "/glossary", label: "셀러 용어 사전" },
        ],
    },
];

async function ensureDir(dir: string) {
    await fs.mkdir(dir, { recursive: true });
}

function toPascalCase(str: string) {
    return str
        .replace(/(^\w|-\w)/g, (m) => m.replace("-", "").toUpperCase())
        .replace(/\s+/g, "");
}

async function createPage(route: string, label: string) {
    const parts = route.split("/").filter(Boolean);
    if (parts.length === 0) return; // Skip root

    const pageDir = join(ROOT, "src", "app", ...parts);
    const pagePath = join(pageDir, "page.tsx");

    try {
        await fs.access(pagePath);
        console.log(`✅ 이미 존재: ${pagePath}`);
        return;
    } catch {
        // File doesn't exist
    }

    await ensureDir(pageDir);

    const content = `import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${label} - 셀러핏",
  description: "${label} 기능을 제공합니다.",
};

export default function ${toPascalCase(label)}Page() {
  return (
    <section className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">${label}</h1>
      <p className="text-lg text-slate-200 mb-6">
        ${label} 페이지는 현재 준비 중입니다. 곧 유용한 기능을 제공해 드리겠습니다.
      </p>
      <div className="bg-slate-800 p-4 rounded-lg">
        <p className="text-slate-400">(기능 구현 예정)</p>
      </div>
    </section>
  );
}
`;

    await fs.writeFile(pagePath, content, "utf8");
    console.log(`🛠️ 생성 완료: ${pagePath}`);
}

async function main() {
    console.log("🚀 유틸리티 페이지 스캐폴딩 시작...");
    for (const group of NAV_GROUPS_DATA) {
        for (const item of group.items) {
            if (item.href === "/") continue;
            await createPage(item.href, item.label);
        }
    }
    console.log("🎉 모든 페이지 생성이 완료되었습니다.");
}

main().catch((e) => {
    console.error("❌ 오류 발생:", e);
    process.exit(1);
});
