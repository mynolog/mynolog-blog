---
title: 'React Hook Form으로 유효성 검증 구현하기(feat. Zod)'
slug: 'react-hook-form-with-zod'
date: '2025-01-22'
tags: ['react', 'validation']
description: 'React Hook Form과 Zod로 유효성 검증하는 방법을 정리한 문서입니다.'
---

## React Hook Form + Zod 유효성 검증

해당 게시글은 React, TypeScript 기준으로 작성되었으며 적용 버전은 아래와 같습니다.

```json
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/react": "^19.0.7",
    "@types/react-dom": "^19.0.3",
    "typescript": "~5.6.2",
    "vite": "^6.0.5"
  }
```

1. 라이브러리 설치

```bash
# npm
npm install react-hook-form zod @hookform/resolvers
# yarn
yarn add react-hook-form zod @hookform/resolvers
# pnpm
pnpm add react-hook-form zod @hookform/resolvers
```

2. 유효성 검증 폼 예시

```typescript
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  password: string
}

// Zod 스키마 정의(유효성 검증 오류 메시지 정의)
const schema = z.object({
  email: z
    .string()
    .email('유효하지 않은 이메일 형식입니다.')
    .min(1, '이메일 주소는 필수입니다.'),
  password: z.string().min(6, '비밀번호는 최소 6자리 이상 입력해주세요.'),
})

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // Zod 스키마 통합
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    // form 제출 시 로직 구현 부분
    console.log(data)
  }

  return (
    <>
      <h1>React Hook Form + Zod</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input type="text" {...register('email')} />
          <!-- 유효성 검증 오류 시 조건부 렌더링-->
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button>가입하기</button>
      </form>
    </>
  )
}
export default App
```
