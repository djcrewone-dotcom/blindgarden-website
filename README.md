# BlindGarden - 블라인드 전문 시공 서비스

전문적인 블라인드 시공 서비스로 아름다운 공간을 만들어드리는 BlindGarden의 공식 웹사이트입니다.

## 🚀 주요 기능

- **홈페이지**: 회사 소개 및 주요 서비스 안내
- **서비스 소개**: 다양한 블라인드 제품 및 서비스 상세 정보
- **시공 갤러리**: 실제 시공 사례들을 카테고리별로 분류하여 제공
- **견적 문의**: 맞춤형 견적 계산 및 문의 시스템
- **회사 소개**: 회사 연혁, 핵심 가치, 연락처 정보

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Build Tool**: Next.js App Router

## 📦 설치 및 실행

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 타입 체크
npm run type-check

# 린트 검사
npm run lint
```

### 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_VERCEL_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🚀 Vercel 배포

### 1. Vercel CLI 설치

```bash
npm i -g vercel
```

### 2. 프로젝트 배포

```bash
# Vercel에 로그인
vercel login

# 프로젝트 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 3. 자동 배포 설정

GitHub 저장소를 Vercel에 연결하면 자동으로 배포됩니다:

1. [Vercel Dashboard](https://vercel.com/dashboard)에서 새 프로젝트 생성
2. GitHub 저장소 연결
3. 빌드 설정 확인 후 배포

## 📁 프로젝트 구조

```
my-homepage/
├── app/                    # Next.js App Router
│   ├── about/             # 회사소개 페이지
│   ├── gallery/           # 시공갤러리 페이지
│   ├── quote/             # 견적문의 페이지
│   ├── services/          # 서비스소개 페이지
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
├── src/
│   └── components/        # 재사용 가능한 컴포넌트
│       ├── Header.tsx     # 헤더 컴포넌트
│       └── Footer.tsx     # 푸터 컴포넌트
├── public/                 # 정적 파일 (이미지, 아이콘 등)
├── next.config.js         # Next.js 설정
├── tailwind.config.js     # Tailwind CSS 설정
├── tsconfig.json          # TypeScript 설정
├── package.json           # 프로젝트 의존성
└── vercel.json            # Vercel 배포 설정
```

## 🔧 빌드 최적화

### 이미지 최적화

- Next.js Image 컴포넌트 사용으로 자동 최적화
- WebP, AVIF 포맷 지원
- 반응형 이미지 크기 자동 조정

### 성능 최적화

- CSS 최적화 활성화
- SWC 컴파일러 사용
- 정적 생성 및 서버 사이드 렌더링

## 📱 반응형 디자인

- 모바일 우선 접근법
- Tailwind CSS의 반응형 유틸리티 클래스 활용
- 모든 디바이스에서 최적화된 사용자 경험 제공

## 🚨 문제 해결

### 빌드 오류

```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# Next.js 캐시 클리어
rm -rf .next
npm run build
```

### Vercel 배포 오류

1. 빌드 로그 확인
2. 환경 변수 설정 점검
3. Node.js 버전 확인 (18.0.0 이상 필요)

## 📞 연락처

- **전화**: 1661-6823
- **이메일**: blindgarden@naver.com
- **주소**: 인천광역시 연수구 인천타워대로 323 송도센트로드 C동 23F

## 📄 라이선스

이 프로젝트는 BlindGarden의 내부 사용을 위한 것입니다.

---

© 2024 BlindGarden. All rights reserved.
