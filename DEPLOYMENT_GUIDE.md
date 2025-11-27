# Seller Pit - 배포 가이드

## 📋 완료된 SEO 설정

### ✅ 1. 사이트맵 & RSS
- **사이트맵 URL**: `https://sellerpit.kr/sitemap.xml`
- **RSS 피드 URL**: `https://sellerpit.kr/feed.xml`
- **robots.txt URL**: `https://sellerpit.kr/robots.txt`

모든 페이지가 우선순위와 변경 빈도에 따라 최적화되어 있습니다:
- 메인 페이지: 우선순위 1.0, 매일 변경
- 계산기 도구: 우선순위 0.9, 주간 변경
- 정보 페이지: 우선순위 0.6-0.7, 월간 변경
- 법적 페이지: 우선순위 0.5, 연간 변경

### ✅ 2. 검색엔진 인증
- **Google Search Console**: 메타태그 추가 완료
- **Naver 웹마스터**: 메타태그 추가 완료

### ✅ 3. Google AdSense
- **AdSense 스크립트**: 모든 페이지 head에 자동 삽입
- **ads.txt**: `/public/ads.txt` 파일 생성 완료
- **Publisher ID**: `ca-pub-3050601904412736`

---

## 🚀 GitHub 자동배포 설정

### 1단계: GitHub Repository 생성
```bash
# Git 초기화 (아직 안 했다면)
git init

# 원격 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/sellerpit.git

# 첫 커밋
git add .
git commit -m "Initial commit: Seller Pit with SEO optimization"
git branch -M main
git push -u origin main
```

### 2단계: Cloudflare Pages 설정

1. **Cloudflare 대시보드** 접속
   - https://dash.cloudflare.com/ 로그인

2. **Pages 프로젝트 생성**
   - Workers & Pages → Create application → Pages → Connect to Git
   - GitHub 저장소 선택: `sellerpit`

3. **빌드 설정**
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: out
   Root directory: /
   ```

4. **환경 변수 설정** (필요시)
   ```
   NODE_VERSION=20
   ```

### 3단계: GitHub Secrets 설정

GitHub Actions를 통한 자동배포를 위해 다음 Secrets를 추가하세요:

1. **GitHub Repository → Settings → Secrets and variables → Actions**

2. **필요한 Secrets**:
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API 토큰
     - Cloudflare 대시보드 → My Profile → API Tokens → Create Token
     - Template: "Edit Cloudflare Workers" 선택
   
   - `CLOUDFLARE_ACCOUNT_ID`: Cloudflare 계정 ID
     - Cloudflare 대시보드 → Workers & Pages → Overview
     - 오른쪽 사이드바에서 Account ID 확인

### 4단계: 자동배포 확인

이제 `main` 또는 `master` 브랜치에 push할 때마다 자동으로 배포됩니다:

```bash
git add .
git commit -m "Update: 새로운 기능 추가"
git push origin main
```

GitHub Actions 탭에서 배포 진행 상황을 확인할 수 있습니다.

---

## 🔍 배포 후 확인사항

### 1. Google Search Console 등록
1. https://search.google.com/search-console 접속
2. 속성 추가 → URL 접두어: `https://sellerpit.kr`
3. 소유권 확인 (메타태그는 이미 추가됨)
4. 사이트맵 제출: `https://sellerpit.kr/sitemap.xml`

### 2. Naver 웹마스터 등록
1. https://searchadvisor.naver.com 접속
2. 사이트 등록: `https://sellerpit.kr`
3. 소유권 확인 (메타태그는 이미 추가됨)
4. 사이트맵 제출: `https://sellerpit.kr/sitemap.xml`
5. RSS 제출: `https://sellerpit.kr/feed.xml`

### 3. Google AdSense 확인
1. https://www.google.com/adsense 접속
2. 사이트 → 사이트 추가: `sellerpit.kr`
3. ads.txt 파일 확인: `https://sellerpit.kr/ads.txt`
4. 승인 대기 (보통 1-2주 소요)

### 4. 도메인 설정
Cloudflare Pages에서 커스텀 도메인 연결:
1. Pages 프로젝트 → Custom domains
2. `sellerpit.kr` 추가
3. DNS 레코드 자동 설정 확인

---

## 📊 주요 URL 정리

| 항목 | URL |
|------|-----|
| 메인 사이트 | https://sellerpit.kr |
| 사이트맵 | https://sellerpit.kr/sitemap.xml |
| RSS 피드 | https://sellerpit.kr/feed.xml |
| Robots.txt | https://sellerpit.kr/robots.txt |
| ads.txt | https://sellerpit.kr/ads.txt |

---

## 🛠️ 로컬 개발

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드 테스트
npm run build

# 빌드 결과물 확인
# out/ 디렉터리에 정적 파일 생성됨
```

---

## 📝 다음 단계

1. ✅ GitHub에 코드 푸시
2. ✅ Cloudflare Pages 연결
3. ✅ 도메인 연결
4. ⏳ Google Search Console 사이트맵 제출
5. ⏳ Naver 웹마스터 사이트맵 제출
6. ⏳ Google AdSense 승인 대기

---

## 🆘 문제 해결

### 빌드 에러 발생 시
```bash
# 캐시 삭제
rm -rf .next out node_modules
npm install
npm run build
```

### 배포 후 페이지가 안 보일 때
- Cloudflare Pages 빌드 로그 확인
- `out/` 디렉터리에 파일이 제대로 생성되었는지 확인
- 브라우저 캐시 삭제 후 재시도

### AdSense ads.txt 경고
- 배포 후 24-48시간 대기
- `https://sellerpit.kr/ads.txt` 직접 접속하여 내용 확인

---

**배포 완료 후 이 문서는 CEO_MANUAL.md로 이동하여 비기술자도 이해할 수 있도록 재작성할 예정입니다.**
