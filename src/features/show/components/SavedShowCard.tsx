import { Bookmark1Solid } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import type { SavedShow } from '../types/show.types'
import { formatDate } from '../../../shared/utils/dateUtils'
import type { WatchStatus } from '../../watchlist/types/watchlist.types'

interface Props {
  show: SavedShow
  onChangeViewList: (showId: number, value: WatchStatus) => void
  onUnsaveShow: (showId: number) => void
}

const SavedShowCard = ({ show, onChangeViewList, onUnsaveShow }: Props) => {
  return (
    <article className="flex h-37.5 overflow-hidden rounded-xl border border-grey/15 bg-background-100/50 text-primary-50">
      <img
        src={show.image}
        alt={show.title}
        className="h-full w-23 shrink-0 object-cover"
      />

      <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
        <div className="min-w-0">
          <h3 className="truncate font-bold">{show.title}</h3>

          <p className="mt-1 text-xs font-semibold text-grey">
            {show.year}
            <span className="mx-1.5 text-grey/40">•</span>★{' '}
            {show.rating.toFixed(1)}
            <span className="mx-1.5 text-grey/40">•</span>
            {show.status}
          </p>

          <p className="mt-3 text-xs text-grey">
            Agregada el {formatDate(show.addedAt)}
          </p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <select
            value={show.watchStatus}
            onChange={(e) =>
              onChangeViewList(show.id, e.target.value as WatchStatus)
            }
            className="h-9 min-w-0 flex-1 rounded-lg border border-primary-400/30 bg-primary-600 px-3 text-sm font-semibold text-primary-50 outline-none transition-colors hover:bg-primary-500 focus:ring-2 focus:ring-primary-300/40 cursor-pointer"
          >
            <option value="plan-to-watch">Quiero ver</option>
            <option value="watching">Viendo</option>
            <option value="completed">Terminado</option>
          </select>

          <button
            onClick={() => onUnsaveShow(show.id)}
            title="Eliminar de mi lista"
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-grey/20 text-primary-200 transition-colors hover:bg-white/5 hover:text-primary-50"
          >
            <Lineicons
              icon={Bookmark1Solid}
              size={18}
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>
    </article>
  )
}

export default SavedShowCard
