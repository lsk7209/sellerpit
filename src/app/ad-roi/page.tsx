import { Metadata } from "next";
import AdRoiCalculator from "./AdRoiCalculator";

export const metadata: Metadata = {
    title: "광고 ROI 계산기 - ROAS, ROI 자동 계산 | Seller Fit",
    description: "네이버 스마트스토어, 쿠팡 광고 성과 분석. 광고비 대비 매출(ROAS)과 순이익(ROI)을 즉시 계산하여 광고 효율을 최적화하세요.",
    keywords: ["광고ROI", "ROAS계산", "광고효율", "네이버광고", "쿠팡광고", "광고수익률", "마케팅ROI"],
    alternates: {
        canonical: "./",
    },
};

export default function AdRoiPage() {
    return <AdRoiCalculator />;
}
