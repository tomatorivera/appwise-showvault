import { Bookmark1Outlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import type { WatchStatus } from '../../features/watchlist/types/watchlist.types'

interface Props {
  viewList: WatchStatus
  onChangeViewList: (value: WatchStatus) => void
}

const ListHero = ({ viewList, onChangeViewList }: Props) => {
  const btnBase =
    'rounded-xl text-sm md:text-base px-3 py-2 md:px-5 font-medium transition-colors cursor-pointer'
  const btnActive = 'bg-primary-100 text-primary-700'
  const btnInactive = 'text-grey hover:bg-white/5 hover:text-primary-50'

  return (
    <header className="max-w-6xl mx-auto text-primary-50 py-10 md:flex md:items-center">
      <section className="mb-10 md:mb-0 md:flex-1">
        <div className="flex items-center gap-2">
          <Lineicons
            icon={Bookmark1Outlined}
            size={30}
            className="animate-bounce-soft text-primary-300"
          />
          <h1 className="font-semibold font-zalando-expanded text-3xl">
            Tu lista
          </h1>
        </div>

        <p className="text-grey mt-2.5">
          Desde aquí puedes gestionar todos los títulos que has guardado, en un
          solo lugar. También puedes modificar su estado si así lo deseas!
        </p>
      </section>

      <section className="flex justify-center md:justify-end md:w-1/2">
        <nav className="inline-flex rounded-2xl bg-background-100/60 p-1">
          <button
            onClick={() => onChangeViewList('plan-to-watch')}
            className={`${btnBase} ${viewList === 'plan-to-watch' ? btnActive : btnInactive}`}
          >
            Quiero ver
          </button>

          <button
            onClick={() => onChangeViewList('watching')}
            className={`${btnBase} ${viewList === 'watching' ? btnActive : btnInactive}`}
          >
            Viendo
          </button>

          <button
            onClick={() => onChangeViewList('completed')}
            className={`${btnBase} ${viewList === 'completed' ? btnActive : btnInactive}`}
          >
            Terminadas
          </button>
        </nav>
      </section>
    </header>
  )
}

export default ListHero
