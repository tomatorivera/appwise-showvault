import Carrousel from "../components/Carrousel/Carrousel"
import Hero from "../components/Hero/Hero"

const images = [
  'https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/143/358967.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/490/1226764.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/477/1194981.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/498/1245275.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg',
]

const Homepage = () => {
  return (
    <main
      className="
        bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,color-mix(in_srgb,var(--color-primary-600)_55%,transparent)_0%,transparent_60%),radial-gradient(ellipse_70%_45%_at_50%_25%,color-mix(in_srgb,var(--color-primary-500)_18%,transparent)_0%,transparent_65%),linear-gradient(180deg,var(--color-background-100)_0%,var(--color-background-200)_18%,var(--color-background-200)_100%)]
        min-h-screen
      "
    >
      <Hero />

      {/* Todo: implementar show card */}
      <Carrousel 
        items={images}
        renderItem={(image) => (
          <article
            key={image}
            className="
              relative shrink-0 snap-center overflow-hidden
              w-[80%] sm:w-[50%] sm:h-120 md:w-48 md:h-72
              rounded-lg border border-primary-200/20
              bg-background-100
              hover:-translate-y-2 focus:-translate-y-2 transition-transform
            "
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-background-200/80 via-transparent to-transparent" />
          </article>
        )}
      />
    </main>
  )
}

export default Homepage