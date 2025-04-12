import CategoryDropdown from '@/components/blog/CategoryDropdown'
import CategoryTabs from '@/components/blog/CategoryTabs'
import { countPostsByCategory, getAllPosts } from '@/lib/posts'

export default function BlogPageLayout({ children }: { children: React.ReactNode }) {
  const posts = getAllPosts('blog')
  const counts = countPostsByCategory(posts)

  return (
    <div className="flex w-full flex-col">
      <div className="hidden sm:block">
        <CategoryTabs counts={counts} />
      </div>

      <div className="block sm:hidden">
        <CategoryDropdown counts={counts} />
      </div>
      {children}
    </div>
  )
}
