import BrowseHero from "../components/browsepage/BrowseHero"
import ShowPreviewCard from "../components/shows/ShowPreviewCard"
import { MOCK_SHOWS } from "../data/showsMock"

const Browsepage = () => {
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
        {MOCK_SHOWS.map((show) => (
          <ShowPreviewCard 
            key={show.id} 
            name={show.name}
            type={show.type}
            genres={show.genres}
            status={show.status}
            premiered={show.premiered}
            network={show.network.name}
            image={show.image.medium}
            rating={show.rating.average}
          />
        ))}
      </div>

      {/* Todo: paginator */}
    </main>
  )
}

export default Browsepage