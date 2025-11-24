import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "개인정보 처리방침 - Seller Fit | 셀러핏",
    description: "Seller Fit의 개인정보 처리방침을 확인하세요. 사용자의 개인정보 보호를 최우선으로 합니다.",
    keywords: "개인정보처리방침, 프라이버시, 데이터보호, 정보보안",
};

export default function PrivacyPage() {
    const lastUpdated = "2025년 1월 24일";

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-slate-900">개인정보 처리방침</h1>
                <p className="text-lg text-slate-600">
                    최종 업데이트: {lastUpdated}
                </p>
            </div>

            <Card className="border-slate-200 shadow-sm bg-gradient-to-r from-indigo-50 to-purple-50">
                <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                        <Shield className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-slate-900">개인정보 보호 원칙</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Seller Fit(이하 "서비스")은 사용자의 개인정보를 중요하게 생각하며,
                                「개인정보 보호법」을 준수하고 있습니다. 본 방침은 서비스 이용 과정에서
                                수집되는 정보와 그 활용 방법을 명확히 안내합니다.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center gap-2">
                        <Database className="w-5 h-5 text-indigo-600" />
                        1. 수집하는 개인정보 항목
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="space-y-3">
                        <h3 className="font-semibold text-slate-900">1.1 직접 수집 정보</h3>
                        <p className="text-slate-700 pl-4 border-l-2 border-indigo-200">
                            <strong className="text-indigo-600">현재 Seller Fit은 회원가입이나 로그인 기능을 제공하지 않으며,
                                사용자로부터 직접적으로 개인정보를 수집하지 않습니다.</strong>
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold text-slate-900">1.2 자동 수집 정보</h3>
                        <ul className="space-y-2 text-slate-700 pl-4">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>접속 로그:</strong> IP 주소, 브라우저 종류, OS 정보, 방문 일시</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>쿠키:</strong> 서비스 이용 기록, 접속 빈도 (Google Analytics 등)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>로컬 스토리지:</strong> 계산 기록 (사용자 기기에만 저장, 서버 전송 없음)</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-indigo-600" />
                        2. 개인정보의 수집 및 이용 목적
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">•</span>
                            <span><strong>서비스 제공 및 개선:</strong> 계산 기능 제공, 사용자 경험 분석 및 개선</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">•</span>
                            <span><strong>통계 분석:</strong> 서비스 이용 통계 분석 (익명화된 데이터)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">•</span>
                            <span><strong>보안 유지:</strong> 부정 이용 방지, 서비스 안정성 확보</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">•</span>
                            <span><strong>광고 제공:</strong> Google AdSense를 통한 맞춤형 광고 제공</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-indigo-600" />
                        3. 개인정보의 보유 및 이용 기간
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <div className="space-y-3">
                        <p className="text-slate-700">
                            수집된 정보는 다음과 같이 보유 및 이용됩니다:
                        </p>
                        <ul className="space-y-2 text-slate-700 pl-4">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>접속 로그:</strong> 수집 후 1년간 보관 후 자동 삭제</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>쿠키:</strong> 사용자가 브라우저에서 삭제할 때까지 보관</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 font-bold mt-1">•</span>
                                <span><strong>로컬 스토리지:</strong> 사용자가 직접 삭제하거나 브라우저 캐시 삭제 시까지</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-indigo-600" />
                        4. 개인정보의 제3자 제공
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700">
                        Seller Fit은 원칙적으로 사용자의 개인정보를 외부에 제공하지 않습니다.
                        다만, 다음의 경우에는 예외로 합니다:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                        <h4 className="font-semibold text-slate-900">Google Analytics 및 AdSense</h4>
                        <p className="text-sm text-slate-700">
                            서비스 개선 및 광고 제공을 위해 Google의 서비스를 이용하고 있으며,
                            이 과정에서 익명화된 사용 데이터가 Google과 공유될 수 있습니다.
                            자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">Google 개인정보처리방침</a>을 참조하세요.
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">5. 사용자의 권리</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700">
                        사용자는 다음과 같은 권리를 가집니다:
                    </p>
                    <ul className="space-y-2 text-slate-700 pl-4">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">•</span>
                            <span>브라우저 설정을 통한 쿠키 차단 및 삭제</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">•</span>
                            <span>로컬 스토리지에 저장된 계산 기록 삭제</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold mt-1">•</span>
                            <span>Google 광고 맞춤 설정 거부 (Google 계정 설정에서 가능)</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">6. 개인정보 보호책임자</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700">
                        개인정보 처리에 관한 문의사항이나 불만 처리가 필요하신 경우 아래로 연락주시기 바랍니다:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-slate-700">
                            <strong>이메일:</strong> <a href="mailto:privacy@sellerfit.kr" className="text-indigo-600 hover:text-indigo-700">privacy@sellerfit.kr</a>
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">7. 개인정보 처리방침 변경</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    <p className="text-slate-700">
                        본 개인정보 처리방침은 법령 및 서비스 정책 변경에 따라 수정될 수 있습니다.
                        변경 시 웹사이트를 통해 공지하며, 중요한 변경사항의 경우 별도의 안내를 제공합니다.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                        <p className="text-sm text-slate-700">
                            <strong>시행일자:</strong> {lastUpdated}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
