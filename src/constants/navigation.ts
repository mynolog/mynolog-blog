import { ROUTES } from './routes'

export const NAVIGATION_ITEMS = [
  {
    id: '1000',
    label: 'posts',
    href: ROUTES.POSTS,
  },
  {
    id: '2000',
    label: 'portfolio',
    href: ROUTES.PORTFOLIO,
  },
  {
    id: '3000',
    label: 'about',
    href: ROUTES.ABOUT,
  },
] as const
