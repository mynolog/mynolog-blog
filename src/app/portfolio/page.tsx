import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'portfolio - mynolog',
  description: 'mynolog의 포트폴리오 페이지입니다.',
}

export default function PortfolioPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">포트폴리오 페이지 준비 중입니다.</h2>
      <p>곧 정리된 프로젝트 소개와 함께 업데이트될 예정입니다.</p>
    </div>
  )
}
