import type { Metadata } from 'next'
import PostItem from '@/components/blog/PostItem'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'blog - mynolog',
  description: 'mynolog의 블로그 페이지입니다.',
}

export default async function BlogPage() {
  const posts = getAllPosts('blog')

  return (
    <div className="flex w-full flex-col justify-center px-4">
      <ul className="mx-auto grid w-full max-w-[960px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostItem post={post} key={post.slug} />
        ))}
      </ul>
    </div>
  )
}
