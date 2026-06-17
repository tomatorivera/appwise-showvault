import { Skeleton } from "../../../shared/ui/Skeleton"

interface Props {
  className?: string
}

export default function ShowPreviewCardSkeleton({ className = '' }: Props) {
  return (
    <article
      className={`
        relative overflow-hidden rounded-2xl
        bg-background-100/40 border border-primary-800/15
        ${className}
      `}
    >
      <div className="relative aspect-2/3 overflow-hidden">
        <Skeleton className="h-full w-full rounded-none" />

        <div className="absolute right-3 top-3">
          <Skeleton className="h-7 w-16 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="mb-2 flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        <Skeleton className="h-8 w-4/5" />
        <Skeleton className="mt-2 h-8 w-3/5" />

        <Skeleton className="mt-3 h-4 w-1/2" />

        <div className="mt-4 flex gap-2">
          <Skeleton className="h-6 w-16 rounded-md" />
          <Skeleton className="h-6 w-20 rounded-md" />
          <Skeleton className="h-6 w-14 rounded-md" />
        </div>
      </div>
    </article>
  )
}
