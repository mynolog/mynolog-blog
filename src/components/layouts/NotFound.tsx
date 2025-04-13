'use client'

import { useRouter } from 'next/navigation'
import { AlertTriangle } from 'lucide-react'
import { Button } from '../ui/button'
import { ROUTES } from '@/constants/routes'

interface NotFoundProps {
  title: string
}

export default function NotFound({ title }: NotFoundProps) {
  const router = useRouter()

  const handleNavigateToHome = () => {
    router.replace(ROUTES.HOME)
  }

  const handleNavigateToPreviousPage = () => {
    // history stack이 비어있을 경우 fallback
    if (window.history.length <= 1) {
      router.replace(ROUTES.HOME)
    } else {
      router.back()
    }
  }

  return (
    <div className="text-muted-foreground flex min-h-screen flex-col items-center gap-2 py-14">
      <AlertTriangle className="mb-4 h-10 w-10 opacity-50" />
      <p className="font-semibold opacity-80">404 | 존재하지 않는 {title}입니다.</p>
      <div className="flex flex-col gap-2 pt-5">
        <Button className="cursor-pointer" onClick={handleNavigateToHome}>
          홈으로 가기
        </Button>
        <Button className="cursor-pointer" onClick={handleNavigateToPreviousPage}>
          직전 페이지로 가기
        </Button>
      </div>
    </div>
  )
}
