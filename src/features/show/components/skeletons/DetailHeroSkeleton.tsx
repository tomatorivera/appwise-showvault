import { Skeleton } from '../../../../shared/ui/Skeleton'

const DetailHeroSkeleton = () => {
  return (
    <header className="max-w-6xl mx-auto">
      <section className="relative md:flex">
        <Skeleton className="w-full h-125 md:w-53 md:h-74.25 md:m-4" />
        <div className="absolute bottom-0 px-4 md:relative md:flex md:flex-col md:justify-end md:my-4">
          <section className="flex items-center flex-wrap gap-2">
            <Skeleton className="w-10 h-5" />
            <Skeleton className="w-16 h-5" />
            <Skeleton className="w-14 h-5" />
          </section>
          <Skeleton className="w-64 h-9 mt-3 mb-1 md:w-96 md:h-12" />
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-5" />
            <Skeleton className="w-48 h-5" />
          </div>
        </div>
      </section>
    </header>
  )
}

export default DetailHeroSkeleton
