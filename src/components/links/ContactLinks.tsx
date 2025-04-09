'use client'

import { CONTACT } from '@/constants/contact'
import EmailIcon from '../icons/EmailIcon'
import GitHubLink from '../links/GitHubLink'
import { Button } from '../ui/button'
import { toast } from 'react-toastify'

export default function ContactLinks() {
  const handleCopyEmail = () => {
    const email = CONTACT.EMAIL
    navigator.clipboard.writeText(email)
    toast.success('📧 이메일주소가 클립보드에 저장됐습니다')
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <Button variant="ghost" className="w-10 bg-transparent">
          <GitHubLink className="!h-5 !w-5"></GitHubLink>
        </Button>
        <span className="text-sm">mynolog</span>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          className="w-10 cursor-copy bg-transparent"
          onClick={handleCopyEmail}
        >
          <EmailIcon className="!h-5 !w-5" />
        </Button>
        <span className="text-sm">{CONTACT.EMAIL}</span>
      </div>
    </div>
  )
}
