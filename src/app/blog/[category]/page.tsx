import type { Category } from '@/constants/posts'
import PostItem from '@/components/blog/PostItem'
import { getPostsByCategory } from '@/lib/posts'
import EmptyPosts from '@/components/blog/EmptyPosts'

interface BlogCategoryPageProps {
  params: Promise<{ category: Category }>
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category } = await params

  const filteredPosts = getPostsByCategory('blog', category)
  return (
    <div className="flex w-full flex-col justify-center px-4">
      {filteredPosts.length === 0 ? (
        <EmptyPosts />
      ) : (
        <ul className="mx-auto grid w-full max-w-[960px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostItem post={post} key={post.slug} />
          ))}
        </ul>
      )}
    </div>
  )
}
