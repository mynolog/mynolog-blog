import GitHubLink from '../links/GitHubLink'
import ThemeDropdown from '../theme/ThemeDropdown'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 flex h-14 w-full items-center justify-center border-b-2 border-gray-100 bg-white dark:border-gray-700 dark:bg-black">
      <nav className="flex h-full w-full max-w-[1200px] items-center justify-between px-6">
        {/* 네비게이션 메뉴 */}
        <ul className="flex gap-5">
          <li>posts</li>
          <li>portfolio</li>
          <li>about</li>
        </ul>
        {/* 깃헙, 테마 설정 */}
        <ul className="flex items-center justify-center gap-5">
          <li>
            <Button variant="ghost" className="w-10 bg-transparent">
              <GitHubLink />
            </Button>
          </li>
          <li>
            <ThemeDropdown />
          </li>
        </ul>
      </nav>
    </header>
  )
}
