import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "소개 - Seller Fit | 셀러핏",
    description: "온라인 셀러를 위한 스마트한 수익 계산 도구, 셀러핏을 소개합니다. 마진 계산, 부가세 계산, CBM 계산 등 다양한 기능을 제공합니다.",
    keywords: "셀러핏, 마진계산기, 온라인셀러, 스마트스토어, 쿠팡셀러, 부가세계산",
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-slate-900">Seller Fit 소개</h1>
                <p className="text-xl text-slate-600">
                    온라인 셀러의 성공적인 비즈니스를 위한 필수 도구
                </p>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center gap-2">
                        <Target className="w-6 h-6 text-indigo-600" />
                        우리의 미션
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                        <strong className="text-indigo-600">Seller Fit(셀러핏)</strong>은 온라인 판매자들이 더 정확하고 빠르게 수익을 계산하고,
                        데이터 기반의 의사결정을 내릴 수 있도록 돕는 웹 애플리케이션입니다.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        스마트스토어, 쿠팡, 11번가 등 다양한 플랫폼에서 활동하는 셀러들이 겪는 복잡한 수수료 계산,
                        부가세 처리, 물류비 산정 등의 어려움을 해결하기 위해 탄생했습니다.
                    </p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-slate-900 flex items-center gap-2 text-lg">
                            <Zap className="w-5 h-5 text-amber-500" />
                            핵심 기능
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span><strong>마진 계산기:</strong> 실시간 순수익 및 마진율 계산</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span><strong>비교 모드:</strong> 두 상품의 수익성 동시 비교</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span><strong>부가세 계산:</strong> 매입/매출 세액 자동 계산</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span><strong>CBM 계산:</strong> 물류비 산정을 위한 부피 계산</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold">•</span>
                                <span><strong>계산 기록:</strong> 과거 계산 내역 저장 및 불러오기</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="bg-slate-50 border-b border-slate-100">
                        <CardTitle className="text-slate-900 flex items-center gap-2 text-lg">
                            <Users className="w-5 h-5 text-emerald-500" />
                            누구를 위한 서비스인가요?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>스마트스토어, 쿠팡 등에서 활동하는 온라인 셀러</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>신규 상품 소싱을 고민하는 사업자</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>정확한 수익 계산이 필요한 개인사업자</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>온라인 판매를 시작하려는 예비 창업자</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold">✓</span>
                                <span>다양한 플랫폼에서 판매 중인 멀티 셀러</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <Card className="border-slate-200 shadow-sm bg-gradient-to-br from-indigo-50 to-white">
                <CardContent className="pt-6 pb-6">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900">왜 Seller Fit을 사용해야 하나요?</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-indigo-100">
                                <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                                <div className="text-sm text-slate-600">무료 사용</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-indigo-100">
                                <div className="text-3xl font-bold text-indigo-600 mb-2">실시간</div>
                                <div className="text-sm text-slate-600">즉각적인 계산 결과</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-indigo-100">
                                <div className="text-3xl font-bold text-indigo-600 mb-2">정확성</div>
                                <div className="text-sm text-slate-600">검증된 계산 로직</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">개발 및 운영</h3>
                <p className="text-slate-700 leading-relaxed">
                    Seller Fit은 온라인 커머스 경험을 가진 개발자와 현직 셀러들의 피드백을 바탕으로
                    지속적으로 개선되고 있습니다. 사용자 여러분의 소중한 의견을 기다립니다.
                </p>
            </div>
        </div>
    );
}
