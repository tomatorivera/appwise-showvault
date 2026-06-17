import { useSearchParams } from "react-router-dom"
import type { Show, ShowFilter, ShowFilterKey } from "../types/show.types"
import { useCallback, useMemo } from "react"
import { FILTERS } from "../config/browse.config"

export const useShowFilters = (shows: Show[] | undefined) => {
  const [searchParams, setSearchParams] = useSearchParams()

  // FILTERS

  const genres = useMemo(() => {
    if (!shows) return []

    return Array.from(new Set(shows.flatMap((show) => show.genres)))
  }, [shows])

  const status = useMemo(() => {
    if (!shows) return []

    return Array.from(new Set(shows.flatMap((show) => show.status)))
  }, [shows])

  const filterList: ShowFilter[] = [
    { key: "genre", values: genres },
    { key: "status", values: status }
  ]

  // FUNCTIONS

  const setFilter = useCallback(
    (key: ShowFilterKey, value: string) => {
      setSearchParams((prev) => {
        if (!value.trim() || value === 'all') prev.delete(key)
        else prev.set(key, value)

        return prev
      })
    },
    [searchParams]
  )

  const filteredShows = useMemo(() => {
    if (!shows) return []

    return shows.filter((show) => {
      return FILTERS.every(({ key, match }) => {
        const value = searchParams.get(key) ?? 'all'
        return value === 'all' || match(show, value)
      })
    })
  }, [shows, searchParams])

  return {
    setFilter,
    filteredShows,
    filterList
  }
}