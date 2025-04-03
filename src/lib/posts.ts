import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  title: string
  slug: string
  date: string
  tags?: string[]
  description?: string
}

type ContentDir = 'blog' | 'portfolio'

export function getAllPosts(dirName: ContentDir): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), 'contents', dirName)
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContents)
    const frontmatter = data as PostMeta

    return {
      title: frontmatter.title,
      slug: frontmatter.slug,
      date: frontmatter.date,
      tags: frontmatter.tags ?? [],
      description: frontmatter.description ?? '',
    }
  })
}
