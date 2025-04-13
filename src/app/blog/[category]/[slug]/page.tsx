import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/utils/format'
import 'highlight.js/styles/atom-one-dark.css'
import Comment from '@/components/ui/comment'
import { Calendar1, Watch } from 'lucide-react'
import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug('blog', slug)
  const imageUrl =
    post.thumbnail?.trim() || `/api/og?title=${encodeURIComponent(post.title)}`

  return {
    title: `${post.title} - mynolog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = await getPostBySlug('blog', slug)

  return (
    <article className="prose w-full">
      <h1>{post.title}</h1>
      <div className="mb-2 flex w-full items-center justify-end gap-3 text-sm font-semibold">
        <div className="flex items-center text-xs">
          <p className="flex items-center gap-1 font-semibold text-gray-500">
            <Calendar1 className="h-4" />
            <span>{formatDate(post.date)}</span>
          </p>
          <p className="flex items-center gap-1 font-semibold text-gray-500">
            <Watch className="h-4" />
            <span>{post.readingTime}분</span>
          </p>
        </div>
      </div>

      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {post.content}
      </ReactMarkdown>

      <div className="flex flex-col gap-3 pt-6 text-xs">
        <div className="flex flex-col gap-1">
          <span>Category</span>
          <Badge>{post.category}</Badge>
        </div>
        <div className="flex flex-col gap-1">
          <span>Tags</span>
          <div className="flex flex-wrap gap-1">
            {post.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
        </div>
      </div>

      <div className="pt-6">
        <Comment />
      </div>
    </article>
  )
}
