import BrowseHero from "./BrowseHero"
import ShowPreviewCard from "../../features/show/components/ShowPreviewCard"
import { useEffect, useState } from "react"
import { useDebounce } from "../../shared/hooks/useDebounce"
import { useSearchParams } from "react-router-dom"
import { useShows } from "../../features/show/hooks/useShows"
import ShowPreviewCardSkeleton from "../../features/show/components/ShowPreviewCardSkeleton"

const BrowsePage = () => {
  const [rawSearch, setRawSearch] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const debouncedSearch = useDebounce<string>(rawSearch, 400)

  useEffect(() => {
    setSearchParams((prev) => {
      if (debouncedSearch)
        prev.set("q", debouncedSearch)
      else
        prev.delete("q")

      return prev
    })
  }, [debouncedSearch])

  const q = searchParams.get("q") ?? "";
  const { data, isLoading, isSuccess } = useShows({ search: q })

  return (
    <main className="bg-background-200 px-4">
      <BrowseHero value={rawSearch} onChange={setRawSearch} />

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
          data.map((show) => <ShowPreviewCard key={show.id} show={show} />)
        }
      </div>

      {/* Todo: paginator */}
    </main>
  )
}

export default BrowsePage