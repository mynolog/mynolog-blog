'use client'

import Giscus from '@giscus/react'
import { useThemeStore } from '@/stores/themeStore'

export default function Comment() {
  const { theme } = useThemeStore()
  const REPO_ID = process.env.NEXT_PUBLIC_REPO_ID
  const CATEGORY_ID = process.env.NEXT_PUBLIC_CATEGORY_ID

  if (!REPO_ID || !CATEGORY_ID) {
    throw new Error('환경 변수 REPO_ID 또는 GISCUS_CATEGORY_ID가 정의되지 않았습니다.')
  }

  return (
    <Giscus
      id="comments"
      repo="mynolog/mynolog-blog"
      repoId={REPO_ID}
      category="General"
      categoryId={CATEGORY_ID}
      mapping="pathname"
      term="Welcom to the discussion"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      lang="ko"
      loading="lazy"
    />
  )
}
