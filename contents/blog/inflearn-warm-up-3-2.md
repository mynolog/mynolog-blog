---
title: '인프런 워밍업 클럽 3기 풀스택 - 2주차 발자국'
slug: 'inflearn-warm-up-3-2'
date: '2025-03-13'
category: 'devlog'
thumbnail: '/images/blog/inflearn-warm-up-3-2/thumbnail.png'
tags: ['워밍업클럽', '3기', '발자국', '회고', '과제', '미션']
description: '인프런 워밍업 클럽 3기 2주차 발자국입니다.'
---

인프런 워밍업 클럽 스터디에 참여하고 벌써 2주 차도 마무리에 접어들고 있다. 4주간의 스터디이기 때문에 생각보다 일정이 타이트하여 시간관리가 무엇보다도 중요한 시기라고 생각한다.
이번 주에는 파일 업로드 기능을 구현해야하기에 1주 차 과제를 급하게 마무리하고 지난주 토요일부터 서둘어서 미리 학습을 시작했다.
깃 레포지토리의 경우에는 지난주에 사용했던 템플릿을 거의 수정없이 그대로 사용해서 개발환경 구축은 크게 어렵지 않았다.
이번 주 강의에서는 `Supabase Storage`를 사용했는데 API가 잘 준비되어있어서 사용 방법을 익히는데도 크게 어렵지는 않았다. 다만 아래에서도 언급하겠지만 `Supabase Storage`는 `AWS S3` 기반으로 구현되어 강력한 네이밍 규칙이 적용되어 개인적으로는 `Supabase Storage`와 `Supabase DB`를 함께 사용했다.

### 📝 2주차 학습

#### Supabase Storage

- 클라우드 기반 객체 저장소로, AWS S3와 유사한 방식으로 파일을 저장하고 관리하는 서비스
- 파일 및 이미지 업로드 및 관리 기능 제공
- PostgreSQL과 연동 가능
- 권한 관리(RLS) 및 퍼블릭/프라이빗 파일 설정 가능
- Supabase SDK 또는 Restful API로 사용 가능 ✔ 파일명 규칙 (Supabase & AWS 공통)
  - ASCII 문자, 숫자, 일부 특수 문자 허용 (- \_ . /)
  - 파일명을 /로 구분하여 폴더처럼 사용 가능 (folder/image.png)
  - 공백 포함 가능하지만, URL Encoding이 필요할 수 있음
  - 파일명에 한글, 이모지, 특수문자가 포함될 경우 정상적으로 업로드되지 않을 가능성이 있음 → URL-safe 변환 권장

#### Supabase Dropzone

- React에서 간편하게 파일 Drag & Drop 기능을 구현할 수 있는 라이브러리
- HTML5 File API를 활용하여 파일 업로드를 쉽게 구현할 수 있는 기능을 제공
- 파일 타입, 크기, 개수 등 다양한 제약 조건 설정 가능
- 비동기로 파일을 처리할 수 있는 onDrop 이벤트 제공

---

### 📋 2주차 미션

![preview](/images/blog/inflearn-warm-up-3-2/01.png)

[💬 GitHub 저장소](https://github.com/mynolog/inflearn-warmup-3-2-my-drop)
[🚀 과제 시연 영상 보러가기](https://www.youtube.com/watch?v=unFhnRKPQY0)

---

#### 미션 해결 과정 요약

2주 차 미션은 Next.js, React Query, TailwindCSS를 사용하여 이미지 업로드 앱을 구현하기였다. 필수 구현 기능으로는 이미지 업로드 기능(클릭 업로드 방식과 Drag & Drop 방식, 다중 업로드)과 이미지 삭제와 이미지 검색 기능 구현하기였다. 추가 기능은 파일의 마지막 수정 시간을 화면에 출력하는 UI 구현하기였다. 여기에 과제의 완성도를 높이기 위해서 개인적인 챌린지로 파일명에 한글 또는 특수문자 포함된 파일 업로드 기능, 1MB 미만으로 이미지를 압축하는 기능, 다운로드 기능을 추가로 구현하였다.

##### 미션 추가 구현 기능

##### ✅ 마지막 수정 시간 표시

```typescript
const { error: insertError } = await supabase.from(DB_TABLE_NAME).insert({
  name: file.name,
  originalName: originalFileName,
  imageId: uploadedFile.id,
  imageUrl: publicUrl,
  createdAt: new Date(file.lastModified).toISOString(),
})
```

- 생성: DB에 파일 데이터 업로드 시 createdAt에 file.lastModified를 ISOString 형식으로 저장

```typescript
if (dbData) {
  const { error: updateError } = await supabase
    .from(DB_TABLE_NAME)
    .update({
      name: file.name,
      originalName: originalFileName,
      imageUrl: publicUrl,
      updatedAt: new Date().toISOString(),
    })
    .eq('imageId', uploadedFile.id)
}
```

- 수정: DB에 해당 ID가 존재할 경우 updatedAt(string | null)에 현재 시간을 ISOString 형식으로 저장

```typescript
// DropImageManager 컴포넌트에서 생성 시간, 수정 시간을 포멧팅하여 DropImage 컴포넌트에 프롭스로 전달
const localCreatedAt = getLocalTime(image.createdAt)
const localUpdatedAt = image.updatedAt ? getLocalTime(image.updatedAt) : null
```

```typescript
 <div className="w-5/6 truncate">
    <span
       className={`text-[0.7rem] font-semibold ${localUpdatedAt ? 'text-mint-800' : 'text-gray-500'}`}
    >
       {localUpdatedAt ? localUpdatedAt : localCreatedAt}
    </span>
    {localUpdatedAt && (
    <span className="text-[0.7rem] font-semibold text-mint-800"> (수정)</span>
    )}
 </div>
```

- 출력: updatedAt이 존재할 경우 updatedAt과 (수정) 을 함께 출력, updatedAt: null이라면 createdAt를 출력

##### 개별 챌린지 기능

##### ✅ 파일명 자동 변환 후 이미지 업로드하는 기능을 구현 (UX 개선)

- 파일명 검증: 정규식을 활용하여 한글 및 특수 문자 포함 여부를 확인
- 자동 변환: 검증 후 8자리 랜덤 문자열로 안전한 파일명 생성
- 업로드 처리: 변환된 파일명으로 File 객체 생성 후 formData.append로 원본 파일명 함께 전송
- 서버 액션: Supabase Storage에 저장 후, 완료 시 DB에 메타데이터 저장하여 연동
- 결론: 파일명 변환을 자동화하여 업로드 오류를 방지하고, 원본 파일명도 유지하여 검색 및 관리 UX 개선

##### ✅ 파일 용량이 1MB 초과 시 자동 압축 후 업로드하는 기능을 구현 (UX 개선)

- browser-image-compression 라이브러리를 사용하여 파일의 용량 검증 후 1MB 초과 시 이미지 압축 후 업로드
- 결론: 이미지 최적화로 업로드 속도 향상, 스토리지 비용 절감 효과

##### ✅ Blob URL을 활용한 다운로드 기능 추가 (UX 개선)

- Blob URL 생성: 업로드된 이미지를 fetch()로 가져와 Blob으로 변환
- 다운로드 기능 구현: window.URL.createObjectURL(blob)으로 브라우저에서 직접 다운로드 가능하도록 처리
- 결론: Blob URL 다운로드 방식을 적용하여 최적화된 이미지를 빠르게 다운로드 받을 수 있도록 개선

##### 🚧 기능 구현 시 어려웠던 부분

- Supabase Storage에 전달하는 File 객체 커스텀 불가
  - 원본 파일명을 추가하려 했으나, File 객체 자체를 수정하는 것이 제한적이다.
- 파일 객체를 복사하여 원본 파일명을 추가하는 방법 시도
  - 전개 연산자를 사용하여 객체 복사 후 원본 파일명을 추가하려 시도하였으나 file 객체는 일반적인 방법으로는 복사할 수 없는 특별한 객체이다.
- ExtendedFile 확장 클래스로 인스턴스를 생성했으나 서버에 전달되지 않는 문제 발생
  - 확장된 ExtendedFile 객체를 formData에 담아 서버로 전송했지만, 서버에 정상적으로 전달되지 않았다.
- 최종 해결 방법

```typescript
formData.append("file", file)
formData.append("originalFileName, file.name)
```

file 객체와 원본 파일명을 함께 서버로 전송 후 가공하여 Supabase Storage의 파일명에는 안전한 파일명만 저장하고 DB에 스토리지Id, 원본 파일명, 안전한 파일명, 이미지URL 등 정보를 저장했다.

![erd](/images/blog/inflearn-warm-up-3-2/02.png)

---

### 👀 2주차 회고

아직 갈 길이 멀지만, 리팩토링을 통해 Next.js의 장점을 살릴 수 있는 구조로 점점 개선되어가는 과정을 경험하면서 이번 주 역시 알차게 보냈다고 생각한다.
이번 주는 특히 MVP 패턴과 비슷한 형태로 컴포넌트 구조를 잡는 것에 익숙해지는 것을 개인적인 목표로 삼았다. 처음부터 MVP 패턴을 염두해 두고 설계한 것은 아니었지만, 진행하다보니 자연스럽게 MVP와 유사한 패턴으로 정리되어 가는 것을 느꼈다.
화면 렌더링 시 상호작용이 필요하지 않은 정적인 요소들까지 클라이언트 컴포넌트로 관리하면 불필요한 하이드레이션 부담이 증가할 수 있다는 점을 다시 한번 체감했다.

클라이언트 컴포넌트 내에서도 역할을 나눠 서비스 레이어나 상태 관리만 담당하는 매니져 컴포넌트와 프롭스로 상태를 전달받아 단순히 화면을 렌더링을 담당하는 UI 컴포넌트로 분리하는 연습을 진행했다.
이러한 구조로 개선하면서 클라이언트 컴포넌트의 부담을 줄이고, 유지보수성을 높이는 방향으로 점차 최적화되고 있다는 점이 느껴졌다. 아직 개선해야 할 부분이 많지만 점진적으로 개선하여 더 나은 아키텍쳐를 만들어가는 과정이 의미 있었다고 생각한다.
