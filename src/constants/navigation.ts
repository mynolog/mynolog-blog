import { ROUTES } from './routes'

export const NAVIGATION_ITEMS = [
  {
    id: '1000',
    label: 'blog',
    href: ROUTES.BLOG,
  },
  // TODO: 포트폴리오 페이지 추가
  // {
  //   id: '2000',
  //   label: 'portfolio',
  //   href: ROUTES.PORTFOLIO,
  // },
  {
    id: '3000',
    label: 'about',
    href: ROUTES.ABOUT,
  },
] as const
