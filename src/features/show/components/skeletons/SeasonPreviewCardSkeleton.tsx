import { Skeleton } from '../../../../shared/ui/Skeleton'

const SeasonPreviewCardSkeleton = () => {
  return (
    <article className="relative bg-background-100 border border-primary-500/15">
      <Skeleton className="w-full h-48" />
      <div className="p-2 flex flex-col gap-2">
        <Skeleton className="w-32 h-5" />
        <Skeleton className="w-24 h-4" />
      </div>
    </article>
  )
}

export default SeasonPreviewCardSkeleton
