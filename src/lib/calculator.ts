import { CalculatorState, CalculationResult } from "@/types/calculator";

/**
 * 마진 계산 함수
 * @param state - 계산기 입력 상태
 * @returns 계산 결과 (순수익, 마진율, 상세 내역)
 */
export function calculateMargin(state: CalculatorState): CalculationResult {
    const { salePrice, costPrice, shippingCost, marketFee, vat, extraCost, isVatIncluded } = state;

    // 판매가에서 부가세 분리 (부가세 포함인 경우)
    const actualSalePrice = isVatIncluded ? salePrice / 1.1 : salePrice;

    // 마켓 수수료 계산 (판매가의 %)
    const calculatedMarketFee = (actualSalePrice * marketFee) / 100;

    // 부가세 계산 (판매가의 10%)
    const calculatedVat = isVatIncluded ? salePrice - actualSalePrice : actualSalePrice * 0.1;

    // 총 비용 계산
    const totalCost = costPrice + shippingCost + calculatedMarketFee + calculatedVat + extraCost;

    // 순수익 계산
    const netProfit = salePrice - totalCost;

    // 마진율 계산 (순수익 / 판매가 * 100)
    const margin = salePrice > 0 ? Math.round((netProfit / salePrice) * 100 * 10) / 10 : 0;

    return {
        netProfit: Math.round(netProfit),
        margin,
        breakdown: {
            salePrice: Math.round(salePrice),
            costPrice: Math.round(costPrice),
            shippingCost: Math.round(shippingCost),
            marketFee: Math.round(calculatedMarketFee),
            vat: Math.round(calculatedVat),
            extraCost: Math.round(extraCost),
        },
    };
}
