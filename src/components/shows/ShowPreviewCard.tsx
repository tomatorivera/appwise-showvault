import type { Show } from "../../services/shows/show.types"

interface Props {
  show: Show,
  className?: string
}

export default function ShowPreviewCard({ show, className = "" }: Props) {
  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl
        bg-background-100 border border-primary-500/15
        transition-all duration-300
        hover:-translate-y-2
        hover:border-primary-500/40
        hover:shadow-[0_10px_40px_rgba(103,96,253,0.15)]
        ${className}
      `}
    >
      <div className="relative aspect-2/3 overflow-hidden">
        <img
          src={show.image}
          alt={`Cartelera del show "${show.title}"`}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute inset-0
            bg-linear-to-t
            from-background-200
            via-background-200/50
            to-transparent
          "
        />

        <div
          className="
            absolute right-3 top-3
            rounded-full bg-background-200/80
            backdrop-blur-sm
            px-3 py-1
            text-xs font-semibold
            text-primary-100
            border border-primary-400/20
          "
        >
          <span className="me-0.5">★</span> {show.rating.toFixed(1)}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="mb-2 flex items-center gap-2">
          <span
            className="
              rounded-full
              bg-secondary-500/40
              px-2 py-1
              text-xs font-medium
              text-secondary-200
            "
          >
            {show.type}
          </span>

          <span
            className={`
              rounded-full px-2 py-1 text-xs font-medium
              ${
                show.status === 'Running'
                  ? 'bg-green-500/40 text-green-300'
                  : 'bg-gray-500/75 text-gray-300'
              }
            `}
          >
            {show.status}
          </span>
        </div>

        <h3
          className="
            line-clamp-2
            text-2xl font-semibold
            text-primary-50
          "
        >
          {show.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-primary-100/80">
          {`${show.year} • ${show.network}`}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {show.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="
                rounded-md
                bg-primary-500/10
                px-2 py-1
                text-xs
                text-primary-200
              "
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
