---
title: '인프런 워밍업 클럽 3기 풀스택 - 3주차 발자국'
slug: '20250320-inflearn-warm-up-3-3'
date: '2025-03-20'
category: 'devlog'
thumbnail: '/images/blog/20250320-inflearn-warm-up-3-3/thumbnail.png'
tags: ['워밍업클럽', '3기', '발자국', '회고', '과제', '미션']
description: '인프런 워밍업 클럽 3기 3주차 발자국입니다.'
---

워밍업 클럽도 벌써 3주차!
처음 스터디를 시작할 때와 비교하면 가장 큰 소득은 `React Query`에 익숙해졌다는 것 그리고 무언가에 몰입하면서 성취감을 느꼈다는 것이다. 단순히 기능을 구현하는 걸 넘어서 최적화나 에러 핸들링까지 고민하는 과정이 꽤 재밌었다.

이번주에는 인피니트 쿼리와 추가 기능으로 좋아요 기능을 구현해야해서 지난주와 마찬가지로 조금 일찍 학습을 시작했다.
깃 레포는 역시 첫번째 과제에 사용했던 템플릿을 거의 수정없이 그대로 사용해서 역시나 개발환경 구축은 무리없이 진행했다.
다만, 한 가지 아쉬운 점이라면 터보레포 같은 모노레포 도구를 도입했어야 하지 않았나 하는 생각이 들었다는 점이다.
현재 방식은 각 주차별 과제를 독립적인 레포로 관리하고 있는데, 공통 유틸이나 자주 사용하는 설정 파일을 계속 복붙하는 과정에서 의외로 피로감을 느꼈다. 우선 마지막 과제까진 지금의 방식을 유지하고 스터디 마무리 이후에 터보 레포에 대해서는 개별적으로 학습을 해볼 예정이다.

### 📝 3주차 학습

#### useInfiniteQuery

- 무한 스크롤 및 페이지네이션을 위한 `React Query Hook`
- `fetchNextPage`를 사용해 추가 데이터 요청
- `getNextPageParams`로 다음 페이지 여부 관리

#### useInView

- `react-intersection-observer` 라이브러리 `Hook`
- 특정 요소가 화면에 보이는지 감지(뷰포트 진입 여부로 확인)
- 무한 스크롤 구현 시 `useInfiniteQuery`와 함께 사용
- `threshold`, `rootMargin`으로 감지 범위 조절 가능

---

### 📋 3주차 미션

![preview](/images/blog/20250320-inflearn-warm-up-3-3/01.png)

[💬 GitHub 저장소](https://github.com/mynolog/inflearn-warmup-3-3-my-reel)
[🚀 과제 시연 영상 보러가기](https://www.youtube.com/watch?v=o5BwgEixAbE)

---

#### 미션 해결 과정 요약

이번주 미션의 필수 구현 과제는 무한 스크롤과 SEO 추가, 영화 검색 기능 구현하기였다. 추가 기능으로 영화 좋아요 기능을 구현했는데, 예전에 SNS를 만들때 경험해봤던 기능이라 쉽게 구현할 수 있을 것이라 기대했다. 하지만 예상과는 달리, 유저 식별 기능이 없다는 점이 문제였다. SNS 좋아요 기능 구현 당시에는 사용자 ID 기반으로 좋아요를 관리했지만 이번 프로젝트는 익명 유저 환경이라 데이터를 어떻게 저장하고 관리할지 고민이 필요했다.

처음에는 movies, users, liked_movies 3개의 테이블을 생성하여 user_id, movies_id를 복합키로 설정해 브라우저별 익명 유저를 관리하는 방식을 시도했으나 구현 복잡도가 너무 높아지는 문제로 단순화하는 방식으로 변경했다.

movies 단일 테이블에 like_count 필드를 추가하고 브라우저별로 좋아요 상태를 관리하는 방식으로 해당 기능을 구현했다. 이 방식의 단점은 브라우저 변경 시 개인별 좋아요 리스트를 추적할 수 없다는 점이지만 애초에 유저 식별 기능을 배제한 상황에서 선택할 수 있는 최적의 방식이라고 판단하여 적용했다.

그리고 강의에서는 movies.id를 auto increment id로 구현했지만 더 나은 확장성을 위해서 uuid를 고려했다. 다만 uuid는 URL에서 사용하기 불편하여 가독성이 좋은 slug 칼럼을 별도로 추가하였다. API 요청 파라미터를 id에서 slug로 대체하면서 가독성과 SEO 최적화까지 함께 챙겨갈 수 있었다.

- slug 칼럼 추가

```sql
ALTER TABLE myreel_movies ADD COLUMN slug TEXT UNIQUE;
```

- 중복되는 Row 제거 (제공되는 DB에 중복되는 데이터가 9건 발견)

```sql
DELETE FROM myreel_movies
WHERE id NOT IN (
SELECT id
FROM (
SELECT id, title, order_index,
ROW_NUMBER() OVER (PARTITION BY title ORDER BY order_index ASC) AS row_num
FROM myreel_movies
) ranked
WHERE row_num = 1
);
```

- 영화 title 기준으로 slug 생성
- 예시 - 'Dune: Part Two' -> 'dune-part-two'

```sql
UPDATE movies
SET slug = LOWER(REGEXP_REPLACE(title, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL;
```

##### 미션 추가 구현 기능

##### ✅ 영화 좋아요 추가

`api/movies/:slug/like`

![like movie](/images/blog/20250320-inflearn-warm-up-3-3/02.png)

```typescript
const likeMovie = async () => {
  try {
    const res = await fetch(`${baseUrl}${API_ENDPOINTS.LIKE(slug)}`, {
      method: 'POST',
    })

    if (!res.ok) {
      throw new Error(CLIENT_ERROR.MOVIE_LIKE_FAILED.message)
    }

    const data: LikeMovieResponseDTO = await res.json()
    setLikeCount(data.like_count) // 서버에서 받아온 새로운 좋아요 수로 업데이트
    setIsLiked(true)

    // 로컬 스토리지에 영화 추가 또는 업데이트
    const likedMovies: LikedMovie[] = JSON.parse(
      localStorage.getItem('likedMovies') || '[]',
    )

    // 이미 좋아요를 누른 영화가 있다면, likeCount를 업데이트
    const existingMovieIndex = likedMovies.findIndex((movie) => movie.slug === slug)

    if (existingMovieIndex >= 0) {
      likedMovies[existingMovieIndex].likeCount = data.like_count // 좋아요 수 업데이트
    } else {
      // 좋아요를 누른 적이 없다면 새로 추가
      const newLikedMovie = { slug, likeCount: data.like_count }
      likedMovies.push(newLikedMovie)
    }

    localStorage.setItem('likedMovies', JSON.stringify(likedMovies))
  } catch (error) {
    console.error(error)
  }
}
```

##### ✅ 영화 좋아요 삭제

`api/movies/:slug/unlike`

![unlike movie](/images/blog/20250320-inflearn-warm-up-3-3/03.png)

```typescript
const unlikeMovie = async () => {
  try {
    const res = await fetch(`${baseUrl}${API_ENDPOINTS.UNLIKE(slug)}`, {
      method: 'POST',
    })

    if (!res.ok) {
      throw new Error(CLIENT_ERROR.MOVIE_UNLIKE_FAILED.message)
    }

    const data: LikeMovieResponseDTO = await res.json()

    setLikeCount(data.like_count)
    setIsLiked(false)

    // 로컬 스토리지에서 해당 영화 정보 삭제
    const likedMovies: LikedMovie[] = JSON.parse(
      localStorage.getItem('likedMovies') || '[]',
    )
    const updatedLikedMovies = likedMovies.filter((movie) => movie.slug !== slug)

    // 로컬 스토리지 갱신
    localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies))
  } catch (error) {
    console.error(error)
  }
}
```

##### 개별 챌린지 기능

##### ✅ 메인 페이지 최상단으로 가는 버튼 추가

- 메인 페이지에서 500px 이상 스크롤 내릴 경우 최상단으로 이동하는 버튼 생성
- behavior: 'smooth' 로 부드럽게 이동

##### ✅ 검색 결과 없을 경우, 좋아요 많은 순 추천 영화 6개 노출되는 기능 구현

- 좋아요가 많은 영화 외에도 최근 개봉한 영화 같은 다양한 리스트 제공 예정

`api/movies/most-liked`

![unlike movie](/images/blog/20250320-inflearn-warm-up-3-3/04.png)

---

### 👀 3주차 회고

지난주에 적용했던 매니져 컴포넌트 / UI 컴포넌트로 분리하는 방식이 `Container-Presentational Component 패턴` 과 유사한 방식이라는 것을 다른 러너분의 발자국을 통해 알게되었다. 궁금해서 조금 더 찾아보니, 이 패턴은 과거 클래스형 컴포넌트 시절에는 HOC(High Order Component)와 함께 많이 사용되었지만, 함수형 컴포넌트에서도 여전히 유효한 방식이라는 것을 알게되었다. 이번주에는 기존 패턴을 유지하면서도, 비즈니스 로직을 최대한 커스텀 훅으로 분리하는 연습을 진행했다. 이를 통해 컴포넌트의 역할을 더욱 명확하게 나누고, 재사용성과 유지보수성을 높이는 방향으로 조금씩 개선되고 있다는 것을 체감했다.

---

### 👻 배포 관련 이슈 (3월 22일 추가)

4주차에 스터디 기간 개발한 4개의 프로젝트를 모두 배포하는것이 기존 스터디 일정이지만.. 시간적 여유가 생겨서 1~3주차 프로젝트를 미리 배포해봤다. vercel은 기존에 사용하던 툴이었는데 한번에 3개의 프로젝트를 배포하려고 시도하는 과정에서 수 많은 에러를 경험했다. 4주차 프로젝트 배포시, 추후 다른 프로젝트 배포시에 참고할 수 있도록 간단하게 정리해본다.

##### ✅ @/components/... 앨리어스 관련 캐싱 이슈

##### 문제

- 개발 환경에서는 정상 작동하던 import가 Vercel 배포 시에만 Module not found 에러 발생

##### 원인

- Vercel의 캐싱 문제 또는 파일명 인식 관련 문제(대소문자, 내부 경로 변경 후 캐시 꼬임)

##### 시도한 방법

- @ 앨리어스 문제를 의심하여 상대 경로로 변경 후 재배포 시도 -> 해결 안됨
- 컴포넌트 경로의 대소문자 확인후 재배포 시도 -> 해결 안됨
- `Title.tsx` 파일명을 `AppTitle.tsx`로 변경하여 강제로 캐시 무력화 후 재배포 시도 -> 해결

##### ✅ params 비동기 처리 관련 타입 에러 (Next.js 15)

##### 문제

- `page.tsx`에서 params를 비동기적으로 처리하려 하자, params 타입이 Promise로 인식되어 타입 오류 발생

##### 원인 (깃헙 이슈 참고)

- params 타입이 `Promise<any>`로 추론되어 관련 에러 발생
- `PageParams` 제네릭 타입 해석 충돌
- `next dev`에서는 정상 작동하지만 `next build` 시 오류 발생

##### 시도한 방법

- params의 인터페이스를 명시적 타이핑 -> 해결 안됨
- params의 타입 any로 명시하고 타입 단언으로 처리 -> 해결 안됨
- 배포 시 안정성 확보를 위해서 Next.js 14 + React 18 버전으로 롤백 -> 해결

##### ✅ 환경 변수(NEXT_PUBLIC_BASE_URL) 미설정으로 fetch 실패

##### 문제

- 빌드 시 fetch 요청이 `localhost:3000`으로 날아가면서 `ECONNREFUSED` 에러 발생

##### 원인

- `Vercel` 환경 변수 설정 시 `NEXT_PUBLIC_BASE_URL` 값을 `localhost:3000`으로 설정하여 에러 발생

##### 시도한 방법

- 해당 환경 변수를 실제 배포 URL로 변경 후 재배포 시도 -> 해결
