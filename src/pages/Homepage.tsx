import Lineicons from "@lineiconshq/react-lineicons"
import Carrousel from "../components/Carrousel/Carrousel"
import Hero from "../components/Hero/Hero"
import { Bookmark1Outlined, Rocket5Solid, Search1Outlined, TextParagraphSolid } from "@lineiconshq/free-icons"
import InfoCard from "../components/InfoCard"

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
        px-4
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

      <section className="py-15 max-w-6xl mx-auto">
        <div className="text-2xl text-primary-50 font-semibold font-zalando-expanded flex items-center gap-2">
          <Lineicons icon={Rocket5Solid} size={30} />
          <h2 className="relative before:content-[''] before:absolute before:-bottom-1.25 before:bg-primary-50 before:h-1 before:w-1/3">
            Potenciá tu experiencia
          </h2>
        </div>

        <section className="flex flex-col gap-4 py-8 lg:flex-row lg:justify-center">
          <InfoCard
            title="Búsqueda avanzada"
            body="Encontrá cualquier serie entre miles de opciones con filtros precisos por género, años, entre otros"
            icon={
              <Lineicons
                icon={Search1Outlined}
                size={45}
                className="bg-primary-400/20 text-primary-300 p-2 rounded-xl"
              />
            }
          />
          <InfoCard
            title="Detalles completos"
            body="Accedé a guías de episodios, fechas de estreno, calificaciones de la comunidad y resúmenes sin spoilers"
            icon={
              <Lineicons
                icon={TextParagraphSolid}
                size={45}
                className="bg-secondary-400/20 text-secondary-300 p-2 rounded-xl"
              />
            }
          />
          <InfoCard
            title="Gestión de progreso"
            body="Marcá series que tenes ganas de ver, que estás viendo o que ya terminaste. Mantené tu biblioteca organizada en un solo lugar."
            icon={
              <Lineicons
                icon={Bookmark1Outlined}
                size={45}
                className="bg-tertiary-400/20 text-tertiary-300 p-2 rounded-xl"
              />
            }
          />
        </section>
      </section>
    </main>
  )
}

export default Homepage