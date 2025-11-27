# Seller Pit (셀러핏)

온라인 셀러를 위한 스마트 마진 계산기 및 비즈니스 유틸리티 모음

🌐 **Live Site**: [https://sellerpit.kr](https://sellerpit.kr)

## 🚀 주요 기능

### 📊 계산기 도구
- **마진 계산기**: 실시간 순수익 및 마진율 계산
- **부가세 계산기**: 공급가액/합계금액 기준 부가세 자동 계산
- **CBM 계산기**: 화물 부피 계산 및 컨테이너 적재량 예측
- **세금 계산기**: 매출/매입 기반 예상 부가세 계산
- **할인 계산기**: 할인율 및 쿠폰 적용 최종 가격 산출
- **손익분기점 계산기**: BEP 분석 및 목표 판매량 계산
- **배송비 계산기**: 국내/해외 배송비 예상 견적
- **광고 ROI 계산기**: ROAS 및 ROI 자동 계산
- **환율 변환기**: 실시간 환율 기반 통화 변환
- **재고 비용 계산기**: 재고 유지 비용 분석

### 📈 분석 도구
- **수익 추이**: 월별 매출/비용/이익 시각화
- **판매 예측**: 과거 데이터 기반 미래 판매량 예측
- **플랫폼 비교**: 주요 이커머스 플랫폼 수수료 비교

### 📚 기타
- **셀러 용어 사전**: 이커머스 필수 용어 검색

## 🛠 기술 스택

- **Framework**: Next.js 16.0.3 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Lucide React Icons
- **Charts**: Recharts
- **Deployment**: Cloudflare Pages (GitHub Actions 자동배포)

## 🎯 SEO & 수익화

### SEO 최적화 ✅
- ✅ 페이지별 Meta Title/Description
- ✅ Canonical URL 설정
- ✅ Structured Data (JSON-LD FAQPage)
- ✅ **Sitemap.xml** ([https://sellerpit.kr/sitemap.xml](https://sellerpit.kr/sitemap.xml))
- ✅ **RSS Feed** ([https://sellerpit.kr/feed.xml](https://sellerpit.kr/feed.xml))
- ✅ **Robots.txt** ([https://sellerpit.kr/robots.txt](https://sellerpit.kr/robots.txt))
- ✅ H1-H3 계층 구조
- ✅ 모바일 반응형 디자인

### 검색엔진 인증 ✅
- ✅ Google Search Console 인증 완료
- ✅ Naver 웹마스터 인증 완료

### 수익화 ✅
- ✅ Google AdSense 스크립트 통합
- ✅ **ads.txt** ([https://sellerpit.kr/ads.txt](https://sellerpit.kr/ads.txt))
- ⏳ AdSense 승인 대기 중

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 확인 (out/ 디렉터리)
```

## 🚀 배포

### 자동 배포 (GitHub Actions)
`main` 또는 `master` 브랜치에 push하면 자동으로 Cloudflare Pages에 배포됩니다.

```bash
git add .
git commit -m "feat: 새로운 기능 추가"
git push origin main
```

### 수동 배포
```bash
npm run build
# out/ 폴더를 Cloudflare Pages에 업로드
```

## 📚 문서

- **[SEO_DEPLOYMENT_SUMMARY.md](./SEO_DEPLOYMENT_SUMMARY.md)** - SEO 및 배포 설정 완료 보고서
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - 상세 배포 가이드

## 🔗 주요 URL

| 항목 | URL |
|------|-----|
| 메인 사이트 | https://sellerpit.kr |
| 사이트맵 | https://sellerpit.kr/sitemap.xml |
| RSS 피드 | https://sellerpit.kr/feed.xml |
| Robots.txt | https://sellerpit.kr/robots.txt |
| ads.txt | https://sellerpit.kr/ads.txt |

## 📄 라이선스

MIT License

## 👥 기여

이슈 및 풀 리퀘스트를 환영합니다!

## 📞 문의

- Website: https://sellerpit.kr
- Email: contact@sellerpit.kr

---

**Seller Pit** - 온라인 셀러의 성공을 위한 필수 도구
