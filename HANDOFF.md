# Altobay.ai 소개 웹페이지 — 작업 인수인계

마지막 업데이트: 2026-09-11
새 세션에서 이 프로젝트를 이어받을 때 **이 파일을 먼저 전체 읽을 것.**

---

## 1. 프로젝트 개요

- **목적**: Altobay.ai(미국 정비소 대상 AI SaaS) 소개 웹페이지 제작
- **경로**: `C:\Users\chabot\Desktop\app-landing-page`
- **배포**: GitHub 업로드 → Vercel 배포 ✅ **완료**. 프로덕션 URL: `https://altobay-landing-page1.vercel.app`
- **언어**: 페이지 콘텐츠는 **전부 영문** (사용자 요구사항)

## 2. 기술 스택 / 실행

- Next.js 16.3.4 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 (`@theme inline` 방식, `src/app/globals.css`에 토큰 정의)
- `next-themes` (라이트/다크 토글, `attribute="class"`, `enableSystem={false}`, 기본 light)

```bash
npm run dev     # 개발 서버 — 포트 3001 (3000은 meeting-to-notion이 사용 중이라 변경함)
npm run lint    # ESLint
npm run build   # 프로덕션 빌드
```

> 브라우저 프리뷰는 `C:\Users\chabot\Desktop\.claude\launch.json`에 `app-landing-page`(포트 3001)로 등록되어 있음.

**마지막 검증 상태**: `npm run lint` 통과(0건), `npm run build` 성공(8개 라우트 정적 생성).

## 3. 사용자가 확정한 요구사항 (합의된 결정)

| 항목 | 결정 |
|---|---|
| 기술 스택 | Next.js |
| 디자인 무드 | 미니멀 & 클린 |
| 컬러 모드 | 라이트/다크 토글 둘 다 지원 |
| 추가 섹션 | 스크린샷/앱 목업 |
| 핵심 기능 3가지 | Smart Booking / AI-Generated Service Reports / Vehicle Cloud Search (확정) |
| 사용법 | 단순 텍스트가 아니라 **기능별 튜토리얼(설명서) 하위 페이지**로 제작 |
| 파트너사 실명(Hyundai, SK Networks) | **웹사이트에 노출하지 않음** |
| 팀 소개(창업자 3인) | **지금은 넣지 않음** (나중에) |
| 데모 신청 / 앱스토어 링크 | 나중에 추가 |

## 4. 브랜드 자산

### 로고 (`src/components/Logo.tsx`)
사용자가 준 원본 PNG를 **픽셀 단위로 실측**해서 SVG로 재현함. 임의로 그린 게 아니므로 **좌표를 함부로 바꾸지 말 것.**

- viewBox `0 0 433 434`
- 바깥 링: center (222.5, 213.5), r=184.5, stroke-width 18
- 안쪽 링: center (222.5, 258), r=136.5, stroke-width 10 — **두 링은 동심원이 아님**(중심이 44px 차이)
- 바늘: (222.5, 396.5) → (336, 250), stroke-width 11
- 피벗: 어두운 헤일로 원(r=17.5) + 파란 안쪽 원(r=9) 이중 구조

색상:
- 바깥 링 `--logo-track`: 라이트 `#0A0F1A` / 다크 `#3a4560` (다크 배경에서 안 보여서 밝게 조정 — 사용자에게 원본 다크 버전 색상 코드 확인 필요)
- 안쪽 링 `#75A7F9`, 바늘·피벗 `#3B82F6` (라이트/다크 동일)

### 컬러 토큰 (`src/app/globals.css`)
`--brand-navy #0b1120`, `--brand-blue #4a8dfa`, `--brand-blue-light #7fb0ff`, `--brand-slate #384155`

## 5. 페이지 구조

### 메인 (`src/app/page.tsx`)
```
Navbar → Hero → ServiceFeatures → Screenshots → About → CTA → Footer
```

| 섹션 | 파일 | 상태 |
|---|---|---|
| Navbar | `components/Navbar.tsx` | 완료. 스크롤 시 배경 blur, 다크토글, 모바일에선 CTA가 "Demo"로 축약 |
| Hero | `components/Hero.tsx` | 완료. **실제 대시보드 스크린샷** + 3D 틸트 인터랙션 |
| ServiceFeatures | `components/ServiceFeatures.tsx` | 완료. 3개 기능 카드, IR 자료 기반 실제 카피 |
| Screenshots ("Inside the App") | `components/Screenshots.tsx` | 완료. **폰 목업 3개가 클릭 가능한 가이드 링크** |
| About | `components/About.tsx` | 완료. 2026-09-01에 디자인 강화(아래 참고) |
| CTA | `components/CTA.tsx` | **placeholder 남음** — 링크/카피 미확정 |
| Footer | `components/Footer.tsx` | Privacy/Terms 링크가 `#`으로 비어 있음 |

> **중요**: 원래 별도로 있던 `HowItWorks.tsx` 섹션은 사용자 요청으로 **삭제**하고 Screenshots 섹션에 통합했음. `#how-it-works` 앵커는 이제 Screenshots 섹션이 가짐(상단 네비 링크가 여기로 연결됨).

### 가이드 하위 페이지 (`src/app/guide/[feature]/page.tsx`)
| 라우트 | 상태 |
|---|---|
| `/guide/smart-booking` | **3단계 완성** (알림 → 캘린더 → 대시보드), 실제 스크린샷 3장 적용 |
| `/guide/ai-service-reports` | 4단계 작성됨. **1단계만 실제 스크린샷**, 2~4단계는 placeholder |
| `/guide/vehicle-cloud-search` | `ComingSoon` 스텁 (앱 기능 자체가 미구현) |

공용 컴포넌트: `components/guide/GuideShell.tsx`(레이아웃), `GuideStep.tsx`(번갈아 배치되는 단계), `ComingSoon.tsx`

## 6. 스크린샷 자산 (`public/screenshots/`)

사용자가 실제 앱에서 캡처해 준 것. 원본은 `C:\Users\chabot\Downloads\34.134.131.218_partner*.png`

| 파일 | 내용 | 사용처 |
|---|---|---|
| `dashboard-hero.png` | Booking & service status 대시보드 | Hero, smart-booking 가이드 3단계 |
| `service-report-create.png` | Create Service Report 작성 폼 | Screenshots 중앙, ai-service-reports 가이드 1단계 |
| `booking-calendar.png` | 월간 캘린더 + 예약 상세 | Screenshots 좌측, smart-booking 가이드 2단계 |
| `notification-detail.png` | 신규 예약 알림 상세 | smart-booking 가이드 1단계 |

**아직 못 받은 스크린샷 (앱 미구현)**:
1. Vehicle Cloud Search 검색 결과 화면
2. AI Report — Generate 직후 결과 화면
3. AI Report — Maintenance Summary (Overdue/Scheduled 태그)
4. AI Report — 발송 완료 / 고객이 보는 화면

→ 받으면 `public/screenshots/`에 넣고, `GuideStep`에 `screenshotSrc` prop만 넘기면 자동으로 placeholder가 실제 이미지로 교체됨.

## 7. 콘텐츠 출처

`C:\Users\chabot\Downloads\AltoBay.ai_Seed_IR_Deck_EN (1).pdf` (Seed Round IR Deck, 2026.08)

**웹사이트에 반영한 것**: 문제-솔루션 포지셔닝, Core Principle("최종 진단·수리 결정은 정비소가 한다"), 3대 기능 설명, California 파일럿 현황(5+ shops, 6개 프로그램 선정, MVP 개발중), Menlo Park HQ, 2026 설립

**의도적으로 제외한 것 (IR 덱은 Confidential 표기 문서)**:
- 매출 전망($0.3M→$85M), CAGR, Break-even, 목표 기업가치($1B)
- 펀딩 조건(SAFE $1M, 자금 사용처)
- TAM/SAM/SOM 시장 규모 수치
- 파트너사 실명, 팀원 이름·경력·사진
- 경쟁사 비교표

→ 이 항목들을 넣으려면 **반드시 사용자에게 먼저 확인**할 것.

## 8. 인터랙션 / 기술적 디테일 (주의사항)

- **`TiltPhone.tsx`**: Hero 폰의 3D 틸트. pointer 이벤트 기반, 기본 각도 `{x:4, y:-10}`, 최대 `{x:16, y:22}`. 터치 기기 대응 위해 `touchAction: "none"`.
- **`PhoneMockup.tsx`**: `size` prop으로 `default`(240×420) / `large`(264×462) 선택.
  - ⚠️ 과거에 가운데 폰을 `scale-110`(CSS transform)으로 키웠다가 **아래 캡션 텍스트를 덮는 버그** 발생. transform은 레이아웃 공간을 안 늘리기 때문. 반드시 `size` prop으로 실제 크기를 바꿀 것.
- **`GuideStep.tsx` 이미지**: `object-cover` + 고정 높이를 쓰면 세로로 긴 앱 스크린샷이 잘림. 현재 `h-auto w-full`로 전체가 보이게 되어 있음.
- **ESLint 주의**: 이 프로젝트의 lint는 (1) 내부 링크에 `<a>` 대신 `next/link` 사용, (2) `useEffect` 안에서 `setState` 직접 호출 금지를 **에러로** 잡음. `ThemeToggle`은 mounted 상태 대신 CSS(`dark:hidden`/`dark:block`)로 아이콘을 전환해서 우회함.
- **Next.js 16**: `node_modules/next/dist/docs/`에 로컬 문서 있음. 기존 지식과 다른 부분이 있으니 API 헷갈리면 여기 참조. `AGENTS.md`가 이 사실을 명시함(자동 생성 파일이라 지우면 다시 생김).

## 9. 남은 작업 (다음 세션에서 할 일)

### 콘텐츠 대기 중 (사용자 입력 필요)
1. ✅ **CTA 섹션** — "Request a Demo"는 전부 `/demo` 폼 페이지로 연결됨(2026-09-11 완료). 앱스토어·플레이스토어 링크는 여전히 "Coming soon" placeholder — 실제 링크 생기면 `Hero.tsx`, `CTA.tsx`의 "Download the App"/App Store/Google Play `href="#"` 교체
2. **Vehicle Cloud Search** — 앱 구현 후 스크린샷 + 가이드 작성
3. **AI Service Report 2~4단계** — 스크린샷 받으면 교체
4. **회사 소개 통계 실제 수치** — 현재는 IR 기준(5+/6/MVP)
5. **Footer 약관** — Privacy / Terms 페이지 만들지, 링크만 걸지 결정 필요
6. **다크모드 로고 색상** — 사용자가 준 다크 배경 로고 원본의 정확한 색상 코드 확인 (현재 `#3a4560`은 내가 임의 조정한 값)
7. **⏳ Notion 데모 신청 연동 — 사용자가 해야 할 설정 남음.** 아래 11번 섹션 참고

### 배포 — 완료 (2026-09-11 기준, Vercel)
1. ✅ GitHub 저장소 생성 + push 완료 — **public**, `github.com/shhwang7095-crypto/altobay-landing-page`, `gh` CLI로 인증(계정 `shhwang7095-crypto`)해서 진행함
2. ⏸️ ~~Firebase App Hosting~~ — 한때 "GCP 연동 호스팅"으로 방향 전환해서 `apphosting.yaml` 추가 + 콘솔 안내까지 진행했었으나, 사용자가 다시 **"vercel에 배포하자 이제"**로 최종 확정하면서 중단됨. `apphosting.yaml`은 Vercel이 무시하므로 레포에 그대로 둬도 무해함 — 굳이 지울 필요 없음.
3. ✅ **Vercel 배포 완료.** GitHub Import → Framework 자동 감지 → 배포 성공.
   - **프로덕션 URL**: `https://altobay-landing-page1.vercel.app` (배포 해시 URL `https://altobay-landing-page1-2q9xfmath-global-a891.vercel.app`도 같은 배포를 가리킴 — 커밋마다 해시가 바뀌므로 `SITE_URL`엔 고정 alias만 사용)
   - 이후 `master`에 push하면 Vercel이 자동으로 재배포함(별도 CLI 배포 불필요).
   - 환경변수(`NOTION_API_KEY`, `NOTION_DATABASE_ID`)는 Vercel 프로젝트 설정 → Environment Variables에 등록 완료 확인함(중간에 오타 수정 + "이미 존재하는 이름" 오류를 거쳐 최종 저장됨). **아직 실제 프로덕션에서 `/demo` 폼 제출 테스트는 안 해봄 — 다음 확인 필요.**
4. ✅ `src/app/layout.tsx:11`의 `SITE_URL`을 실제 Vercel URL(`https://altobay-landing-page1.vercel.app`)로 교체 완료 → OG 이미지/공유 미리보기 정상 동작해야 함.
5. (선택, 미진행) `altobay.ai` 커스텀 도메인 연결 — Vercel 프로젝트 설정 → Domains에서 추가 가능. 구매 전 도메인/결제 관련 논의는 나눴으나 실제 구매는 안 함.

## 10. `/demo` 데모 신청 폼 → Notion DB 연동 (2026-09-11 추가)

`/demo` 페이지(`src/app/demo/page.tsx` + `components/demo/DemoRequestForm.tsx`)에서 이름/업체명/직책/이메일/전화/지역/관심서비스(**복수 선택 가능**, 3개 기능 중)/기타 문의를 입력받아, `src/app/api/demo-request/route.ts`가 Notion API로 지정된 데이터베이스에 새 행을 생성한다.

### ✅ 로컬에서 끝까지 동작 확인 완료 (2026-09-11)

기존에 `meeting-to-notion` 프로젝트(`Desktop\meeting-to-notion\.env.local`)에서 쓰던 **workspace-wide Notion integration 토큰을 그대로 재사용**했다 (사용자가 이미 만들어둔 걸 확인 후 재사용 — 새 integration 안 만듦). 사용자가 직접 만든 데이터베이스: `https://app.notion.com/p/chabot/altobay-ai-demo-inquire-3d8d744fb7ca80558194e1ddcf8db443` (페이지 안에 인라인 DB, 실제 database ID는 `3d8d744f-b7ca-8080-921b-c6b668a95060`).

테스트 제출 → Notion에 실제 row 생성 확인 → 테스트 row는 archive 처리해서 정리함.

**주의할 점 하나**: Notion DB의 "Interested Service" multi-select 옵션 중 하나가 `AI-Generated Service Report`(단수)로 만들어져 있는데, 사이트 문구는 전부 `AI-Generated Service Reports`(복수)다. Notion API로 옵션 이름 rename을 시도했는데 **계속 반영이 안 됨**(API가 200을 반환해도 실제로는 안 바뀜, 원인 불명 — 재현되면 다시 시도해볼 것). 그래서 코드 레벨에서 우회함: `route.ts`의 `NOTION_SERVICE_OPTION` 매핑이 전송 직전에 `"...Reports"` → `"...Report"`로 변환한다. UI 문구는 그대로 복수형 유지. **Notion 쪽에서 저 옵션 이름을 나중에 고치게 되면 이 매핑도 지우거나 맞춰서 고칠 것.**

### 로컬 개발 환경

`app-landing-page/.env.local`에 이미 실제 값이 채워져 있음 (재사용한 토큰 + 위 database ID). `.gitignore`로 커밋 안 됨 — 새 세션에서 로컬 테스트하려면 이 파일이 남아있는지 먼저 확인.

### ✅ 프로덕션(Vercel) 환경변수 등록 완료

Vercel 프로젝트 → Settings → Environment Variables에 `NOTION_API_KEY`, `NOTION_DATABASE_ID` 등록 완료 확인함. 값은 위 "로컬 개발 환경"에서 쓴 `.env.local`과 동일 (저장소는 public이므로 절대 코드에 평문 커밋 금지, `.env.local`만 사용).

**⏳ 다음 세션에서 확인할 것**: 실제 프로덕션 `/demo` 페이지(`https://altobay-landing-page1.vercel.app/demo`)에서 폼 제출까지 해보고 Notion에 잘 들어가는지 아직 검증 안 됨 (로컬에서는 검증 완료).

## 11. 작업 원칙

- **요청 범위 밖은 건드리지 말 것.** 사용자가 지시하지 않은 색상·모션·레이아웃을 임의로 바꾸지 않는다.
- **로고는 실측값**이다. "더 예쁘게" 같은 이유로 좌표/색상을 바꾸지 않는다.
- IR 덱은 **Confidential 문서**다. 재무·펀딩·팀·파트너 정보를 웹에 올리기 전 반드시 확인받는다.
- 수정 후에는 `npm run lint` → `npm run build`로 검증한다.
