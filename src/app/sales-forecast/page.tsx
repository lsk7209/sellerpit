"use client";

import { useState } from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const PAST_DATA = [
    { month: "1월", sales: 120 },
    { month: "2월", sales: 132 },
    { month: "3월", sales: 101 },
    { month: "4월", sales: 134 },
    { month: "5월", sales: 190 },
    { month: "6월", sales: 230 },
];

export default function SalesForecastPage() {
    // Simple linear regression forecast
    // y = mx + c
    // x = 0, 1, 2, 3, 4, 5
    // y = sales

    const n = PAST_DATA.length;
    const sumX = n * (n - 1) / 2; // 0+1+2+3+4+5 = 15
    const sumY = PAST_DATA.reduce((acc, cur) => acc + cur.sales, 0);
    const sumXY = PAST_DATA.reduce((acc, cur, idx) => acc + (idx * cur.sales), 0);
    const sumXX = PAST_DATA.reduce((acc, cur, idx) => acc + (idx * idx), 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const forecastData = [
        ...PAST_DATA.map((d, i) => ({ ...d, type: "실적", forecast: null })),
        { month: "7월 (예상)", sales: null, type: "예측", forecast: Math.round(slope * 6 + intercept) },
        { month: "8월 (예상)", sales: null, type: "예측", forecast: Math.round(slope * 7 + intercept) },
        { month: "9월 (예상)", sales: null, type: "예측", forecast: Math.round(slope * 8 + intercept) },
    ];

    return (
        <section className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">판매 예측 (Beta)</h1>
            <p className="text-lg text-slate-200 mb-6">
                과거 판매 데이터를 기반으로 향후 3개월의 매출을 예측합니다. (단순 선형 회귀)
            </p>

            <div className="bg-slate-800 p-6 rounded-lg mb-6 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={forecastData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                            itemStyle={{ color: '#e2e8f0' }}
                        />
                        <Legend />
                        <Bar dataKey="sales" name="실적" barSize={20} fill="#818cf8" />
                        <Line type="monotone" dataKey="forecast" name="예측" stroke="#f472b6" strokeWidth={3} strokeDasharray="5 5" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">분석 리포트</h3>
                <p className="text-slate-400 text-sm">
                    현재 성장 추세(기울기: {slope.toFixed(2)})를 유지할 경우,
                    다음 달 예상 판매량은 약 <span className="text-indigo-400 font-bold">{Math.round(slope * 6 + intercept)}</span>건 입니다.
                </p>
            </div>
        </section>
    );
}
