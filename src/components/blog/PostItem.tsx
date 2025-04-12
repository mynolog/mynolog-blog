import type { PostMeta } from '@/lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/utils/format'
import { ROUTES } from '@/constants/routes'
import { Calendar1, Watch } from 'lucide-react'

interface PostItemProps {
  post: PostMeta
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <li key={post.slug + post.date} className="w-full">
      <Link
        href={`${ROUTES.CATEGORY(post.category)}${ROUTES.BLOG_DETAIL(post.slug)}`}
        className="flex flex-col overflow-hidden rounded border border-gray-200 bg-white transition hover:shadow-lg dark:border-gray-700 dark:bg-black dark:shadow-gray-800"
      >
        <div className="relative aspect-[5/3] w-full overflow-hidden">
          <Image
            src={`/api/og?title=${encodeURIComponent(post.title)}`}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="linear object-cover transition-all duration-200 hover:scale-110"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-3">
          <div>
            <div className="flex h-full w-full items-center justify-between">
              <p className="flex items-center text-xs font-semibold text-gray-400">
                <Calendar1 className="h-4" />
                <span>{formatDate(post.date)}</span>
              </p>
              <p className="flex items-center text-xs font-semibold text-gray-400">
                <Watch className="h-4" />
                <span>{post.readingTime}분</span>
              </p>
            </div>
            <p className="md:text-md mt-1 truncate text-sm font-extrabold">
              {post.title}
            </p>
          </div>
          <p className="mt-2 truncate text-xs text-gray-600 md:text-xs">
            {post.description}
          </p>
        </div>
      </Link>
    </li>
  )
}
