import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/utils/format'
import 'highlight.js/styles/atom-one-dark.css'
import Comment from '@/components/ui/comment'
import { Calendar1, Watch } from 'lucide-react'

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = await getPostBySlug('blog', slug)

  return (
    <article className="prose w-full">
      <h1>{post.title}</h1>
      <div className="mb-2 flex w-full items-center justify-end gap-3 text-sm font-semibold">
        <p className="flex items-center gap-1 text-xs font-semibold text-gray-500">
          <Calendar1 className="h-4" />
          <span>{formatDate(post.date)}</span>
        </p>
        <p className="flex items-center gap-1 text-xs font-semibold text-gray-500">
          <Watch className="h-4" />
          <span>{post.readingTime}분</span>
        </p>
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {post.content}
      </ReactMarkdown>
      <div className="pt-6">
        <Comment />
      </div>
    </article>
  )
}
