import ContactLinks from '../links/ContactLinks'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex h-24 w-full items-center justify-center gap-3 border-t border-gray-100 bg-white p-4 text-center dark:border-gray-700 dark:bg-black">
      <p className="text-sm">
        © 2025, <b>minho lee</b> all rights reserved.
      </p>
      <ContactLinks />
    </footer>
  )
}
