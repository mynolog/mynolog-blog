import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { ROUTES } from '@/constants/routes'
import Image from 'next/image'

export default async function BlogPage() {
  const posts = getAllPosts('blog')

  return (
    <div className="flex w-full justify-center px-4">
      <ul className="mx-auto grid w-full max-w-[960px] grid-cols-1 place-items-start gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug + post.date} className="w-full">
            <Link
              href={ROUTES.BLOG_DETAIL(post.slug)}
              className="flex h-full flex-col overflow-hidden rounded border border-gray-200 bg-white transition hover:shadow-lg"
            >
              <div className="relative aspect-[5/3] w-full">
                <Image
                  src={`/api/og?title=${encodeURIComponent(post.title)}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-3">
                <div>
                  <p className="text-xs font-semibold text-gray-400">{post.date}</p>
                  <p className="mt-1 text-sm font-extrabold md:text-lg">{post.title}</p>
                </div>
                <p className="mt-2 truncate text-xs text-gray-600 md:text-sm">
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
