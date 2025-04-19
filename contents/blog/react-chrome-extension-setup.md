---
title: 'React + Vite로 크롬 확장 개발하기 (셋업)'
slug: 'react-chrome-extension-setup'
date: '2025-04-19'
category: 'react'
thumbnail: ''
tags: ['vite', 'manifest', 'chrome-extension']
description: 'React + Vite를 다뤄본 사람이라면 누구나 쉽게 따라할 수 있는 크롬 확장 개발 세팅 가이드입니다.'
---

해당 게시글은 React, TypeScript 기준으로 작성되었으며 적용 버전은 아래와 같습니다.

```json
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.26.1",
    "vite": "^6.3.1"
  }
```

사이드 프로젝트로 간단한 포모도로 타이머를 만들다가, 크롬 확장으로 배포해보고 싶어졌습니다. 찾아보니 구조는 거의 그대로 유지하면서 `manifast.json`만 추가하면 되는 수준이라 그 과정을 정리해봅니다.

#### 1. manifest.json 파일 생성

`public` 디렉토리에 `manifest.json` 파일을 생성하고 아래 내용을 참고하여 작성합니다.

```json
// public/manifest.json
{
  "manifest_version": 3, // 현재 사용하는 manifest 버전 (2025.04 기준 크롬 권장 버전)
  "name": "rundoro", // 확장 프로그램 이름 (크롬 스토어 또는 툴바에서 표시될 이름)
  "version": "0.0.1", // 확장 프로그램 버전 (배포 시마다 버전 업 필수)
  "description": "A minimal Pomodoro timer to help you stay focused.", // 확장 프로그램의 간단한 소개 문구 (배포 시 필수)
  "action": {
    "default_popup": "index.html" // 확장 프로그램 아이콘을 클릭했을때 표시할 팝업 UI 파일을 지정 (보통 React 앱의 진입점으로 연결)
  }
}
```

#### 2. React 앱 빌드

```bash
pnpm run build
# 또는
# npm run build
# yarn run build
```

빌드 완료 시, 프로젝트 루트에 `dist` 디렉토리가 생성되고, `index.html`과 함께 정적 파일이 생성됩니다.

#### 3. 크롬에 확장 프로그램 등록

- 크롬 주소창에 `chrome://extensions/` 입력
  ![크롬_확장_설정_페이지](/images/blog/react-chrome-extension-setup/01.png)
- 오른쪽 상단 `개발자 모드: On`으로 변경
  ![크롬_확장_설정_페이지_개발자_모드](/images/blog/react-chrome-extension-setup/02.png)
- 왼쪽 상단 `압축해제된 확장 프로그램을 로드합니다.` 버튼 클릭
- `/dist` 디렉토리 선택
  ![크롬_확장_설정_페이지_앱_추가](/images/blog/react-chrome-extension-setup/03.png)

크롬 확장 프로그램은 어떻게 개발할까 항상 궁금했었는데 실제로 적용해보니 React + Vite 프로젝트로 가볍게 시작할 수 있습니다.
간단한 사이드 프로젝트를 확장 프로그램으로 배포해보고 싶은 분들께 도움이 되었으면 좋겠습니다.
