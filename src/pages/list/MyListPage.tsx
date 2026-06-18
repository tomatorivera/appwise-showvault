import ListHero from './ListHero'
import SavedShowCard from '../../features/show/components/SavedShowCard'
import { useAppStore } from '../../app/appStore'
import { useMemo, useState } from 'react'
import type { WatchStatus } from '../../features/watchlist/types/watchlist.types'

const MyListPage = () => {
  const [viewList, setViewList] = useState<WatchStatus>('plan-to-watch')

  const savedShows = useAppStore((state) => state.items)
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
          />
        ))}
      </div>
    </main>
  )
}

export default MyListPage
