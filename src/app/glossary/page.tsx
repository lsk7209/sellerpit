"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const TERMS = [
    { term: "ROAS", def: "Return On Ad Spend. 광고비 대비 매출액 비율. (매출 / 광고비) * 100" },
    { term: "ROI", def: "Return On Investment. 투자 대비 수익률. ((순수익 - 투자비) / 투자비) * 100" },
    { term: "CPC", def: "Cost Per Click. 클릭당 비용. 광고를 1회 클릭할 때 발생하는 비용." },
    { term: "CPM", def: "Cost Per Mille. 1,000회 노출당 비용." },
    { term: "CTR", def: "Click-Through Rate. 클릭률. (클릭수 / 노출수) * 100" },
    { term: "CVR", def: "Conversion Rate. 전환률. (전환수 / 방문수) * 100" },
    { term: "LTV", def: "Lifetime Value. 고객 생애 가치. 한 명의 고객이 평생 동안 기여하는 수익." },
    { term: "CAC", def: "Customer Acquisition Cost. 고객 획득 비용. 신규 고객 1명을 확보하는 데 드는 비용." },
    { term: "마진율", def: "판매가에서 원가와 비용을 뺀 이익의 비율." },
    { term: "손익분기점 (BEP)", def: "총 수익과 총 비용이 같아지는 지점. 이익도 손실도 없는 상태." },
    { term: "객단가 (AOV)", def: "Average Order Value. 고객 1인당 평균 결제 금액." },
    { term: "트래픽", def: "웹사이트나 앱에 방문하는 사용자 수." },
    { term: "SEO", def: "Search Engine Optimization. 검색 엔진 최적화. 검색 결과 상위에 노출되도록 사이트를 개선하는 작업." },
    { term: "키워드", def: "검색 엔진에서 사용자가 입력하는 단어." },
    { term: "상세페이지", def: "상품의 정보와 매력을 설명하는 판매 페이지." },
    { term: "썸네일", def: "상품 목록에서 보여지는 대표 이미지." },
    { term: "오픈마켓", def: "누구나 판매자로 등록하여 상품을 팔 수 있는 온라인 장터 (예: G마켓, 11번가)." },
    { term: "소셜커머스", def: "SNS 등을 활용한 전자상거래 (예: 쿠팡, 티몬, 위메프 - 현재는 오픈마켓화)." },
    { term: "스마트스토어", def: "네이버에서 제공하는 무료 쇼핑몰 구축 플랫폼." },
    { term: "풀필먼트", def: "물류 전문 업체가 판매자를 대신해 주문 수집, 포장, 배송, 반품 등을 일괄 처리하는 서비스." },
    { term: "CS", def: "Customer Service. 고객 응대 및 불만 처리." },
    { term: "정산 주기", def: "판매 대금이 판매자에게 지급되는 기간." },
    { term: "에스크로", def: "구매자의 결제 대금을 제3자가 보관하고 있다가 배송이 완료되면 판매자에게 지급하는 안전 거래 장치." },
];

export default function GlossaryPage() {
    const [search, setSearch] = useState("");

    const filteredTerms = TERMS.filter(
        (t) =>
            t.term.toLowerCase().includes(search.toLowerCase()) ||
            t.def.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">셀러 용어 사전</h1>
            <p className="text-lg text-slate-200 mb-6">
                초보 셀러가 꼭 알아야 할 필수 용어들을 정리했습니다.
            </p>

            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="용어 검색 (예: ROAS, 마진)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 focus:border-indigo-500 outline-none"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {filteredTerms.map((item) => (
                    <div key={item.term} className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors">
                        <h3 className="text-lg font-bold text-indigo-400 mb-2">{item.term}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{item.def}</p>
                    </div>
                ))}
            </div>

            {filteredTerms.length === 0 && (
                <div className="text-center text-slate-500 py-12">
                    검색 결과가 없습니다.
                </div>
            )}
        </section>
    );
}
