import CategoryTabs from '@/components/blog/CategoryTabs'
import { countPostsByCategory, getAllPosts } from '@/lib/posts'

export default function BlogPageLayout({ children }: { children: React.ReactNode }) {
  const posts = getAllPosts('blog')
  const counts = countPostsByCategory(posts)

  return (
    <div className="flex w-full flex-col">
      <CategoryTabs counts={counts} />
      {children}
    </div>
  )
}
