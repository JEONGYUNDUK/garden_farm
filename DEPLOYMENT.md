# 덕앤플라워 배포 가이드

## 1. 프로젝트 개요

덕앤플라워는 `Next.js App Router` 기반의 정보 제공형 농원 홈페이지입니다. 예약, 구매, 장바구니, 로그인 기능 없이 정적 콘텐츠 중심으로 구성되어 있으며, GitHub 저장소와 Vercel 연동을 통해 자동 배포할 수 있습니다.

## 2. 배포 대상 저장소

- GitHub Repository: `JEONGYUNDUK/garden_farm`
- Production Branch: `main`
- Vercel Project Name: `garden-farm`
- Current Live URL: `https://garden-farm-rho.vercel.app`

## 3. Vercel 배포 설정값

- Git Provider: `GitHub`
- Repository: `JEONGYUNDUK/garden_farm`
- Framework Preset: `Next.js`
- Root Directory: `프로젝트 루트`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `기본값`
- Production Branch: `main`
- Environment Variables: `없음`

## 4. 로컬 실행 방법

Mac 기준:

```bash
npm install
npm run dev
```

브라우저 접속 주소:

```text
http://127.0.0.1:3000
```

## 5. 빌드 점검 방법

배포 전 아래 명령어를 실행합니다.

```bash
npm install
npm run build
```

정상 기준:

- `next build`가 오류 없이 완료됨
- `/` 경로가 정적으로 생성됨

## 6. GitHub push 방법

현재 원격 저장소가 이미 연결되어 있는지 먼저 확인:

```bash
git remote -v
```

기본 업로드 명령어:

```bash
git status
git add .
git commit -m "Prepare Vercel deployment"
git push origin main
```

## 7. Vercel Import 절차

1. `https://vercel.com/new` 접속
2. `jeongyunduk@gmail.com` 계정으로 로그인
3. GitHub 연결 화면이 나오면 GitHub 권한 승인
4. `Import Git Repository`에서 `JEONGYUNDUK/garden_farm` 선택
5. Framework Preset이 `Next.js`인지 확인
6. Root Directory가 프로젝트 루트인지 확인
7. Install Command가 `npm install`인지 확인
8. Build Command가 `npm run build`인지 확인
9. Output Directory는 기본값 유지
10. Environment Variables는 비워둠
11. 아래 설정을 최종 확인한 뒤 Deploy 진행

최종 확인 체크:

- Repository: `JEONGYUNDUK/garden_farm`
- Framework: `Next.js`
- Root Directory: `프로젝트 루트`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `기본값`
- Environment Variables: `없음`
- Production Branch: `main`

## 8. 환경변수 필요 여부

현재 프로젝트는 정보 제공형 정적 홈페이지이며, 필수 환경변수는 없습니다.

- 전화번호
- 카카오톡 링크
- 지도 링크

위 값들은 현재 코드 내 정적 데이터 파일에서 관리하고 있으며, 민감정보도 아닙니다. 추후 운영 편의를 위해 환경변수로 옮길 수는 있지만, 현재 Vercel 배포에 필수는 아닙니다.

## 9. 자동 배포 흐름

```text
로컬 개발
↓
GitHub main 브랜치에 push
↓
Vercel이 GitHub 변경 감지
↓
자동 install
↓
자동 build
↓
자동 deploy
↓
덕앤플라워 홈페이지 URL에 반영
```

## 10. 배포 후 확인 체크리스트

- 메인 페이지 정상 접속 여부
- 모바일 화면 정상 여부
- 이미지 정상 표시 여부
- 헤더 메뉴 앵커 이동 여부
- 전화 링크 동작 여부
- 카카오톡 링크 동작 여부
- 지도 링크 동작 여부
- SEO title 반영 여부
- SEO description 반영 여부
- GitHub `main` push 후 자동 재배포 여부

현재 운영 URL:

```text
https://garden-farm-rho.vercel.app
```

참고:

- 현재 사이트는 단일 페이지 랜딩 구조입니다.
- `/about`, `/gallery`, `/location` 같은 개별 라우트는 없고, `/#about`, `/#gallery`, `/#location` 앵커 이동 방식입니다.
- 따라서 위 경로를 직접 열면 별도 페이지가 아니라 현재 구조상 존재하지 않는 경로로 처리됩니다.

## 11. 자주 발생하는 오류와 해결 방법

| 오류 | 원인 | 해결 방법 |
|---|---|---|
| `npm run build` 실패 | 타입 오류, 잘못된 import, 누락된 파일 | 로컬에서 `npm run build` 재실행 후 에러 파일 수정 |
| 이미지 경로 오류 | `public/` 기준 경로 오타 | `/images/...` 경로와 실제 파일명 일치 여부 확인 |
| import 경로 대소문자 오류 | macOS에서는 통과해도 Linux 빌드에서 실패 가능 | 파일명과 import 경로의 대소문자를 정확히 맞춤 |
| 환경변수 누락 | 배포 설정에 필요한 값이 정의되지 않음 | 현재 프로젝트는 필수 환경변수 없음. 추후 사용 시 Vercel Project Settings에 추가 |
| Node.js 버전 문제 | 로컬/배포 환경 Node 버전 차이 | Vercel Project Settings에서 Node 버전을 안정 버전으로 맞추고 재배포 |
| Root Directory 설정 오류 | 저장소 하위 폴더를 잘못 지정 | Root Directory를 프로젝트 루트로 유지 |
| GitHub 저장소 권한 문제 | Vercel이 저장소를 읽지 못함 | GitHub 연동 승인 화면에서 `garden_farm` 접근 권한 허용 |
| `package.json` scripts 누락 | Vercel이 빌드 명령을 찾지 못함 | `dev`, `build`, `start` 스크립트가 있는지 확인 |
| Tailwind CSS 설정 오류 | `content` 경로 누락으로 스타일이 사라짐 | `tailwind.config.ts`에 `app/`, `components/` 경로 포함 확인 |
| Vercel 무료 플랜 제한 경고 | 팀 기능, 유료 기능, 고급 리소스 제한 | Hobby/Free 기본값으로 진행하고 유료 옵션은 선택하지 않음 |

## 12. 사용자가 직접 해야 할 작업

- Vercel 로그인
- GitHub 로그인
- GitHub 권한 승인
- 2단계 인증 입력
- Deploy 버튼 최종 승인
- 배포 완료 후 실제 운영 링크 점검
- 실제 전화번호, 카카오톡 링크, 지도 링크를 운영값으로 교체
- 플레이스홀더 이미지를 실제 농원 사진으로 교체

## 13. 보안 주의사항

- GitHub 비밀번호, Google 비밀번호, Vercel 비밀번호는 직접 입력하지 않음
- 2단계 인증코드는 사용자가 직접 입력
- API 토큰, 결제정보, 카드정보는 기록하거나 공유하지 않음
- 로그인/인증 화면에서 민감정보가 보이면 저장하지 않음
- 비용이 발생하는 플랜, 도메인 구매, 결제 연결은 진행하지 않음
