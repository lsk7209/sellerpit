export interface CalculatorState {
    salePrice: number;
    costPrice: number;
    shippingCost: number;
    marketFee: number; // Changed from feePercent to marketFee to match usage
    vat: number;
    extraCost: number;
    isVatIncluded: boolean;
}

export interface CalculationResult {
    netProfit: number;
    margin: number;
    breakdown: {
        salePrice: number;
        costPrice: number;
        shippingCost: number;
        marketFee: number;
        vat: number;
        extraCost: number;
    };
}

export interface HistoryItem {
    id: string;
    timestamp: number;
    input: CalculatorState;
    result: CalculationResult;
}
