import { Ghost } from 'lucide-react'

export default function EmptyPosts() {
  return (
    <div className="text-muted-foreground flex min-h-screen flex-col items-center py-14">
      <Ghost className="mb-4 h-10 w-10 opacity-50" />
      <p className="font-semibold opacity-80">이 카테고리에는 아직 게시글이 없습니다.</p>
    </div>
  )
}
