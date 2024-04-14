# React Shopping Cart

NEXT STEP 장바구니 미션 진행한 저장소 입니다.

## 배포

[배포 링크](https://react-shopping-cart-omega-three.vercel.app/)
<br/>
[스토리북 링크](https://gn0lee.github.io/react-shopping-cart/)

## 실행 방법

### 의존성 설치

```bash
yarn install
```

### local 실행 (msw 사용)

```bash 
yarn dev
```

### local 실행 (msw 사용 안함)

```bash
yarn dev:prod
```

### 스토리북 실행

```bash
yarn storybook
```

### test 실행

```bash
yarn test
```

### 환경변수

```dotenv
VITE_API_ENDPOINT=https://lgbbwcvwtbrudityxxbd.supabase.co/functions/v1
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnYmJ3Y3Z3dGJydWRpdHl4eGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0MzY5MzgsImV4cCI6MjAyNzAxMjkzOH0.V4nEgkFClH7OPi0glqZIQOtvpYkpirAcBGLCp8mJQiw
```

## 사용 라이브러리

- react
- react-router-dom
- react-query
- zustand
- [near-payments](https://www.npmjs.com/package/near-payments)