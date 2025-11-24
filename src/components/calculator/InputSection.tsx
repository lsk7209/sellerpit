"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { formatNumber, parseNumber } from "@/lib/utils";
import { CalculatorState } from "@/types/calculator";

interface InputSectionProps {
    values: CalculatorState;
    onChange: (key: keyof CalculatorState, value: number) => void;
    onVatChange: (checked: boolean) => void;
}

const FEE_PRESETS = [
    { name: "스마트스토어", value: 5.63 },
    { name: "쿠팡", value: 10.8 },
    { name: "11번가", value: 13 },
    { name: "지마켓/옥션", value: 13 },
];

export default function InputSection({ values, onChange, onVatChange }: InputSectionProps) {
    const handleInputChange = (key: keyof CalculatorState, rawValue: string) => {
        const num = parseNumber(rawValue);
        onChange(key, num);
    };

    const addThousands = (key: keyof CalculatorState) => {
        const current = values[key] as number;
        onChange(key, (current || 0) + 1000);
    };

    return (
        <div className="space-y-6">
            {/* VAT Toggle */}
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="space-y-0.5">
                    <Label className="text-base font-medium text-slate-900">부가세(VAT) 포함</Label>
                    <p className="text-xs text-slate-500">매입/매출 세액을 자동으로 계산합니다.</p>
                </div>
                <Switch
                    checked={values.isVatIncluded}
                    onCheckedChange={onVatChange}
                    className="data-[state=checked]:bg-indigo-600"
                />
            </div>

            {/* Sale Price */}
            <div className="space-y-2">
                <Label htmlFor="salePrice" className="text-slate-700 font-medium">판매가 (원)</Label>
                <div className="flex gap-2">
                    <Input
                        id="salePrice"
                        type="text"
                        inputMode="numeric"
                        value={formatNumber(values.salePrice)}
                        onChange={(e) => handleInputChange("salePrice", e.target.value)}
                        className="text-lg font-semibold bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="0"
                    />
                    <Button
                        variant="outline"
                        onClick={() => addThousands("salePrice")}
                        className="shrink-0 text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-indigo-600"
                    >
                        +1000
                    </Button>
                </div>
            </div>

            {/* Cost Price */}
            <div className="space-y-2">
                <Label htmlFor="costPrice" className="text-slate-700 font-medium">매입가 (원)</Label>
                <div className="flex gap-2">
                    <Input
                        id="costPrice"
                        type="text"
                        inputMode="numeric"
                        value={formatNumber(values.costPrice)}
                        onChange={(e) => handleInputChange("costPrice", e.target.value)}
                        className="text-lg font-semibold bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="0"
                    />
                    <Button
                        variant="outline"
                        onClick={() => addThousands("costPrice")}
                        className="shrink-0 text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-indigo-600"
                    >
                        +1000
                    </Button>
                </div>
            </div>

            {/* Shipping Cost */}
            <div className="space-y-2">
                <Label htmlFor="shippingCost" className="text-slate-700 font-medium">배송비 (원)</Label>
                <div className="flex gap-2">
                    <Input
                        id="shippingCost"
                        type="text"
                        inputMode="numeric"
                        value={formatNumber(values.shippingCost)}
                        onChange={(e) => handleInputChange("shippingCost", e.target.value)}
                        className="text-lg font-semibold bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="0"
                    />
                    <Button
                        variant="outline"
                        onClick={() => addThousands("shippingCost")}
                        className="shrink-0 text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-indigo-600"
                    >
                        +1000
                    </Button>
                </div>
            </div>

            {/* Market Fee */}
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <Label htmlFor="marketFee" className="text-slate-700 font-medium">마켓 수수료 (%)</Label>
                    <span className="text-xs text-slate-500">VAT 별도</span>
                </div>
                <Input
                    id="marketFee"
                    type="number"
                    inputMode="decimal"
                    value={values.marketFee}
                    onChange={(e) => onChange("marketFee", parseFloat(e.target.value) || 0)}
                    className="text-lg font-semibold bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="0"
                />
                <div className="flex flex-wrap gap-2">
                    {FEE_PRESETS.map((preset) => (
                        <Badge
                            key={preset.name}
                            variant="secondary"
                            className="cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 bg-slate-100 text-slate-600 border border-slate-200 transition-colors"
                            onClick={() => onChange("marketFee", preset.value)}
                        >
                            {preset.name} {preset.value}%
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Extra Cost */}
            <div className="space-y-2">
                <Label htmlFor="extraCost" className="text-slate-700 font-medium">기타 비용 (포장/사은품 등)</Label>
                <div className="flex gap-2">
                    <Input
                        id="extraCost"
                        type="text"
                        inputMode="numeric"
                        value={formatNumber(values.extraCost)}
                        onChange={(e) => handleInputChange("extraCost", e.target.value)}
                        className="text-lg font-semibold bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="0"
                    />
                    <Button
                        variant="outline"
                        onClick={() => addThousands("extraCost")}
                        className="shrink-0 text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-indigo-600"
                    >
                        +1000
                    </Button>
                </div>
            </div>
        </div>
    );
}
