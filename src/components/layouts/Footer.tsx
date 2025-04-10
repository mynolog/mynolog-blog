import ContactLinks from '../links/ContactLinks'

export default function Footer() {
  return (
    <footer className="flex h-24 w-full items-center justify-center gap-3 border-t border-gray-100 p-4 text-center dark:border-gray-700">
      <p className="text-sm">
        © 2025, <b>minho lee</b> all rights reserved.
      </p>
      <ContactLinks />
    </footer>
  )
}
