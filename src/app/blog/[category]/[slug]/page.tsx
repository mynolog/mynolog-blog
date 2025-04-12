import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/utils/format'
import 'highlight.js/styles/atom-one-dark.css'
import Comment from '@/components/ui/comment'

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = await getPostBySlug('blog', slug)

  return (
    <article className="prose w-full">
      <h1>{post.title}</h1>
      <p className="flex w-full justify-end text-sm font-semibold">
        {formatDate(post.date)}
      </p>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {post.content}
      </ReactMarkdown>
      <div className="pt-6">
        <Comment />
      </div>
    </article>
  )
}
