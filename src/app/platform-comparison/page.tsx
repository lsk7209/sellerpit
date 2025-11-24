"use client";

import RelatedTools from "@/components/shared/RelatedTools";

const PLATFORMS = [
    { name: "스마트스토어", fee: "1.98% ~ 3.63%", cycle: "구매확정 후 1일", pros: "낮은 수수료, 빠른 정산", cons: "치열한 경쟁, 노출 어려움" },
    { name: "쿠팡 (마켓플레이스)", fee: "4% ~ 10.9%", cycle: "주정산/월정산 선택", pros: "압도적인 트래픽, 로켓배송 연계", cons: "높은 수수료, 정산 느림, 아이템 위너 시스템" },
    { name: "11번가", fee: "6% ~ 13%", cycle: "구매확정 후 2일", pros: "SKT 멤버십 연계, 다양한 프로모션", cons: "높은 수수료" },
    { name: "G마켓/옥션", fee: "13%", cycle: "구매확정 후 1일", pros: "스마일클럽 충성 고객", cons: "가장 높은 수수료 수준" },
    { name: "자사몰 (카페24 등)", fee: "PG사 수수료 (약 3.5%)", cycle: "PG사 정책 따름 (3~7일)", pros: "브랜딩 용이, 고객 데이터 확보", cons: "초기 마케팅 비용 부담" },
];

export default function PlatformComparisonPage() {
    return (
        <section className="max-w-6xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-indigo-500 mb-2">오픈마켓 플랫폼 비교</h1>
            <p className="text-lg text-slate-400 mb-8">
                주요 오픈마켓의 수수료, 정산 주기, 장단점을 한눈에 비교하세요.
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden bg-slate-900 rounded-2xl border border-slate-800 shadow-xl mb-12">
                <table className="w-full text-left text-slate-300">
                    <thead className="bg-slate-800 text-slate-100 uppercase text-sm font-bold tracking-wider">
                        <tr>
                            <th className="px-6 py-5">플랫폼</th>
                            <th className="px-6 py-5">판매 수수료</th>
                            <th className="px-6 py-5">정산 주기</th>
                            <th className="px-6 py-5">장점</th>
                            <th className="px-6 py-5">단점</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {PLATFORMS.map((p) => (
                            <tr key={p.name} className="hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-5 font-bold text-indigo-400">{p.name}</td>
                                <td className="px-6 py-5 font-medium text-slate-200">{p.fee}</td>
                                <td className="px-6 py-5 text-slate-400">{p.cycle}</td>
                                <td className="px-6 py-5 text-emerald-400 text-sm">{p.pros}</td>
                                <td className="px-6 py-5 text-rose-400 text-sm">{p.cons}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden grid gap-4 mb-12">
                {PLATFORMS.map((p) => (
                    <div key={p.name} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
                        <h3 className="text-xl font-bold text-indigo-400 mb-4">{p.name}</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span className="text-slate-500">수수료</span>
                                <span className="text-slate-200 font-medium">{p.fee}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-800 pb-2">
                                <span className="text-slate-500">정산 주기</span>
                                <span className="text-slate-200">{p.cycle}</span>
                            </div>
                            <div>
                                <span className="block text-slate-500 mb-1">장점</span>
                                <span className="text-emerald-400">{p.pros}</span>
                            </div>
                            <div>
                                <span className="block text-slate-500 mb-1">단점</span>
                                <span className="text-rose-400">{p.cons}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-sm text-slate-500 text-right mb-8">
                * 수수료는 카테고리 및 등급에 따라 달라질 수 있습니다. (2024년 기준)
            </p>

            <RelatedTools currentPath="/platform-comparison" />
        </section>
    );
}
