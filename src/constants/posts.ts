export const CONTENT_DIRECTORIES = ['blog', 'portfolio'] as const
export type ContentDirectory = (typeof CONTENT_DIRECTORIES)[number]

export const CATEGORIES = [
  'all',
  'react',
  'next.js',
  'typescript',
  'devlog',
  'algorithm',
  'booknotes',
  'etc',
] as const

export type Category = (typeof CATEGORIES)[number]
