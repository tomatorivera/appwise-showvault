import { Skeleton } from '../../../../shared/ui/Skeleton'

const CastMemberCardSkeleton = () => {
  return (
    <article className="flex flex-col justify-center w-42.5 py-2 px-0.5">
      <Skeleton className="rounded-full w-25 h-25 md:w-20 md:h-20 mx-auto" />
      <div className="text-center mt-2 flex flex-col items-center gap-1">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-16 h-3" />
      </div>
    </article>
  )
}

export default CastMemberCardSkeleton
