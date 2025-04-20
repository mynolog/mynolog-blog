export const CONTENT_DIRECTORIES = ['blog', 'portfolio'] as const
export type ContentDirectory = (typeof CONTENT_DIRECTORIES)[number]

export const CATEGORIES = [
  'all',
  'react',
  'next.js',
  'typescript',
  'tooling',
  'devlog',
  'booknotes',
  'etc',
] as const

export type Category = (typeof CATEGORIES)[number]
