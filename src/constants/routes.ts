export const ROUTES = {
  HOME: '/',

  BLOG: '/blog',
  BLOG_DETAIL: (slug: string) => `/blog/${slug}`,

  PORTFOLIO: '/portfolio',

  ABOUT: '/about',
} as const
