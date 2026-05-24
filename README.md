# 덕앤플라워 홈페이지

덕앤플라워의 소개, 식물 안내, 농원 소식, 방문 정보를 담은 Next.js 랜딩 페이지입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 품질 확인

```bash
npm run lint
npm run build
```

## GitHub 업로드

아직 Git 저장소가 연결되지 않았다면 아래 순서로 업로드할 수 있습니다.

```bash
git init
git add .
git commit -m "Initial homepage launch"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

이미 원격 저장소가 있다면 `git remote add origin ...` 대신 현재 원격 설정만 확인한 뒤 `git push`만 진행하면 됩니다.

## Vercel 배포

1. GitHub에 저장소를 푸시합니다.
2. Vercel에서 `Add New Project`로 저장소를 가져옵니다.
3. Framework Preset은 `Next.js`를 그대로 사용합니다.
4. 현재 기준 필수 환경 변수는 없습니다.
5. 배포가 끝나면 Vercel이 제공한 기본 도메인으로 바로 확인할 수 있고, 추후 실제 운영 도메인을 연결하면 됩니다.

## 운영 전 확인할 값

- `data/site.ts`의 전화번호는 현재 placeholder 값입니다.
- `data/site.ts`의 길찾기 링크와 카카오 채널 링크도 placeholder 값이며, 실제 운영 정보가 준비되면 교체하면 됩니다.
