import Lineicons from "@lineiconshq/react-lineicons"
import Carrousel from "../components/homepage/Carrousel"
import HomeHero from "../components/homepage/HomeHero"
import { Bookmark1Outlined, Rocket5Solid, Search1Outlined, TextParagraphSolid } from "@lineiconshq/free-icons"
import InfoCard from "../components/homepage/InfoCard"
import { MOCK_SHOWS } from "../data/showsMock"
import ShowPreviewCard from "../components/shows/ShowPreviewCard"
import { toShow } from "../services/shows/shows.mapper"

const Homepage = () => {
  return (
    <main
      className="
        bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,color-mix(in_srgb,var(--color-primary-600)_55%,transparent)_0%,transparent_60%),radial-gradient(ellipse_70%_45%_at_50%_25%,color-mix(in_srgb,var(--color-primary-500)_18%,transparent)_0%,transparent_65%),linear-gradient(180deg,var(--color-background-100)_0%,var(--color-background-200)_18%,var(--color-background-200)_100%)]
        min-h-screen
        px-4
      "
    >
      <HomeHero />

      <Carrousel
        items={MOCK_SHOWS.map(toShow)}
        renderItem={(show) => (
          <ShowPreviewCard
            key={show.id}
            show={show}
            className="relative shrink-0 snap-center overflow-hidden w-[80%] sm:w-[50%] sm:h-120 md:w-75 md:h-100"
          />
        )}
      />

      <section className="py-15 max-w-6xl mx-auto">
        <div className="text-2xl text-primary-50 font-semibold font-zalando-expanded flex items-center gap-2">
          <Lineicons
            icon={Rocket5Solid}
            size={30}
            className="text-primary-400"
          />
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