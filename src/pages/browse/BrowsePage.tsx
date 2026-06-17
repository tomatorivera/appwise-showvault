import BrowseHero from './BrowseHero'
import ShowPreviewCard from '../../features/show/components/ShowPreviewCard'
import { useEffect, useState } from 'react'
import { useDebounce } from '../../shared/hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { useShows } from '../../features/show/hooks/useShows'
import ShowPreviewCardSkeleton from '../../features/show/components/ShowPreviewCardSkeleton'
// import { FILTERS } from '../../features/show/config/browse.config'
// import type { ShowFilterKey } from '../../features/show/types/show.types'
import { useShowFilters } from '../../features/show/hooks/useShowFilters'

const BrowsePage = () => {
  const [rawSearch, setRawSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const debouncedSearch = useDebounce<string>(rawSearch, 400)

  const q = searchParams.get('q') ?? ''

  const { data, isLoading, isSuccess } = useShows({ search: q })
  const { filteredShows, setFilter, filterList } = useShowFilters(data)

  useEffect(() => {
    setSearchParams((prev) => {
      if (debouncedSearch) prev.set('q', debouncedSearch)
      else prev.delete('q')

      return prev
    })
  }, [debouncedSearch])

  return (
    <main className="bg-background-200 px-4">
      <BrowseHero
        value={rawSearch}
        onValueChange={setRawSearch}
        filters={filterList}
        onFilterChange={setFilter}
      />

      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          max-w-6xl mx-auto
          pb-10
        "
      >
        {isLoading &&
          Array.from({ length: 12 }, (_, index) => index).map((index) => (
            <ShowPreviewCardSkeleton key={index} />
          ))}

        {isSuccess &&
          filteredShows.map((show) => (
            <ShowPreviewCard key={show.id} show={show} />
          ))}
      </div>

      {/* Todo: paginator */}
    </main>
  )
}

export default BrowsePage
