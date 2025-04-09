interface TechBadgeProps {
  title: string
}

export default function TechBadge({ title }: TechBadgeProps) {
  return (
    <div className="flex h-5 items-center justify-center rounded-sm bg-gray-300 px-2 py-1 text-xs font-bold dark:bg-gray-600">
      {title}
    </div>
  )
}
