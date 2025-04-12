import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { ROUTES } from '@/constants/routes'
import Image from 'next/image'
import { formatDate } from '@/utils/format'

export default async function BlogPage() {
  const posts = getAllPosts('blog')

  return (
    <div className="flex w-full justify-center px-4">
      <ul className="mx-auto grid w-full max-w-[960px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug + post.date} className="w-full">
            <Link
              href={ROUTES.BLOG_DETAIL(post.slug)}
              className="flex flex-col overflow-hidden rounded border border-gray-200 bg-white transition hover:shadow-lg dark:border-gray-700 dark:bg-black dark:shadow-gray-800"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <Image
                  src={`/api/og?title=${encodeURIComponent(post.title)}`}
                  alt={post.title}
                  fill
                  className="linear object-cover transition-all duration-200 hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-3">
                <div>
                  <p className="mt-1 text-xs font-semibold text-gray-400">
                    {formatDate(post.date)}
                  </p>
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
        ))}
      </ul>
    </div>
  )
}
