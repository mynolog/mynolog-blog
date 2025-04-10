---
title: '인프런 워밍업 클럽 3기 풀스택 - 1주차 발자국'
slug: 'inflearn-warm-up-3-1'
date: '2025-03-07'
tags: ['워밍업클럽', '3기', '발자국', '회고', '과제', '미션']
description: '인프런 워밍업 클럽 3기 1주차 발자국입니다.'
---

인프런 워밍업 클럽 3기 풀스택 과정을 시작하고 정신 차려보니 벌써 금요일이 되었다.
1주차는 본격적으로 Next.js를 다루기 위한 워밍업 단계라고 생각한다. 이번주는 개발 환경을 어떻게 구축하는지와 Next.js의 주요 기능 등을 빠르게 학습했다. 또한, `React Query`, `Recoil` 같은 상태 관리 라이브러리의 기본적인 사용 방법을 익혔다.
과제의 경우, 먼저 주어진 필수 과제를 위주로 최대한 완성하고, 추가 기능을 구현하는 데 집중하면서 동시에 UI와 UX를 개선하는 것까지를 이번주 목표로 삼아 보다 완성도 높은 결과물을 만들려고 노력했다.

### 📝 1주차 학습

#### Supabase

- NoSQL 기반의 `Firebase`의 대체제로, `PostgreSQL` 기반의 BaaS를 제공하는 플랫폼
- 서버리스 환경에서 빠르게 백엔드를 구축할 수 있도록 지원
- DB, 인증, 스토리지, 실시간 기능, 서버리스 함수, 관리 대시보드 지원

#### Next.js

- 풀스택 개발에 최적화된 `React` 기반 프레임워크
- SSR(Server Side Rendering), SSG(Static Site Generator)를 지원
- API 라우트 기능을 제공하여 별도의 백엔드 서버 없이도 간단한 API 기능 수행
- 이미지 최적화, 자동 코드 분할을 지원하여 개발 생산성을 높임
- 서버 액션을 지원하여 API 라우트 없이도 클라이언트에서 서버 코드 호출 가능
- 레이아웃 또는 컴포넌트별로 메타 데이터 설정 가능

#### TailwindCSS

- Utility-First CSS 프레임워크
- 미리 정의된 클래스를 조합하여 스타일을 적용하는 방식 (tailwind.config.ts에서 커스텀 클래스 정의 가능)
- JIT(Just-In-Time) 컴파일을 지원하여 실제로 사용된 클래스만 포함하여 CSS 파일 크기 최적화 적용
- 반응형 디자인 지원(sm:, md:, lg: 등)
- 다크 모드 및 테마 설정 지원(dark: )
- 공식 및 커스텀 플러그인을 활용하여 다양한 추가 기능 제공

#### React Query(Tanstack Query)

- 데이터 패칭, 캐싱, 동기화 등을 쉽게 관리할 수 있게 도와주는 React 라이브러리로 주로 서버 상태 관리 용도로 사용
- 자동 데이터 패칭, 자동 캐싱, 자동 리패칭을 제공하여 API 서버 호출을 최소화로 관리
- Mutation을 통한 데이터 수정
- 쿼리 무효화를 통해 데이터를 최신 상태로 유지

#### Recoil

- React 상태 관리 라이브러리로 Context API보다 유연하고 확장성 있는 방법을 제공
- 전역 상태 관리, 컴포넌트 간 상태 공유, 파생 상태 계산, 비동기 작업 처리 기능 제공
- 2025.3.7 기준 약 2년간 업데이트가 이루어지지 않고 있기 때문에, Zustand, Jotai, RTK 등의 대체 라이브러리 추천

---

### 📋 1주차 미션

[💬 GitHub 저장소](https://github.com/mynolog/inflearn-warmup-3-1-todos)
[🚀 과제 시연 영상 보러가기](https://youtu.be/dMRzbDt6sh0?si=OWkyggfobek9yS7F)

---

#### 미션 해결 과정 요약

1주 차 미션은 Next.js와 React Query 그리고 TailwindCSS를 사용하여 Todo List 앱 만들기였다. 기본적인 CRUD 기능을 구현하는 과제로, 목표 추가, 목표 수정, 완료 표시, 삭제 등의 작업을 통해 상태 관리와 비동기 데이터 처리를 익히는데 워밍업 미션으로 아주 적합하다고 생각한다. 강의에서 구현한 Todo List를 기반으로 앱을 구현하면서 총 세 가지에 초점을 맞춰서 진행하였다.

##### CSS Transition을 사용하여 UX 개선

- CSS Transition을 활용하여 인터페이스의 상호작용을 부드럽고 직관적으로 처리한다.

##### 스켈레톤 UI를 적용하여 UI와 UX 개선

- 초기 렌더링 시 목표 리스트가 출력되는 부분에 스켈레톤 UI를 적용하여, 어느 부분에 컨텐츠가 표시될지에 대한 명확한 시각적 피드백 제공한다.

##### React Query 캐싱과 디바운스를 활용하여 불필요한 API 호출 감소

- 초기 렌더링 시 데이터를 패칭하는 부분과 키워드 검색 시 데이터 패칭하는 부분이 동일한 액션을 공유하여 키워드 입력 시마다 불필요한 데이터 패칭이 지속적으로 이루어지는 문제를 인지했다.

```typescript
export async function getTodos(): Promise<TodoRow[]> {
  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) {
    handleError(error)
  }
  return data ?? []
}
```

해당 로직의 문제점은 키워드 입력시마다 즉시 API 요청이 발생하여 검색 결과가 매번 새로고침되는 증상을 발견하였고 키워드 검색 시 디바운스를 적용하여 의도적으로 API 요청을 지연시켜서 약간의 API 요청 감소 효과가 발생하였다.

```typescript
const [searchInput, setSearchInput] = useState('')
const [debouncedSearchInput, setDebouncedSearchInput] = useState('')

// 검색어 입력 디바운스
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearchInput(searchInput)
  }, 600)

  return () => clearTimeout(timer)
}, [searchInput])
```

의도적으로 600ms의 딜레이를 발생시켰음에도 여전히 검색 시 마다 API 요청이 발생하여, 키워드 입력 시마다 스켈레톤 UI가 표시되어 개선 방법을 고민하던 중에 키워드 검색 기능과 데이터 패칭 액션 기능을 분리시키기로 결정했다.

```typescript
const filteredTodos = todosQuery.data?.filter((todo) =>
  todo.title.toLowerCase().includes(debouncedSearchInput.toLowerCase()),
)
```

결론적으로 초기 렌더링 시 Todo List 데이터 패칭 액션으로 호출하는 방식으로 유지하고, 키워드 검색 기능은 캐싱된 데이터를 별도로 필터링하는 로직으로 분리하여 불필요한 API 요청이 감소하는 효과를 가져왔다.

---

#### 👀 1주 차 회고

시작부터 다사다난한 일주일을 보냈다. 그동안 사용했던 `Next.js`는 사실 `React`에 더 가까운 구조였음을 알게되었다. 다시 시작하는 마음으로, 틈틈이 이번주에 학습한 내용을 복습하고 복기하는 과정을 반복해야겠다.
이번 워밍업 클럽에서 내가 이루고싶은 목표는 `Next.js`의 심화 기능을 익히는 것과 신경을 많이 쓰지 않았던 UI와 UX 개선에 힘쓰는 것이다.
스켈레톤 UI, CSS 트렌지션, 캐싱을 활용한 API 호출 최소화 등을 적용한다던지 Suspense, Optimistic UI 등을 이번 워밍업 클럽 과제와 접목하여 실제 프로젝트에 적용해 볼 계획이다.
