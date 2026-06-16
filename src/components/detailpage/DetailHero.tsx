import type { Show } from "../../services/shows/show.types"

interface Props {
  show: Show
}

const DetailHero = ({ show }: Props) => {
  return (
    <header className="max-w-6xl mx-auto">
      <section className="relative md:flex">
        <img
          src={show.image}
          alt={show.title}
          className="w-full h-full object-cover sm:h-125 md:w-auto md:h-auto md:m-4 md:border md:border-primary-500/70"
        />

        <div
          className="
            absolute inset-0
            bg-linear-to-t
            from-background-200
            via-background-200/20
            to-transparent
            md:hidden
          "
        />

        <div className="absolute bottom-0 px-4 md:relative md:flex md:flex-col md:justify-end md:my-4">
          <section className="flex items-center flex-wrap gap-2">
            <span className="bg-background-200/60 text-gray-100/85 text-xs rounded-md px-2 py-1">
              {show.year}
            </span>

            {show.genres.map((genre) => {
              return (
                <span className="bg-primary-500/70 text-gray-100/85 text-xs rounded-md px-2 py-1">
                  {genre}
                </span>
              )
            })}
          </section>

          <h1 className="text-primary-50 font-semibold font-zalando-expanded text-3xl mt-3 mb-1 md:text-5xl">
            {show.title}
          </h1>

          <section className="flex items-center">
            <div className="flex gap-1.5 items-center">
              <span className="text-primary-400 text-md md:text-xl">★</span>
              <p className="text-primary-50 text-sm md:text-lg">
                {show.rating.toFixed(1)}
              </p>
            </div>

            <p className="text-primary-50/60 text-sm md:text-lg">
              <span className="text-gray-700 text-xl mx-2">•</span>
              {show.network}
              <span className="text-gray-700 text-xl mx-2">•</span>
              {show.type}
            </p>
          </section>
        </div>
      </section>
    </header>
  )
}

export default DetailHero