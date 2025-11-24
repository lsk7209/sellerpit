"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Lightbulb, TrendingUp } from "lucide-react";

export default function SeoContent() {
    return (
        <section className="mt-12 space-y-8">
            {/* Guide Section */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-amber-500" />
                    셀러핏 마진 계산기 사용 가이드
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            1. 판매가와 매입가 입력
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            판매하고자 하는 상품의 최종 판매 가격과 사입/제조 원가를 입력하세요.
                            부가세(VAT) 포함 여부를 스위치로 간편하게 설정할 수 있습니다.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            2. 마켓 수수료 설정
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            스마트스토어, 쿠팡, 11번가 등 주요 오픈마켓의 수수료를 프리셋 버튼으로 쉽게 적용할 수 있습니다.
                            직접 수수료율을 입력하여 정밀하게 계산할 수도 있습니다.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            3. 배송비 및 기타 비용
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            택배비와 포장재, 사은품 비용 등 추가적으로 발생하는 비용을 입력하여
                            실제 순수익을 정확하게 파악하세요.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            4. 비교 모드 활용하기
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            두 개의 상품을 동시에 비교하여 어떤 상품이 더 높은 수익을 낼 수 있는지
                            한눈에 확인할 수 있습니다. 소싱 결정 시 매우 유용한 기능입니다.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-indigo-600" />
                    자주 묻는 질문 (FAQ)
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="faq-1" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            마진율은 어떻게 계산되나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 space-y-2">
                            <p>
                                마진율은 <strong className="text-indigo-600">(순수익 ÷ 판매가) × 100</strong>으로 계산됩니다.
                            </p>
                            <p>
                                예를 들어, 판매가 10,000원에 순수익이 2,000원이라면 마진율은 20%입니다.
                                일반적으로 온라인 셀러는 20% 이상의 마진율을 목표로 합니다.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-2" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            부가세 포함/미포함은 어떻게 설정하나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 space-y-2">
                            <p>
                                판매가 입력란 위의 <strong className="text-indigo-600">"부가세(VAT) 포함"</strong> 스위치를
                                켜거나 끄면 됩니다.
                            </p>
                            <p>
                                • <strong>켜짐:</strong> 입력한 판매가가 부가세 포함 가격 (소비자가)
                            </p>
                            <p>
                                • <strong>꺼짐:</strong> 입력한 판매가가 부가세 미포함 가격 (공급가)
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-3" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            스마트스토어 수수료는 정확한가요?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 space-y-2">
                            <p>
                                네, 각 플랫폼의 <strong className="text-indigo-600">공식 수수료율</strong>을 기준으로
                                계산합니다. 스마트스토어는 5.63%, 쿠팡은 10.8% 등 최신 정보를 반영하고 있습니다.
                            </p>
                            <p>
                                다만, 특정 카테고리나 프로모션에 따라 수수료가 달라질 수 있으니
                                정확한 수수료는 각 플랫폼의 공지사항을 확인해주세요.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-4" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            계산 기록은 어디에 저장되나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 space-y-2">
                            <p>
                                계산 기록은 <strong className="text-indigo-600">사용자의 브라우저(로컬 스토리지)</strong>에만
                                저장됩니다. 서버로 전송되지 않아 개인정보가 안전하게 보호됩니다.
                            </p>
                            <p>
                                브라우저 캐시를 삭제하면 기록도 함께 삭제되니 중요한 계산은
                                "리포트 복사" 기능으로 별도 저장하시는 것을 권장합니다.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-5" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            광고비는 어떻게 반영하나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 space-y-2">
                            <p>
                                광고비는 <strong className="text-indigo-600">"기타 비용"</strong> 항목에 입력하시면 됩니다.
                            </p>
                            <p>
                                예를 들어, 상품 1개당 평균 광고비가 500원이라면 기타 비용에 500원을 입력하여
                                광고비를 포함한 실제 순수익을 계산할 수 있습니다.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-6" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            적정 마진율은 얼마인가요?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 space-y-2">
                            <p>
                                업종과 상품에 따라 다르지만, 일반적으로:
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li><strong className="text-emerald-600">20% 이상:</strong> 안정적인 수익 구조</li>
                                <li><strong className="text-amber-600">15-20%:</strong> 광고비 고려 시 주의 필요</li>
                                <li><strong className="text-rose-600">15% 미만:</strong> 고회전 상품이 아니라면 위험</li>
                            </ul>
                            <p className="mt-2">
                                광고비, 반품률, 재고 관리 비용 등을 고려하면 최소 20% 이상의
                                마진율을 확보하는 것이 안전합니다.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-7" className="border-slate-100">
                        <AccordionTrigger className="text-slate-700 hover:text-indigo-600 hover:no-underline">
                            모바일에서도 사용할 수 있나요?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                            네, 셀러핏은 <strong className="text-indigo-600">모바일 환경에 최적화</strong>되어 있습니다.
                            스마트폰, 태블릿 등 모든 기기에서 원활하게 사용하실 수 있으며,
                            외출 중에도 빠르게 수익을 계산할 수 있습니다.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Introduction Section */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    셀러핏(Seller Fit) 소개
                </h3>
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                    <p>
                        셀러핏은 온라인 셀러를 위한 필수 마진 계산 및 수익성 분석 도구입니다.
                        복잡한 수수료 계산과 부가세 처리를 자동화하여, 셀러분들이 오직 판매 전략에만 집중할 수 있도록 돕습니다.
                    </p>
                    <p>
                        단순 마진 계산을 넘어, 상품 간 수익성 비교(A/B 테스트) 기능을 통해
                        어떤 상품이 더 높은 이익을 가져다줄지 데이터에 기반하여 판단할 수 있습니다.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-4">
                        <h4 className="font-semibold text-slate-800 mb-2">💡 활용 팁</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                            <li>소싱 전 목표 마진율을 설정하고 시뮬레이션 해보세요.</li>
                            <li>이벤트/할인 행사 시 예상 수익을 미리 계산해보세요.</li>
                            <li>플랫폼별 수수료 차이에 따른 수익 변화를 비교해보세요.</li>
                            <li>계산 기록을 활용하여 과거 상품의 수익성을 분석하세요.</li>
                            <li>비교 모드로 여러 소싱처의 가격을 동시에 비교하세요.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Keywords for SEO */}
            <div className="text-xs text-slate-400 text-center">
                <p>
                    마진계산기, 온라인셀러, 스마트스토어, 쿠팡셀러, 부가세계산, CBM계산,
                    수익계산, 마진율, 판매수수료, 셀러도구, 이커머스, 온라인판매,
                    소싱계산, 수익성분석, 상품비교
                </p>
            </div>
        </section>
    );
}
