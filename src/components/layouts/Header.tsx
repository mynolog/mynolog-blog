import GitHub from '../icons/GitHub'
import ThemeDropdown from '../theme/ThemeDropdown'

export default function Header() {
  return (
    <header className="flex h-14 w-full items-center justify-center">
      <nav className="flex h-full w-full max-w-[1200px] items-center justify-between border-b-2 border-gray-100 px-6">
        {/* 네비게이션 메뉴 */}
        <ul className="flex gap-5">
          <li>posts</li>
          <li>portfolio</li>
          <li>about</li>
        </ul>
        {/* 다크모드, 깃헙 */}
        <ul className="flex items-center justify-center gap-5">
          <li>
            <GitHub className="h-5 w-5" />
          </li>
          <li>
            <ThemeDropdown />
          </li>
        </ul>
      </nav>
    </header>
  )
}
