---
title: 'Next.js에서 Jest 설정, 한 번에 끝내는 방법'
slug: '20250426-jest-with-next-js'
date: '2025-04-26'
category: 'next.js'
thumbnail: ''
tags: ['nextjs', 'jest']
description: 'Next.js에 테스트 코드를 도입하기 위한 초기 설정을 정리한 가이드입니다.'
---

- 이 글은 Next.js, TypeScript 기준으로 작성되었습니다.
- 사용된 패키지 매니저는 `pnpm`이며, 각 패키지 버전은 아래와 같습니다.

```json
  "dependencies": {
    "next": "15.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "ts-node": "^10.9.2",
  },
  "devDependencies": {
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@jest/types": "^29.6.3",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/jest": "^29.5.14",
    "@types/node": "^20",
    "typescript": "^5",
    "ts-jest": "^29.3.2",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
  }
```

`Next.js` 프로젝트에 `Jest`를 적용하는게 생각보다 쉽지 않았습니다.
`Next.js` 특유의 파일 구조와 빌드 방식으로 인하여 `Jest` 기본 설정만으로는 제대로 테스트 코드를 적용하기 어려웠기 때문입니다.

`Next.js`는 기본적으로 ESM(ECMAScript Modules)을 채택하고 있지만, `Jest`는 전통적으로 CJS(CommonJS) 환경을 기반으로 동작하기 때문에 추가적으로 `Babel` 적용이 필요합니다. 여기에 프로젝트가 `TypeScript` 기반이라면 `Jest`를 위한 별도 설정까지 추가해야 합니다.

하지만 `next/jest` 덕분에 이런 복잡한 과정 없이, 단 몇 줄만으로 깔끔하게 `Jest` 테스트 환경을 구축할 수 있습니다.

이 글에서는 `next/jest`를 활용해 `Next.js` 프로젝트에 빠르고 간단하게 `Jest`를 설정하는 방법을 정리합니다.

#### 1. 테스트 관련 패키지 설치

우선, `next/jest`를 활용하기 위해 필요한 패키지를 설치합니다.

```bash
pnpm add -D jest jest-environment-jsdom @jest/types ts-jest ts-node @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest
```

| 패키지                        | 설명                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `jest`                        | 테스트 러너                                                                          |
| `jest-environment-jsdom`      | 브라우저 환경을 시뮬레이션하는 `Jest` 환경 설정                                      |
| `@jest/types`                 | `jest.config.ts`나 `Jest` 관련 API 사용 시 타입 자동완성을 지원해주는 패키지         |
| `ts-jest`                     | `TypeScript` 파일을 `Jest`가 이해할 수 있도록 변환해주는 도구                        |
| `ts-node`                     | `TypeScript` 파일을 런타임에서 직접 실행할 수 있게 해주는 도구 (jest.config.ts 실행) |
| `@testing-library/react`      | `React` 컴포넌트를 테스트하기 위한 유틸리티                                          |
| `@testing-library/jest-dom`   | 추가적인 DOM matcher를 제공하는 유틸리티                                             |
| `@testing-library/user-event` | 사용자의 상호작용 시뮬레이션을 제공하는 유틸리티                                     |
| `@types/jest`                 | `Jest`의 타입 정의 파일                                                              |

#### 2. 테스트 환경 설정

패키지 설치를 완료했다면, 프로젝트 루트 디렉토리에 `jest.config.ts`, `jest.setup.ts` 파일을 생성합니다.

```bash
touch jest.config.ts jest.setup.ts
```

```typescript
// jest.config.ts
import type { Config } from '@jest/types' // 선택 사항, config 객체에 타입 추론을 적용
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' }) // 프로젝트 루트를 기준으로 Jest 기본 설정 생성

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // 테스트 파일 실행 전에 실행할 설정 파일
  testEnvironment: 'jest-environment-jsdom', // 브라우저 환경을 시뮬레이션하는 jsdom 사용
}

export default createJestConfig(config) // Next.js 기본 설정 + 커스텀 설정을 통합하여 Jest 설정에 적용
```

```typescript
// jest.setup.ts
import '@testing-library/jest-dom'
```

그 다음으로, `tsconfig.test.json` 파일을 생성하고, 아래 코드를 추가합니다. (복사-붙여넣기 시 주석 제거)

```json
{
  "extends": "./tsconfig.json", // tsconfig.json 설정을 확장
  "compilerOptions": {
    "types": ["jest", "node"] // 테스트 환경 타입 지원 (Jest, Node.js 전역 객체)
  },
  "include": [
    // 타입 검사를 적용할 파일 범위
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/__tests__/**/*.ts",
    "**/__tests__/**/*.tsx"
  ]
}
```

마지막으로, `package.json` 파일을 열고 테스트 관련 스크립트를 추가합니다. (복사-붙여넣기 시 주석 제거)

```json
{
  // ...
  "scripts": {
    "test": "jest --passWithNoTests" // --passWithNoTests: 테스트 파일이 없어도 테스트 통과
  }
}
```

`Jest` 테스트 설정이 잘 적용되었는지 스크립트를 통해서 확인합니다.

```bash
pnpm test

> jest --passWithNoTests
No tests found, exiting with code 0
```

여기까지 완료되었다면, `Next.js` 프로젝트에 `Jest` 기반 테스트 환경이 준비 단계는 모두 완료되었습니다. 이 성정을 기반으로 간단한 유닛 테스트부터 컴포넌트 테스트, API 라우트 테스트 등을 자유롭게 작성할 수 있습니다.

다음 글에서는 간단한 테스트 코드 작성 예제를 다뤄볼 예정입니다.

긴 글 읽어주셔서 감사합니다 :)
