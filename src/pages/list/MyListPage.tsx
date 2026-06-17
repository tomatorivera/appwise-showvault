import ListHero from "./ListHero"
import type { SavedShow } from "../../features/show/types/show.types"
import { MOCK_SHOWS } from "../../features/show/data/showsMock"
import SavedShowCard from "../../features/show/components/SavedShowCard"
import { toShow } from "../../features/show/mappers/show.mapper"

const MyListPage = () => {
  const shows = MOCK_SHOWS.map(toShow).map<SavedShow>(s => ({...s, watchStatus: "plan-to-watch", addedAt: Date.now()}))

  return (
    <main className="bg-background-200 px-4">
      <ListHero />

      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          max-w-6xl mx-auto
          pb-10
        "
      >
        {shows.map((show) => (
          <SavedShowCard 
            key={show.id} 
            show={show}
          />
        ))}
      </div>
    </main>
  )
}

export default MyListPage