import BrowseHero from './BrowseHero'
import ShowPreviewCard from '../../features/show/components/ShowPreviewCard'
import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from '../../shared/hooks/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { useShows } from '../../features/show/hooks/useShows'
import ShowPreviewCardSkeleton from '../../features/show/components/skeletons/ShowPreviewCardSkeleton'
import { useShowFilters } from '../../features/show/hooks/useShowFilters'
import Paginator from '../../shared/ui/Paginator'

const BrowsePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [rawSearch, setRawSearch] = useState(searchParams.get('q') ?? '')
  const debouncedSearch = useDebounce<string>(rawSearch, 400)

  const page = Number(searchParams.get('page') ?? 0)

  const { data, isLoading, isSuccess } = useShows({
    search: debouncedSearch,
    page,
  })
  const { filteredShows, setFilter, filterList } = useShowFilters(data)

  useEffect(() => {
    setSearchParams((prev) => {
      if (debouncedSearch) prev.set('q', debouncedSearch)
      else prev.delete('q')

      return prev
    })
  }, [debouncedSearch])

  const setPage = useCallback(
    (newPage: number) => {
      setSearchParams((prev) => {
        if (newPage === 0) prev.delete('page')
        else prev.set('page', String(newPage))
        return prev
      })
    },
    [setSearchParams]
  )

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

      <Paginator
        page={page}
        onPrev={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
        hasPrev={page > 0 && !rawSearch.trim()}
        hasNext={isSuccess && data.length > 0 && !rawSearch.trim()}
      />
    </main>
  )
}

export default BrowsePage
