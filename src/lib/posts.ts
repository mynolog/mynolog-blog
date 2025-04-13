import type { Category, ContentDirectory } from '@/constants/posts'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { readingTime } from 'reading-time-estimator'
import { CATEGORIES } from '@/constants/posts'

export interface PostMeta {
  title: string
  slug: string
  date: string
  category: Category
  readingTime: number
  thumbnail?: string
  tags?: string[]
  description?: string
  content?: string
}

export function getAllPosts(directoryName: ContentDirectory): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), 'contents', directoryName)
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContents)
      const frontmatter = data as PostMeta
      const readingTime = estimateReadingTime(content)

      return {
        title: frontmatter.title,
        slug: frontmatter.slug,
        date: frontmatter.date,
        category: frontmatter.category,
        readingTime,
        thumbnail: frontmatter.thumbnail ?? '',
        tags: frontmatter.tags ?? [],
        description: frontmatter.description ?? '',
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByCategory(
  directoryName: ContentDirectory,
  category: Category,
): PostMeta[] {
  const allPosts = getAllPosts(directoryName)

  return allPosts.filter((post) => post.category === category)
}

export async function getPostBySlug(
  directoryName: ContentDirectory,
  slug: string,
): Promise<PostMeta> {
  const filePath = path.join(process.cwd(), 'contents', directoryName, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf-8')

  const { data, content } = matter(fileContents)
  const frontmatter = data as PostMeta
  const readingTime = estimateReadingTime(content)

  return {
    title: frontmatter.title,
    slug: frontmatter.slug,
    date: frontmatter.date,
    category: frontmatter.category,
    readingTime,
    thumbnail: frontmatter.thumbnail ?? '',
    tags: frontmatter.tags ?? [],
    description: frontmatter.description ?? '',
    content,
  }
}

export function countPostsByCategory(posts: PostMeta[]) {
  const counts: Record<string, number> = {}

  for (const category of CATEGORIES) {
    if (category === 'all') continue
    counts[category] = posts.filter((post) => post.category === category).length
  }

  counts['all'] = posts.length
  return counts
}

export function estimateReadingTime(content: string) {
  const result = readingTime(content, 30)
  return result.minutes
}
