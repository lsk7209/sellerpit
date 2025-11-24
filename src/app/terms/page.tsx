import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "이용약관 - Seller Fit | 셀러핏",
    description: "Seller Fit 서비스 이용약관을 확인하세요. 서비스 이용 시 준수해야 할 사항과 권리를 안내합니다.",
    keywords: "이용약관, 서비스약관, 사용규칙, 법적고지",
};

export default function TermsPage() {
    const lastUpdated = "2025년 1월 24일";

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-slate-900">이용약관</h1>
                <p className="text-lg text-slate-600">
                    최종 업데이트: {lastUpdated}
                </p>
            </div>

            <Card className="border-slate-200 shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50">
                <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                        <FileText className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-slate-900">서비스 이용 안내</h2>
                            <p className="text-slate-700 leading-relaxed">
                                본 약관은 Seller Fit(이하 "서비스")의 이용과 관련하여 서비스 제공자와
                                이용자 간의 권리, 의무 및 책임사항을 규정합니다.
                                서비스를 이용함으로써 본 약관에 동의한 것으로 간주됩니다.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">제1조 (목적)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                        본 약관은 Seller Fit이 제공하는 온라인 셀러를 위한 마진 계산, 부가세 계산,
                        CBM 계산 등의 서비스(이하 "서비스")를 이용함에 있어 서비스 제공자와 이용자의
                        권리·의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">제2조 (용어의 정의)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">1.</span>
                            <span><strong>"서비스"</strong>란 Seller Fit이 제공하는 모든 온라인 계산 도구 및 관련 기능을 의미합니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">2.</span>
                            <span><strong>"이용자"</strong>란 본 약관에 따라 서비스를 이용하는 모든 사용자를 의미합니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">3.</span>
                            <span><strong>"계산 기록"</strong>이란 이용자가 서비스를 통해 생성한 계산 결과 데이터를 의미합니다.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">제3조 (서비스의 제공)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="space-y-3">
                        <p className="text-slate-700">
                            <strong className="text-slate-900">1. 서비스 내용</strong>
                        </p>
                        <ul className="space-y-2 text-slate-700 pl-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                <span>마진 계산기: 판매가, 매입가, 수수료 등을 고려한 순수익 계산</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                <span>비교 모드: 두 상품의 수익성 동시 비교 분석</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                <span>부가세 계산기: 매입/매출 세액 자동 계산</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                <span>CBM 계산기: 물류비 산정을 위한 부피 계산</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                <span>계산 기록 저장 및 관리 (로컬 스토리지)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <p className="text-slate-700">
                            <strong className="text-slate-900">2. 서비스 제공 시간</strong>
                        </p>
                        <p className="text-slate-700 pl-4">
                            서비스는 연중무휴 24시간 제공됩니다. 다만, 시스템 점검, 서버 장애 등
                            불가피한 사유가 있는 경우 서비스 제공이 일시 중단될 수 있습니다.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-amber-600" />
                        제4조 (서비스 이용의 제한)
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700">
                        다음 각 호에 해당하는 경우 서비스 이용이 제한될 수 있습니다:
                    </p>
                    <ul className="space-y-2 text-slate-700 pl-4">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold mt-1">•</span>
                            <span>서비스의 정상적인 운영을 방해하는 행위</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold mt-1">•</span>
                            <span>자동화된 수단(봇, 스크립트 등)을 이용한 과도한 접속</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold mt-1">•</span>
                            <span>타인의 정보를 도용하거나 허위 정보를 입력하는 행위</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold mt-1">•</span>
                            <span>서비스의 취약점을 악용하거나 해킹을 시도하는 행위</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold mt-1">•</span>
                            <span>법령 또는 본 약관을 위반하는 행위</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">제5조 (면책 조항)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 space-y-3">
                        <p className="text-slate-700 font-semibold">
                            서비스 제공자는 다음 각 호의 경우에 대해 책임을 지지 않습니다:
                        </p>
                        <ul className="space-y-2 text-slate-700 pl-4">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold mt-1">1.</span>
                                <span>
                                    <strong>계산 결과의 정확성:</strong> 본 서비스는 참고용 도구이며,
                                    실제 거래 시 발생하는 모든 비용과 수익을 완벽하게 반영하지 못할 수 있습니다.
                                    최종 의사결정은 이용자의 책임 하에 이루어져야 합니다.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold mt-1">2.</span>
                                <span>
                                    <strong>플랫폼 정책 변경:</strong> 각 플랫폼(스마트스토어, 쿠팡 등)의
                                    수수료율이나 정책이 변경될 경우, 즉시 반영되지 않을 수 있습니다.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold mt-1">3.</span>
                                <span>
                                    <strong>서비스 중단:</strong> 천재지변, 시스템 장애, 통신 장애 등
                                    불가항력적 사유로 인한 서비스 중단
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold mt-1">4.</span>
                                <span>
                                    <strong>데이터 손실:</strong> 이용자의 기기 문제, 브라우저 캐시 삭제 등으로
                                    인한 로컬 스토리지 데이터 손실
                                </span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">제6조 (저작권 및 지적재산권)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                        서비스 내 모든 콘텐츠(텍스트, 이미지, 로고, 소프트웨어 등)의 저작권 및
                        지적재산권은 Seller Fit에 귀속됩니다. 이용자는 서비스 제공자의 사전 승인 없이
                        이를 복제, 전송, 배포, 방송 기타 방법으로 이용하거나 제3자에게 이용하게 할 수 없습니다.
                    </p>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">제7조 (개인정보 보호)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                        서비스 제공자는 이용자의 개인정보를 보호하기 위해 최선을 다하며,
                        개인정보의 수집, 이용, 제공 등에 관한 사항은 별도의
                        <a href="/privacy" className="text-indigo-600 hover:text-indigo-700 underline mx-1">
                            개인정보 처리방침
                        </a>
                        에 따릅니다.
                    </p>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">제8조 (약관의 변경)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                        서비스 제공자는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서
                        본 약관을 변경할 수 있습니다. 약관이 변경되는 경우 서비스 내 공지사항을 통해
                        공지하며, 변경된 약관은 공지한 날로부터 7일 후부터 효력이 발생합니다.
                    </p>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">제9조 (준거법 및 관할법원)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                        본 약관과 서비스 이용에 관한 분쟁에 대해서는 대한민국 법을 준거법으로 하며,
                        분쟁 발생 시 관할법원은 민사소송법에 따릅니다.
                    </p>
                </CardContent>
            </Card>

            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">부칙</h3>
                <p className="text-sm text-slate-700">
                    <strong>시행일:</strong> 본 약관은 {lastUpdated}부터 시행됩니다.
                </p>
            </div>
        </div>
    );
}
