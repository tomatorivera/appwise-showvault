import ListHero from './ListHero'
import SavedShowCard from '../../features/show/components/SavedShowCard'
import { useAppStore } from '../../app/appStore'
import { useMemo, useState } from 'react'
import type { WatchStatus } from '../../features/watchlist/types/watchlist.types'
import { Link } from 'react-router-dom'

const MyListPage = () => {
  const [viewList, setViewList] = useState<WatchStatus>('plan-to-watch')

  const savedShows = useAppStore((state) => state.items)
  const unsaveShow = useAppStore((state) => state.unsaveShow)
  const changeStatus = useAppStore((state) => state.changeStatus)

  const displayedShows = useMemo(() => {
    return savedShows.filter((show) => show.watchStatus === viewList)
  }, [viewList, savedShows])

  const handleChangeList = (showId: number, newList: WatchStatus) => {
    changeStatus(showId, newList)
  }

  return (
    <main className="bg-background-200 px-4">
      <ListHero viewList={viewList} onChangeViewList={setViewList} />

      {displayedShows.length === 0 && (
        <section className="w-full max-w-6xl mx-auto text-center py-15">
          <h2 className="font-zalando-expanded text-2xl font-semibold text-primary-50">
            Ups...
          </h2>
          <p className="text-grey">
            Parece que no hay nada aquí. Revisa la sección de{' '}
            <Link
              to="/shows"
              className="text-primary-200 font-semibold hover:text-primary-300 transition-colors"
            >
              exploración
            </Link>{' '}
            para agregar algunas series!
          </p>
        </section>
      )}

      {displayedShows.length > 0 && (
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
          {displayedShows.map((show) => (
            <SavedShowCard
              key={show.id}
              show={show}
              onChangeViewList={handleChangeList}
              onUnsaveShow={unsaveShow}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default MyListPage
