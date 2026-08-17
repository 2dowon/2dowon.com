export interface IResumeItem {
  title: string;
  titleLink?: string;
  period: string;
  description?: string;
  stack?: string[];
  points: string[];
}

export interface ICareer {
  company: string;
  role: string;
  period: string;
  summary: string;
  items: IResumeItem[];
}

export const intro = [
  "5년 차 프론트엔드 개발자로, 사용자에게 닿는 화면부터 팀이 굴러가는 개발 환경까지 폭넓게 만들고 있습니다. 현재는 모두싸인에서 AI 계약 관리 프로덕트 '캐비닛'의 웹 프론트엔드를 담당하고 있습니다.",
  "이전에는 시드 단계 스타트업에 합류해 Pre-A 투자 유치와 MAU 50만 달성까지 성장하는 과정에서 필요한 개발 역량을 책임졌습니다. 웹과 앱 서비스를 기획부터 개발, 배포, 운영까지 맡았고, 필요할 때는 프로젝트 리드 역할도 겸했습니다.",
  "느린 완벽보다는 빠른 실행과 지속적인 개선을 지향합니다. 주어진 일을 처리하기보다 문제를 스스로 정의하고, 반복되는 문제는 도구와 규칙으로 만들어 팀 전체가 덜 겪게 만드는 일을 좋아합니다.",
  "'같이의 가치'를 믿습니다. 다양한 직무의 팀원들과 적극적으로 소통하며 즐겁게 일하고자 합니다. 업무 외적으로도 개발 커뮤니티에 기여하며 성장하는 데 관심이 많고, 3년간 소프트웨어 마에스트로 엑스퍼트로 활동하며 멘토링과 지식 공유를 이어왔습니다.",
];

export const careers: ICareer[] = [
  {
    company: "모두싸인",
    role: "Frontend Engineer",
    period: "2025.04 ~ 현재",
    summary:
      "전자계약 서비스 모두싸인에서 AI 계약 관리(CLM) 프로덕트 '캐비닛'의 프론트엔드를 담당하고 있습니다.",
    items: [
      {
        title: "캐비닛 (AI 계약 관리)",
        period: "2025.04 ~ 현재",
        description:
          "계약 문서를 자동으로 분류·추출하고 관리하는 B2B SaaS 프로덕트의 웹 프론트엔드",
        stack: [
          "TypeScript",
          "React",
          "TanStack Query",
          "Vite",
          "Vitest",
          "Storybook",
        ],
        points: [
          "제품 초기부터 프론트엔드를 담당해 기획 단계부터 참여하고, 매주 릴리즈하며 서비스를 함께 키워가는 중",
          "OpenAPI 스키마 기반 코드젠으로 서버 상태 접근을 일원화하고, TanStack Query v5 마이그레이션과 도메인별 캐시 무효화 전략을 사내 서비스 전반에 적용",
          "사용자의 조회 상태를 URL 중심으로 재설계해 화면을 이동하거나 링크를 공유해도 맥락이 유지되도록 개선",
          "화면마다 흩어져 있던 로직을 도메인에 종속되지 않는 공통 구조로 리팩터링하고, 데이터가 많은 환경에서의 렌더링 성능을 개선",
          "Vite 8·TypeScript v7(tsgo) 등 빌드·타입체크 도구를 선행 도입해 빌드 시간을 12.4초에서 4.1초로 67% 단축",
          "실사용 브라우저 분포를 근거로 최소 지원 브라우저를 정하고, 흩어져 있던 빌드 타깃 설정을 단일 출처로 정리",
          "Storybook을 도입해 컴포넌트의 상태 분기를 스토리로 문서화하고, 디자이너·기획자와 실제 화면을 함께 보며 UX를 검증하는 흐름을 정착",
        ],
      },
      {
        title: "테스트 커버리지 이니셔티브",
        period: "2025.10 ~ 2026.03",
        description:
          "빠르게 커진 신규 프로덕트의 회귀 안전망을 만드는 팀 차원의 개선 작업",
        stack: ["Vitest", "Testing Library", "GitHub Actions"],
        points: [
          "Vitest 기반 테스트 환경을 정비하고 Phase 단위로 쪼갠 계획을 세워 커버리지를 3.34%에서 80%까지 끌어올림",
          "커버리지 임계값을 되돌릴 수 없게 하는 branch threshold ratchet을 도입해 이후 유입되는 코드의 커버리지 하락을 차단",
          "커버리지 증가로 2배 이상 늘어난 CI 시간을 테스트 샤딩으로 되돌리고, 팀 테스트 작성 규칙(TP-CODE)을 문서화해 공유",
        ],
      },
      {
        title: "디자인 시스템",
        period: "2025.06 ~ 현재",
        description: "전사 서비스가 사용하는 공용 컴포넌트 라이브러리 기여",
        stack: ["TypeScript", "React", "Storybook"],
        points: [
          "Modal 컴포넌트의 버저닝 구조를 설계하고 Alert·Confirmation·Destructive·Error Modal v2를 구현해 서비스 전반에 점진 적용",
          "Dropdown controlled mode 지원, TextLink의 react-router 의존성 제거 등 라우터에 종속되지 않는 컴포넌트 구조로 리팩터링",
          "FontAwesome v6 → v7 업그레이드 방향을 챕터에서 논의·정리하고, 자체 SVG 아이콘을 전수조사해 디자인 시스템 아이콘으로 통일",
        ],
      },
      {
        title: "AI 기반 개발 워크플로",
        period: "2025.11 ~ 현재",
        description:
          "설계부터 리뷰까지의 개발 과정을 에이전트 워크플로로 옮기는 사내 프로젝트",
        stack: ["Claude Code", "TypeScript", "Node.js"],
        points: [
          "프론트엔드 코드 리뷰 스킬(fe-review)을 만들어 팀 리뷰에 도입하고, 흩어져 있던 리뷰 정책을 단일 출처로 정리",
          "Mixpanel 이벤트 설계, 스쿼드 회고, 변경 영향 범위 분석 등 반복 업무를 스킬로 만들어 플러그인으로 배포",
          "코드베이스 지식 그래프를 만들고 변경 사항에 따라 자동 갱신되도록 파이프라인을 구성해 설계 단계의 엣지 케이스 탐색에 활용",
        ],
      },
      {
        title: "전자계약 ↔ 캐비닛 연동",
        period: "2025.08 ~ 2025.12",
        description: "기존 전자계약 서비스와 신규 프로덕트를 잇는 연동 작업",
        stack: ["TypeScript", "React"],
        points: [
          "완료 문서를 캐비닛으로 연동·백업하는 기능을 양쪽 서비스에 구현하고, 라벨 조건 없이 전체 완료 문서를 백업하도록 확장",
          "서비스 간 토큰 교환 로직을 걷어내고 로그인 실패 시 발생하던 서비스 간 무한 리다이렉트 이슈를 해결",
        ],
      },
    ],
  },
  {
    company: "노써치",
    role: "Frontend Developer",
    period: "2021.12 ~ 2024.12",
    summary:
      "가전 리뷰 미디어 커머스 노써치에서 시드 단계부터 합류해 웹과 앱을 만들었습니다.",
    items: [
      {
        title: "노써치 웹 v2",
        titleLink: "https://nosearch.com",
        period: "2021.12 ~ 2024.12",
        stack: [
          "TypeScript",
          "React",
          "Next.js 12",
          "Zustand",
          "TailwindCSS",
          "Supabase",
          "Yarn Berry",
          "Lerna",
        ],
        points: [
          "노써치픽·구매가이드·가전백과 등 주요 콘텐츠 페이지와 이용권, 랭킹 필터 등 핵심 비즈니스 로직을 메인으로 담당",
          "토스페이먼츠 이용권 결제 연동, 제품 비교 페이지 데이터 시각화, 반응형 디자인 적용",
          "Next.js 11 · Recoil · chakra-ui 기반 코드베이스를 Next.js 12 · Zustand · TailwindCSS로 마이그레이션",
          "SSR·CSR·SSG·ISR을 상황에 맞게 조합해 latency를 최소화하고 SEO를 최적화",
          "이미지 최적화와 prefetch 범위 조정으로 Vercel 비용 절감 (image optimization 696GB → 137GB 약 80% 감소, 제품 상세 페이지 용량 1.2MB → 669KB 약 50% 감소, ISR Writes 317m → 167m 약 47% 감소)",
          "Mixpanel로 사용자 행동을 수집하고 Hackle로 A/B 테스트를 진행해 데이터 기반 의사결정 환경 구축",
          "Technical SEO 전략을 적용해 non-brand 키워드 중심으로 Google 검색 결과 1페이지 상위 노출, Organic 트래픽 약 7배 증가",
          "재직 기간 중 월별 사용자 수 8배, 구매링크 클릭 수 50배 증가",
        ],
      },
      {
        title: "노써치 쇼핑리스트",
        period: "2024.04 ~ 2024.12",
        description: "Frontend 1명 · Backend 1명 · Designer 1명",
        stack: [
          "TypeScript",
          "React",
          "Next.js 14",
          "Zustand",
          "TailwindCSS",
          "Shadcn/ui",
          "Supabase",
        ],
        points: [
          "3명 규모의 프로젝트를 리드해 개발 시작 8주 만에 MVP를 출시하고 이후 유지보수까지 담당",
          "초기 기획 단계부터 디자이너와 협업해 UI/UX를 설계하고, 개발 환경 세팅부터 배포까지 프론트엔드 전 영역을 담당",
          "Server Component와 SSG를 적극 활용해 latency를 최소화하고, 생성·수정 흐름에 Server Action을 적용해 클라이언트-서버 간 호출을 축소",
          "쇼핑리스트 데이터를 JSON으로 관리해 제품이 삭제되어도 데이터와 추가 순서가 보존되도록 설계하고, 접근 권한이 다른 조회수·좋아요 데이터는 테이블을 분리",
        ],
      },
      {
        title: "노써치 앱",
        period: "2023.02 ~ 2024.02",
        stack: ["Flutter", "Dart", "Bloc/Cubit", "Supabase"],
        points: [
          "시니어 개발자와 2인 체제로 3개월 만에 웹의 거의 모든 기능을 앱으로 구현해 출시",
          "카테고리 홈·검색·마이페이지·브랜드 리뷰의 비즈니스 로직과 주요 콘텐츠 페이지 웹뷰 구현",
          "앱 누적 다운로드 15만 달성, 월별 신규 유저 20% 증가, 매출 매월 10% 증가",
        ],
      },
    ],
  },
];

export const projects: IResumeItem[] = [
  {
    title: "2dowon.com",
    titleLink: "https://2dowon.com",
    period: "2024.09 ~ 현재",
    stack: [
      "TypeScript",
      "React",
      "Next.js 14",
      "TailwindCSS",
      "Shadcn/ui",
      "pnpm",
    ],
    points: [
      "개발 경험을 기록하고, 비슷한 문제를 겪는 사람들에게 도움이 되고 싶어 운영 중인 기술 블로그",
      "2020년 Tistory를 시작으로 Jekyll, Gatsby를 거쳐 현재는 Next.js 기반 커스텀 도메인 블로그에 정착",
    ],
  },
  {
    title: "너 진짜 T야?",
    period: "2024.10 (10일)",
    description: "Frontend 1명 · Backend 1명 · PM 1명 · Designer 2명",
    stack: [
      "TypeScript",
      "React",
      "Next.js 14",
      "React Query",
      "TailwindCSS",
      "Shadcn/ui",
    ],
    points: [
      "700명 이상이 참여한 밸런스 게임을 바탕으로 나의 MBTI를 검증하고 토론하는 서비스",
      "비사이드 포텐데이(10일간 기획·디자인·개발·배포)에 참여해 프론트엔드 전 영역을 혼자 담당, 20시간 안에 구현",
    ],
  },
  {
    title: "Goodsduck",
    titleLink: "https://youtu.be/CPJONwdI1OA",
    period: "2021.06 ~ 2021.11",
    description: "Frontend 1명 · Backend 2명",
    stack: [
      "React",
      "Redux",
      "Firebase RTDB",
      "PostCSS",
      "AWS S3",
      "React Native",
    ],
    points: [
      "MAU 1,200명, 앱 다운로드 1,000회 이상을 기록한 아이돌 굿즈 중고 거래 플랫폼",
      "소프트웨어 마에스트로 12기 덕스 팀 팀장을 겸하며 4개월 만에 web·iOS/Android 앱 개발을 마치고 서비스 운영",
      "2023.02 프로젝트 판매를 통한 엑싯",
    ],
  },
];

export const skills = [
  "TypeScript, React, Next.js (Page & App Router)",
  "TanStack Query, Zustand, Jotai",
  "TailwindCSS, Storybook",
  "Vitest, Testing Library",
  "Vercel, Supabase",
  "Flutter, Dart, Bloc/Cubit",
];

export const activities = [
  {
    period: "2022.06 ~ 2024.06",
    content: "소프트웨어 마에스트로 엑스퍼트 1~3기 활동",
  },
  { period: "2021.04 ~ 2021.11", content: "소프트웨어 마에스트로 12기 수료" },
];

export const educations = [
  {
    period: "2024.03 ~ 현재",
    content: "한국방송통신대학교 컴퓨터과학과 재학",
  },
  {
    period: "2020.10 ~ 2021.04",
    content: "플레이데이터 - 영상처리를 위한 인공지능 SW 개발자 양성과정 수료",
  },
  {
    period: "2015.03 ~ 2020.02",
    content: "숭실대학교 정보사회학과 / 언론홍보학과 졸업",
  },
];
