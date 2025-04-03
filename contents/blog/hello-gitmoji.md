---
title: '(내가 보려고 작성하는) 자주 사용하는 gitmoji'
slug: 'hello-gitmoji'
date: '2025-01-11'
tags: ['gitmoji', 'emoji', 'git', 'workflow']
description: '자주 사용하는 gitmoji 모음입니다.'
---

## gitmoji 란

git과 emoji의 합성어로 이모지만으로 커밋의 목적이나 의도를 쉽게 파악할 수 있도록 작성된 가이드이다.

## gitmoji 사용 예시

```git
git commit -m "🎉 init: 프로젝트 초기화"
// 또는 vscode Gitmoji 확장 사용 시
git commit -m ":tada: init: 프로젝트 초기화"
```

나의 경우 다른 사람이 보더라도 커밋의 의미를 더 쉽게 파악할 수 있도록 아래와 같은 형태로 메시지를 작성한다.

```
emoji commit_type: message
```

## (내가) 자주 사용하는 gitmoji

| 이모지 | 코드         | 설명                       |
| ------ | ------------ | -------------------------- |
| 🎉     | `:tada:`     | 프로젝트 초기화            |
| ✨     | `:sparkles:` | 새로운 기능                |
| 💄     | `:lipstick:` | 스타일 파일 추가 또는 수정 |
| ♻️     | `:recycle:`  | 코드 리팩토링              |
| 🐛     | `:bug:`      | 버그 수정                  |
| 📝     | `:memo:`     | 문서 생성 또는 수정        |
| 🚀     | `:rocket:`   | 배포                       |

## 참고한 사이트

[Gitmoji](https://gitmoji.dev/)

[Inpa Dev: Gitmoji 사용법 정리 (+ 깃모지 툴 소개)](https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-Gitmoji-%EC%82%AC%EC%9A%A9%EB%B2%95-Gitmoji-cli)
