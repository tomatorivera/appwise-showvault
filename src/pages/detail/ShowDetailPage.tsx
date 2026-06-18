import DetailHero from '../../features/show/components/DetailHero'
import DetailSection from './DetailSection'
import Button from '../../shared/ui/Button'
import SeasonPreviewCard from '../../features/show/components/SeasonPreviewCard'
import CastMemberCard from '../../features/show/components/CastMemberCard'
import ShowTechnicalDetailsCard from '../../features/show/components/ShowTechnicalDetailsCard'
import { useShow } from '../../features/show/hooks/useShow'
import DetailHeroSkeleton from '../../features/show/components/skeletons/DetailHeroSkeleton'
import { Skeleton } from '../../shared/ui/Skeleton'
import SeasonPreviewCardSkeleton from '../../features/show/components/skeletons/SeasonPreviewCardSkeleton'
import CastMemberCardSkeleton from '../../features/show/components/skeletons/CastMemberCardSkeleton'
import { useParams } from 'react-router-dom'
import { useShows } from '../../features/show/hooks/useShows'
import { useMemo } from 'react'
import ShowRecommendedCard from '../../features/show/components/ShowRecommendedCard'
import { useAppStore } from '../../app/appStore'
import { useSaveShow } from '../../features/show/hooks/useSaveShow'

const ShowDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { show, seasons, cast } = useShow(Number(id))
  const { data: shows, isPending, isSuccess } = useShows()
  const { handleSave, handleUnsave } = useSaveShow(show.data)

  // La función isSaved por defecto del watchlistSlice no
  // me sirve para este caso, pues al ser un getter no
  // modifica ningún estado y el componente no se rerenderiza
  const isSaved = useAppStore((state) =>
    state.user
      ? (state.items[state.user.id] ?? []).some(
          (item) => item.id === show.data?.id
        )
      : false
  )

  const suggestedShows = useMemo(() => {
    if (!shows || !show.data) return []

    return shows
      .filter((s) => s.genres.some((genre) => show.data.genres.includes(genre)))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)
  }, [shows, show.data])

  return (
    <div
      className="
        bg-background-200
        md:bg-[radial-gradient(ellipse_90%_35%_at_15%_0%,color-mix(in_srgb,var(--color-primary-600)_55%,transparent)_0%,transparent_60%),radial-gradient(ellipse_70%_45%_at_15%_25%,color-mix(in_srgb,var(--color-primary-500)_18%,transparent)_0%,transparent_65%),linear-gradient(180deg,var(--color-background-100)_0%,var(--color-background-200)_18%,var(--color-background-200)_100%)]
      "
    >
      {show.isLoading && <DetailHeroSkeleton />}
      {show.isSuccess && <DetailHero show={show.data} />}

      <main className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] max-w-6xl mx-auto px-4 py-6">
        <section className="flex flex-col gap-6">
          {show.isSuccess && !isSaved && (
            <Button
              style="primary"
              onClick={handleSave}
              disabled={show.isLoading}
            >
              + Agregar a mi lista
            </Button>
          )}
          {show.isSuccess && isSaved && (
            <Button
              style="secondary"
              onClick={handleUnsave}
              disabled={show.isLoading}
            >
              - Remover de mi lista
            </Button>
          )}

          {/* Sinopsis */}
          {show.isLoading && <Skeleton className="w-full h-32" />}
          {show.isSuccess && (
            <DetailSection title="Sinopsis" body={show.data.summary} />
          )}

          {/* Temporadas */}
          <DetailSection title="Temporadas">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
              {seasons.isLoading &&
                Array.from({ length: 4 }, (_, index) => index).map((index) => (
                  <SeasonPreviewCardSkeleton key={index} />
                ))}

              {seasons.isSuccess &&
                seasons.data.map((season) => {
                  return <SeasonPreviewCard key={season.id} season={season} />
                })}
            </div>
          </DetailSection>

          {/* Reparto */}
          <DetailSection title="Reparto">
            <div className="flex items-stretch justify-center flex-wrap gap-3 md:justify-start md:gap-0">
              {cast.isLoading &&
                Array.from({ length: 12 }, (_, index) => index).map((index) => (
                  <CastMemberCardSkeleton key={index} />
                ))}

              {cast.isSuccess &&
                cast.data.map((member) => {
                  return <CastMemberCard key={member.id} member={member} />
                })}
            </div>
          </DetailSection>
        </section>

        <aside className="flex flex-col gap-4">
          {show.isLoading && <Skeleton className="w-full h-87.75" />}
          {show.isSuccess && <ShowTechnicalDetailsCard show={show.data} />}

          {(isPending || show.isLoading) && (
            <Skeleton className="w-full h-108.5" />
          )}
          {isSuccess && show.isSuccess && (
            <ShowRecommendedCard shows={suggestedShows} />
          )}
        </aside>
      </main>
    </div>
  )
}

export default ShowDetailPage
