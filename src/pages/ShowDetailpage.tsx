import DetailHero from "../components/detailpage/DetailHero"
import DetailSection from "../components/detailpage/DetailSection"
import Button from "../components/shared/Button"
import CastMemberCard from "../components/shows/CastMemberCard"
import SeasonPreviewCard from "../components/shows/SeasonPreviewCard"
import ShowRecommendedCard from "../components/shows/ShowRecommendedCard"
import ShowTechnicalDetailsCard from "../components/shows/ShowTechnicalDetailsCard"
import { MOCK_CAST } from "../data/castMock"
import { MOCK_SEASONS } from "../data/seasonsMock"
import { MOCK_SHOWS } from "../data/showsMock"
import { toCastMember, toSeason, toShow } from "../services/shows/shows.mapper"

const ShowDetailpage = () => {
  const show = toShow(MOCK_SHOWS[0])
  const seasons = MOCK_SEASONS.map(toSeason)
  const cast = MOCK_CAST.map(toCastMember)

  return (
    <div
      className="
        bg-background-200
        md:bg-[radial-gradient(ellipse_90%_35%_at_15%_0%,color-mix(in_srgb,var(--color-primary-600)_55%,transparent)_0%,transparent_60%),radial-gradient(ellipse_70%_45%_at_15%_25%,color-mix(in_srgb,var(--color-primary-500)_18%,transparent)_0%,transparent_65%),linear-gradient(180deg,var(--color-background-100)_0%,var(--color-background-200)_18%,var(--color-background-200)_100%)]
      "
    >
      <DetailHero show={show} />

      <main className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] max-w-6xl mx-auto px-4 py-6">
        <section className="flex flex-col gap-6">
          <Button style="primary">+ Agregar a mi lista</Button>

          {/* Sinopsis */}
          <DetailSection title="Sinopsis" body={show.summary} />

          {/* Temporadas */}
          <DetailSection title="Temporadas">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
              {seasons.map((season) => {
                return <SeasonPreviewCard key={season.id} season={season} />
              })}
            </div>
          </DetailSection>

          {/* Reparto */}
          <DetailSection title="Reparto">
            <div className="flex items-stretch justify-center flex-wrap gap-3 md:justify-start md:gap-0">
              {cast.map((member) => {
                return <CastMemberCard key={member.id} member={member} />
              })}
            </div>
          </DetailSection>
        </section>

        <aside className="flex flex-col gap-4">
          <ShowTechnicalDetailsCard show={show} />
          <ShowRecommendedCard shows={MOCK_SHOWS.map(toShow).filter(s => s.genres.includes(show.genres[0])).slice(0,4)} />
        </aside>
      </main>
    </div>
  )
}

export default ShowDetailpage