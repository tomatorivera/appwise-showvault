import BrowseHero from "./BrowseHero"
import ShowPreviewCard from "../../features/show/components/ShowPreviewCard"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDebounce } from "../../shared/hooks/useDebounce"
import { useSearchParams } from "react-router-dom"
import { useShows } from "../../features/show/hooks/useShows"
import ShowPreviewCardSkeleton from "../../features/show/components/ShowPreviewCardSkeleton"
import { FILTERS } from "../../features/show/config/browse.config"
import type { ShowFilterKey } from "../../features/show/types/show.types"

const BrowsePage = () => {
  const [rawSearch, setRawSearch] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const debouncedSearch = useDebounce<string>(rawSearch, 400)

  const q = searchParams.get("q") ?? "";
  
  const { data, isLoading, isSuccess } = useShows({ search: q })
  
  useEffect(() => {
    setSearchParams((prev) => {
      if (debouncedSearch) prev.set('q', debouncedSearch)
        else prev.delete('q')
      
      return prev
    })
  }, [debouncedSearch])
  
  const genres = useMemo(() => {
    if (!data)
      return []

    return Array.from(new Set(data.flatMap((show) => show.genres)))
  }, [data])
  const status = useMemo(() => {
    if (!data)
      return []

    return Array.from(new Set(data.flatMap(show => show.status)))
  }, [data])

  const setFilter = useCallback(
    (key: ShowFilterKey, value: string) => {
      console.log(key, value)
      setSearchParams((prev) => {
        if (!value.trim() || value === 'all') prev.delete(key)
        else prev.set(key, value)

        return prev
      })
    }, [searchParams]
  )

  const filteredShows = useMemo(() => {
    if (!data)
      return []

    return data.filter((show) => {
      return FILTERS.every(({ key, match }) => {
        const value = searchParams.get(key) ?? "all"
        return value === "all" || match(show, value)
      })
    })
  }, [data, searchParams])

  return (
    <main className="bg-background-200 px-4">
      <BrowseHero 
        value={rawSearch} 
        onValueChange={setRawSearch}
        filters={[
          { key: "genre", values: genres },
          { key: "status", values: status }
        ]}
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
        {isLoading && (
          Array.from({ length: 12 }, (_, index) => index).map((index) => (
            <ShowPreviewCardSkeleton
              key={index}
            />
          ))
        )}

        {isSuccess &&
          filteredShows.map((show) => <ShowPreviewCard key={show.id} show={show} />)
        }
      </div>

      {/* Todo: paginator */}
    </main>
  )
}

export default BrowsePage