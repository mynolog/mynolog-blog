---
title: '인프런 워밍업 클럽 3기 풀스택 - 4주차 발자국'
slug: '20250330-inflearn-warm-up-3-4'
date: '2025-03-30'
category: 'devlog'
thumbnail: '/images/blog/20250330-inflearn-warm-up-3-4/thumbnail.png'
tags: ['워밍업클럽', '3기', '발자국', '회고', '과제', '미션']
description: '인프런 워밍업 클럽 3기 4주차 발자국입니다.'
---

3주차 과제를 일찍 마무리하고 4주차는 조금 일찍 학습을 시작했기 때문인지 유난히도 길었던 마지막 주차도 끝나간다.
이번주는 특히나 굉장히 많은 이슈를 경험했다. 결론부터 말하자면 채팅방 생각보다 구현하기 쉽지 않았다. 간단하게 하나만 언급하자면 URL로 장난질 치는 것에 대한 방어로직 구현이 특히 어려웠다. 사실 예전에 firebase 기반으로 미니 SNS를 구현했던 경험이 있는데 이번에 채팅을 구현했으니 이 프로젝트를 그대로 고도화해서 SNS를 완성해볼 계획이다. (실제로 완성할 수 있을지는...)

### 📝 4주차 학습

#### Supabase Auth

- 이메일/비밀번호, OAuth, Magic Link, SMS 인증 등 다양한 인증 방식을 지원하는 인증 서비스
- `supabase.auth.signUp`, `signInWithOAuth`, `getUser()` 등으로 유저 관리와 세션 제어가 가능
- JWT 기반으로 RLS와 연동되며, 로그인 상태 자동 유지 및 세션 갱신 기능도 제공

#### Supabase Realtime

- `PostgreSQL`의 Listen, Notify 기능을 기반으로 실시간 데이터 동기화 제공
- 테이블 변경(Insert, Update, Delete)을 클라이언트에서 실시간으로 브로드캐스트
- `supabase.channel()`로 원하는 이벤트를 구독

#### Supabase RLS(Row Level Security)

- 데이터베이스의 행(Row) 단위로 접근 제어를 설정하는 보안 기능
- Create Policy를 적용하여 유저별로 조회/ 수정 권한을 세밀하게 조정
- 활성화 시 명시적인 권한 정책 필수

##### 아래는 개인적으로 나머지 공부로 학습하고 적용해본 라이브러리입니다.

#### Zod

- TS 환경에서 런타임 스키마 검증과 타입 추론을 제공하는 유효성 라이브러리
- `z.object()` 등 메서드로 구조화된 데이터의 유효성 검사 수행 및 타입 자동 생성
- 서버 및 클라이언트 모두에서 안전한 폼 및 API 검증에 활용
- `React Hook Form`과 함께 사용하기 유용한 라이브러리

#### React Toastify

- 토스트 메시지를 손쉽게 띄울 수 있는 라이브러리
- 간단한 API로 다양한 유형의 토스트 알림 제공
- 강력한 커스터마이징 제공

#### Ky

- `Fetch API` 기반의 모던한 HTTP 클라이언트
- 간결한 문법 제공
- 자동 재시도, 에러 핸들링, 인터셉터 등 확장성과 다수의 편의 기능 포함

---

### 📋 3주차 미션

![preview](/images/blog/20250330-inflearn-warm-up-3-4/01.png)

[💬 GitHub 저장소](https://github.com/mynolog/inflearn-warmup-3-4-my-on)
[🚀 배포 주소](https://myon.mynolog.me/)

---

#### 미션 해결 과정 요약

이번주 미션의 필수 구현 과제는 Supabas Auth를 사용한 회원가입, 로그인 기능 구현 및 Supabase Realtime을 활용한 1:1 채팅 기능 구현하기였다. 추가 구현 과제는 메시지 삭제, 메시지 알림, 메시지 읽음 여부 표시, 채팅 신고, 유저 차단 기능 등 자유롭게 구현하기였는데 시간 관계 상 전부 구현하긴 어려워서 비교적 쉬운 메시지 삭제와 메시지 알림을 제한적으로 구현했다. 원래는 DB 스키마를 꼼꼼하게 고민하고 시작했어야하는데 급하게 하다보니 처음 계획했던 내용과 많이 달라졌다.

`myon_users.id -> auth.users.id`

Supabase Auth로 회원가입된 유저만 등록 가능

`myon_rooms.userA_id -> myon.users.id`
`myon_rooms.userB_id -> myon.users.id`

회원가입된 유저만 채팅에 참여 가능

`myon_messages.sender_id -> myon_users.id`

회원가입된 유저만 채팅 전송 가능

`myon_rooms.last_message_id -> myon_messages.id`

가장 최근 메시지 미리보기 시 테이블 join에 활용

`myon_users.username`

회원가입 시 입력한 닉네임을 기반으로 한글과 특수 문자 등을 제거한 후 중복 발생 시 유틸함수를 통해서 suffix를 불여서 고유한 username을 자동 생성 e(회원가입 시 입력 폼의 간소화를 위한 선택)

![erd](/images/blog/20250330-inflearn-warm-up-3-4/02.png)

##### ✅ 이메일 로그인, 회원가입

`GET app/auth/signup/callback`
`POST api/user/email/register`

##### ✅ OAuth 로그인, 회원가입

`GET app/auth/oauth/kakao/callback`
`POST api/user/oauth/register`

우선 회원 기능부터 만들기 시작했는데 강의 패턴을 참고하여 자동 생성되는 auth.users 테이블만 사용하여 회원 로직을 만들었는데 메타 데이터의 형태가 provider 별로 일정하지 않고.. 무엇보다도 auth.users 테이블은 커스텀이 제한적이기 때문에 public.users 테이블을 별도로 관리하였다. 카카오 계정 로그인의 경우 user_metadata를 커스텀 인터페이스로 관리하여 타입 오류를 방지하였다. 또한 auth.users 테이블만 단독 사용시의 문제는 회원가입 단계에서 사전에 이메일 중복 검증이 어렵다는 점도 단점이었다. 찾아보니 보안상의 이유로 Supabase 내부적으로 auth.users 테이블을 직접 조회하는 기능은 별도로 제공하지 않아서 가입 요청 후에 에러를 캐치할 수 있는 구조이기 때문에 이부분도 public.users를 조회하여 이메일 중복 검증을 통과한 경우에만 회원가입 요청을 할 수 있도록 처리했다. 회원가입이나 로그인 인풋 유효성 검증은 Zod + react-hook-form 라이브러리도 대체했다.

##### ✅ 이메일 회원가입

![email signup](/images/blog/20250330-inflearn-warm-up-3-4/03.png)

##### ✅ 이메일 로그인

![email login](/images/blog/20250330-inflearn-warm-up-3-4/04.png)

##### ✅ 1:1 채팅

`POST, GET api/rooms/[roomId]`
`POST api/messages`
`GET api/messages/[roomId]`

문제는 채팅 기능 구현이었는데 채팅 기능 자체는 Realtime 구독으로 어렵지않게 완성했으나 문제는 방어로직 구현이었다. 몇 가지 예시를 들자면 `/direct-message` 로 접근 시에 해당 페이지에서 나 자신을 제외한 모든 유저 리스트를 불러온 뒤, `/direct-message/:roomId` 로 동적 라우트를 구현할 때, 처음에는 고유성을 보장하기 위해서 `userA_username-userB_username-suffix` 형태로 `roomId`를 생성하는 유틸 함수를 사용했는데 렌더링 시 마다 suffix가 변동되기 때문에 서버단에서 해당 URL이 유효한 URL인지 검증하기가 쉽지 않아서 `userA_username`과 `userB_username`을 정렬하여 항상 동일한 `roomId`를 생성하는 순수 유틸 함수로 변경하여 해당 문제를 해결하였다.

```typescript
export function generateRoomId({
  usernameA,
  usernameB,
}: {
  usernameA: string
  usernameB: string
}) {
  const sortedUsernames = [usernameA, usernameB].sort()

  return `${sortedUsernames[0]}-${sortedUsernames[1]}`
}
```

##### 미션 추가 구현 기능

##### ✅ 메시지 삭제(Soft Delete)

`PATCH api/message/[messageId]`

메시지 삭제는 두가지 방식이 있는데 `DELETE` 메서드를 사용하여 DB Row에서 아예 삭제하는 하드 삭제와 실제 DB Row에서 삭제하지 않지만 `is_delete` 같은 플래그를 `true`로 설정하여 하여 클라이언트단에서 감추는 방식인 소프트 삭제 방식이 있다. 하드 삭제의 경우 DB 공간 절약이 필요하거나 탈퇴 회원 정보 등 영구 삭제가 필요한 경우에 적합하고 소프트 삭제의 경우는 복구가 필요하거나 삭제 이력을 추적해야하는 경우에 적합한데 채팅은 로그를 남기는게 중요해서 개인적으로는 소프트 삭제로 구현했다.

##### ✅ 메시지 호버 시 삭제 아이콘 표시

![soft delete](/images/blog/20250330-inflearn-warm-up-3-4/05.png)

##### 개별 챌린지 기능

##### ✅ 메시지 알림(토스트 메시지 활용)

`별도 API route 없이 구독으로 구현`

그냥 마무리하기 아쉬워서 추추가 기능으로 구현했다. 예전부터 토스트 메시지에 관심이 많았는데 직접 구현해보니 생각보다 비효율적이라서 `react-toastify` 라는 라이브러리를 적용했다.
토스트 메시지는 스크롤이 최하단이 아닌 지난 메시지를 읽고 있을때만 우측 상단에 스택 형태로 알림을 보내도록 구현했다.

![message notification](/images/blog/20250330-inflearn-warm-up-3-4/06.png)

---

### 👀 4주차 회고

이번 주는 지난 스터디 기간 동안 진행했던 프로젝트를 배포하는 과정이 포함되어 있었기 때문에, 추가적인 기능보다는 안정적인 배포에 중점을 둘 계획이었으나.. 다행히도 지난주에 미리 매를 맞아두었기 때문에 이번 주 과제 배포는 크게 문제 없이 마무리할 수 있었다.

다만 실제 배포 경험이 많지 않다 보니 환경 변수 관련 이슈를 자주 겪게 되었고, OAuth Redirect URL 설정 누락, 빌드 시 타입 오류 등의 경험으로 배포 시 고려해야 할 요소들을 더 잘 이해하게 되었다. 앞으로는 다른 프로젝트 배포 시 참고할 수 있도록 트러블슈팅 내역을 꼼꼼하게 정리하는 습관을 들일 계획이다.

이번주에 과제를 진행하면서 딱 한가지 아쉬웠던 점이라면 2주차부터 꾸준히 적용해오던 `Container-Presentational Component` 패턴을 이번에는 적용시키지 못했다는 점이다. 이번주 과제가 전반적으로 복잡도가 높다보니 관심사 분리를 코드에 녹여내지 못했으나 점진적으로 리팩토링을 통해서 개선해나가기 위해서 백로그에 기록해두었다.

---

### 👻 스터디 이후..

이번에 구현한 채팅 기능은 실제 배포를 해보니 전송 시 약간의 딜레이가 발생하는 것을 발견했다. 지금 타이밍에서 메시지 전송에 대한 낙관적 업데이트를 적용해서 최적화하는것이 가장 시급한 과제라고 생각한다.
끝으로 이번 프로젝트는 이후에 포트폴리오로 활용할 수 있도록 고도화 작업을 이어갈 생각이며, 동시에 타입스크립트에 대한 이해를 더 심화시키고, 쉽진 않겠지만 최근 관심이 생긴 테스트 코드 작성 관련 학습도 병행해나가 보려 한다.
