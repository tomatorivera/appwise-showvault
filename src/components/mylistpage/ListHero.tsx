import { Bookmark1Outlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'

const ListHero = () => {
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
          <button className="rounded-xl bg-primary-100 text-sm md:text-base px-3 py-2 md:px-5 font-medium text-primary-700 transition-colors cursor-pointer">
            Quiero ver
          </button>

          <button className="rounded-xl text-sm md:text-base px-3 py-2 md:px-5 font-medium text-grey transition-colors hover:bg-white/5 hover:text-primary-50 cursor-pointer">
            Viendo
          </button>

          <button className="rounded-xl text-sm md:text-base px-3 py-2 md:px-5 font-medium text-grey transition-colors hover:bg-white/5 hover:text-primary-50 cursor-pointer">
            Terminadas
          </button>
        </nav>
      </section>
    </header>
  )
}

export default ListHero
