import BrowseHero from "./BrowseHero"
import { MOCK_SHOWS } from "../../features/show/data/showsMock"
import ShowPreviewCard from "../../features/show/components/ShowPreviewCard"
import { toShow } from "../../features/show/mappers/show.mapper"

const BrowsePage = () => {
  return (
    <main className="bg-background-200 px-4">
      <BrowseHero />

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
        {MOCK_SHOWS.map(toShow).map((show) => (
          <ShowPreviewCard 
            key={show.id} 
            show={show}
          />
        ))}
      </div>

      {/* Todo: paginator */}
    </main>
  )
}

export default BrowsePage