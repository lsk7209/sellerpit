import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "문의하기 - Seller Fit | 셀러핏",
    description: "Seller Fit에 대한 문의사항이나 제안사항을 보내주세요. 여러분의 의견을 소중히 듣겠습니다.",
    keywords: "셀러핏 문의, 고객지원, 피드백, 제안",
};

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-slate-900">문의하기</h1>
                <p className="text-xl text-slate-600">
                    궁금한 점이나 제안사항이 있으신가요? 언제든지 연락주세요.
                </p>
            </div>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900 flex items-center gap-2">
                        <Mail className="w-6 h-6 text-indigo-600" />
                        연락 방법
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <Mail className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                            <div className="space-y-1">
                                <h3 className="font-semibold text-slate-900">이메일 문의</h3>
                                <p className="text-slate-600 text-sm">
                                    일반 문의, 제휴 제안, 버그 리포트 등 모든 문의사항을 받습니다.
                                </p>
                                <a
                                    href="mailto:contact@sellerfit.kr"
                                    className="text-indigo-600 hover:text-indigo-700 font-medium inline-block mt-2"
                                >
                                    contact@sellerfit.kr
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <MessageSquare className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                            <div className="space-y-1">
                                <h3 className="font-semibold text-slate-900">기능 제안</h3>
                                <p className="text-slate-600 text-sm">
                                    새로운 기능이나 개선사항에 대한 아이디어가 있으시다면 공유해주세요.
                                    여러분의 의견이 Seller Fit을 더 나은 서비스로 만듭니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <HelpCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                            <div className="space-y-1">
                                <h3 className="font-semibold text-slate-900">버그 리포트</h3>
                                <p className="text-slate-600 text-sm">
                                    서비스 이용 중 문제가 발생했나요? 상세한 상황 설명과 함께
                                    스크린샷을 첨부해 주시면 빠르게 해결하겠습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100">
                    <CardTitle className="text-slate-900">자주 묻는 질문 (FAQ)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-slate-900">Q. Seller Fit은 무료인가요?</h3>
                            <p className="text-slate-600 text-sm pl-4 border-l-2 border-indigo-200">
                                네, 현재 모든 기능을 무료로 제공하고 있습니다.
                                앞으로도 기본 기능은 계속 무료로 유지될 예정입니다.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-slate-900">Q. 계산 결과는 정확한가요?</h3>
                            <p className="text-slate-600 text-sm pl-4 border-l-2 border-indigo-200">
                                각 플랫폼의 공식 수수료율을 기준으로 계산하며,
                                정기적으로 수수료 변경사항을 업데이트하고 있습니다.
                                다만, 프로모션이나 특별 계약에 따른 개별 수수료율은 반영되지 않을 수 있습니다.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-slate-900">Q. 모바일에서도 사용할 수 있나요?</h3>
                            <p className="text-slate-600 text-sm pl-4 border-l-2 border-indigo-200">
                                네, Seller Fit은 모바일 환경에 최적화되어 있습니다.
                                스마트폰, 태블릿 등 모든 기기에서 원활하게 사용하실 수 있습니다.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-slate-900">Q. 계산 기록은 어디에 저장되나요?</h3>
                            <p className="text-slate-600 text-sm pl-4 border-l-2 border-indigo-200">
                                계산 기록은 사용자의 브라우저(로컬 스토리지)에만 저장됩니다.
                                서버에는 어떠한 개인정보나 계산 데이터도 전송되지 않아 안전합니다.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-slate-900">Q. 새로운 플랫폼 추가 요청이 가능한가요?</h3>
                            <p className="text-slate-600 text-sm pl-4 border-l-2 border-indigo-200">
                                물론입니다! 추가를 원하시는 플랫폼이 있다면 이메일로 요청해 주세요.
                                사용자 요청이 많은 플랫폼부터 우선적으로 추가하겠습니다.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">응답 시간 안내</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                    문의하신 내용은 영업일 기준 1-2일 이내에 답변드리고 있습니다.
                    긴급한 문제의 경우 이메일 제목에 [긴급]을 표시해 주시면 우선적으로 처리하겠습니다.
                </p>
            </div>
        </div>
    );
}
