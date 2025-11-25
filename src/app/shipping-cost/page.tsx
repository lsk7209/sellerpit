import { Metadata } from "next";
import ShippingCostCalculator from "./ShippingCostCalculator";

export const metadata: Metadata = {
    title: "배송비 계산기 - 국내/해외 배송비 예상 | Seller Fit",
    description: "무게와 배송 지역별 배송비를 즉시 계산하세요. 국내 일반/제주도, 해외 미국/중국/일본 배송비 예상 견적. 온라인 셀러 필수 도구.",
    keywords: ["배송비계산", "택배비", "국제배송비", "제주배송비", "해외배송", "물류비용", "배송료"],
    alternates: {
        canonical: "./",
    },
};

export default function ShippingCostPage() {
    return <ShippingCostCalculator />;
}
