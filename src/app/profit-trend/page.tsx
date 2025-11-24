"use client";

import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const INITIAL_DATA = [
    { month: "1월", revenue: 500, cost: 300, profit: 200 },
    { month: "2월", revenue: 600, cost: 350, profit: 250 },
    { month: "3월", revenue: 750, cost: 400, profit: 350 },
    { month: "4월", revenue: 900, cost: 500, profit: 400 },
    { month: "5월", revenue: 850, cost: 480, profit: 370 },
    { month: "6월", revenue: 1000, cost: 550, profit: 450 },
];

export default function ProfitTrendPage() {
    const [data, setData] = useState(INITIAL_DATA);

    // Simple editable table could be added here, but for now we show the chart.

    return (
        <section className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">수익 추이 분석</h1>
            <p className="text-lg text-slate-200 mb-6">
                월별 매출과 비용을 입력하여 수익 변화 추세를 시각적으로 확인하세요.
            </p>

            <div className="bg-slate-800 p-6 rounded-lg mb-6 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                            itemStyle={{ color: '#e2e8f0' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" name="매출" stroke="#818cf8" strokeWidth={2} />
                        <Line type="monotone" dataKey="cost" name="비용" stroke="#f87171" strokeWidth={2} />
                        <Line type="monotone" dataKey="profit" name="순수익" stroke="#34d399" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">데이터 입력 (예시)</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-400">
                        <thead className="text-xs text-slate-200 uppercase bg-slate-800">
                            <tr>
                                <th className="px-4 py-3">월</th>
                                <th className="px-4 py-3">매출 (만원)</th>
                                <th className="px-4 py-3">비용 (만원)</th>
                                <th className="px-4 py-3">순수익 (만원)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50">
                                    <td className="px-4 py-3">{row.month}</td>
                                    <td className="px-4 py-3">{row.revenue}</td>
                                    <td className="px-4 py-3">{row.cost}</td>
                                    <td className="px-4 py-3 font-bold text-indigo-400">{row.profit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-slate-500 mt-4 text-center">
                    * 현재는 데모 데이터입니다. 추후 엑셀 업로드 및 직접 입력 기능이 추가될 예정입니다.
                </p>
            </div>
        </section>
    );
}
