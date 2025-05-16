---
title: 'Hello, Angular: 괜히 겁먹었나 싶다'
slug: '20250517-hello-angular'
date: '2025-05-17'
category: 'angular'
thumbnail: ''
tags: ['Angular', 'SPA']
description: 'Angular를 처음 접하며 느낀 인상과 기록을 정리한 글입니다.'
---

- 이 글은 Angular, TypeScript 기준으로 작성되었습니다.
- 사용한 패키지 매니저는 `pnpm`이며, 주요 의존성 버전은 아래와 같습니다.

```json
"dependencies": {
    "@angular/common": "^19.2.0",
    "@angular/compiler": "^19.2.0",
    "@angular/core": "^19.2.0",
    "@angular/forms": "^19.2.0",
    "@angular/platform-browser": "^19.2.0",
    "@angular/platform-browser-dynamic": "^19.2.0",
    "@angular/router": "^19.2.0",
    "rxjs": "~7.8.0",
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.2.11",
    "@angular/cli": "^19.2.11",
    "@angular/compiler-cli": "^19.2.0",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.7.2"
  }
```

### 내가 Angular를 하게 될 줄이야

얼마 전, 최근 지원했던 회사로부터 서류 합격 소식을 받았습니다. 기쁨도 잠시, 문득 지원하지 전 확인했던 기술 스택이 떠올랐습니다.  
TailwindCSS 괜찮고, Jest도 이제 학습하기 시작해서 낯설진 않아.. 그런데 Angular? 갑자기 머리가 아파지기 시작했지만, 이왕 이렇게 된 거 시작이라도 해보자는 마음으로 Angular 공식 문서를 열어봤습니다. 그렇게 기대와 걱정이 뒤섞인 상태로, 저의 Angular 첫 여정이 예상치 못하게 시작되었습니다.

#### 1. 설치 및 기본 설정

언제나 그렇듯 우선 관련 의존성부터 설치해야 합니다.
다행히 Angular는 강력한 CLI 도구를 제공하여, 자칫 번거로울 수 있는 초기 개발 환경 구축을 대부분 자동화해줍니다. 덕분에 복잡한 환경 설정에 시간을 쓰기보다는 개발 로직 구현에 더 집중할 수 있는 구조입니다.

```bash
# 전역 설치
pnpm add -g @angular/cli
ng new hello-angular
```

#### 2. TailwindCSS 설치 및 적용

저는 TailwindCSS를 선호하기 때문에 이번 예제에서도 적용해보려고 합니다. 한가지 주의할 점은 TailwindCSS v4가 정식 릴리즈되었지만 Angular와의 호환성 이슈가 있는것으로 보여서 v3.4를 설치해보겠습니다.

```bash
pnpm add -D tailwindcss@3.4 postcss autoprefixer
```

이어서 환경 설정을 위한 파일도 루트 디렉토리에 추가합니다.

```bash
touch postcss.config.js tailwind.config.ts
```

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'
export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
```

```scss
// src/styles.scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

아마도 VSCode 내 별도 설정을 하지 않았다면 이 부분에서 경고가 뜰텐데 결론부터 말하자면 정상적으로 CSS로 변환되어 적용되기 때문에 넘어가도 됩니다. `@tailwind`가 TailwindCSS 전용 지시어이기 때문에 SCSS에서 인식을 못하는 것이 경고의 원인이고 정 거슬린다면 다음과 같이 설정해주세요.

```json
// root/.vscode/settings.json
{
  "scss.lint.unknownAtRules": "ignore"
}
```

3. 컴포넌트 구성

Angular에서 하나의 컴포넌트는 기본적으로 아래 세 가지 파일로 구성됩니다.

- `app.component.ts`: 컴포넌트의 **로직**과 **데이터**를 담는 TS 파일
- `app.component.html`: 컴포넌트의 **UI 템플릿**을 정의하는 HTML 파일
- `app.component.scss`: 해당 컴포넌트에만 적용되는 **스타일** 파일

기능별로 파일 분리되어 있어서 관심사 분리가 잘 되어 있는 구조입니다.
해당 구성을 처음본 순간, "아 이거 Vue.js의 SFC와 구조가 비슷한데?" 라는 생각이 스쳐지나갔습니다.
Angular와 Vue.js 모두 동일한 관심사 분리 철학을 공유하는것으로 보입니다.
다만, 차이점이라면 Vue.js의 경우는 하나의 단일 컴포넌트 내에서 블록 단위로 관심사를 분리한다면, Angular는 파일 단위로 분리하는 방식을 적용했다는 점입니다.

#### 마치며

처음엔 막막했지만, 막상 시작해보니 CLI의 도움으로 의외로 수월하게 출발할 수 있었습니다.
Angular의 철학은 아직은 낮설고 구조도 복잡해 보이지만, 첫 단추는 생각보다 잘 꿰어진 느낌입니다.

다음 글에서는 컴포넌트를 직접 생성하면서 Angular의 흐름을 정리해볼 예정입니다.
