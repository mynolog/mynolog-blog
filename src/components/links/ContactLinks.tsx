'use client'

import { CONTACT } from '@/constants/contact'
import EmailIcon from '../icons/EmailIcon'
import GitHubLink from '../links/GitHubLink'
import { Button } from '../ui/button'

export default function ContactLinks() {
  const handleCopyEmail = () => {
    const email = CONTACT.EMAIL
    navigator.clipboard.writeText(email)
  }
  return (
    <>
      <Button variant="ghost" className="w-10 bg-transparent">
        <GitHubLink className="!h-5 !w-5" />
      </Button>
      <Button
        variant="ghost"
        className="w-10 cursor-copy bg-transparent"
        onClick={handleCopyEmail}
      >
        <EmailIcon className="!h-5 !w-5" />
      </Button>
    </>
  )
}
