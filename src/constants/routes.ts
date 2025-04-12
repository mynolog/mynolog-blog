import type { Category } from './posts'

export const ROUTES = {
  HOME: '/',

  BLOG: '/blog',
  CATEGORY: (category: Category) => `/blog/${category}`,
  BLOG_DETAIL: (slug: string) => `/${slug}`,

  PORTFOLIO: '/portfolio',

  ABOUT: '/about',
} as const
