import type { Show } from "../../services/shows/show.types"

interface Props {
  shows: Show[]
}

const ShowRecommendedCard = ({ shows }: Props) => {
  return (
    <section className="w-full rounded-xl border border-grey/25 bg-background-100/30 p-6 text-primary-50">
      <h2 className="mb-5 text-xl font-bold">Te puede gustar</h2>

      <div className="divide-y divide-grey/20">
        {shows.map((show) => (
          <article
            key={show.id}
            className="flex gap-4 py-4 first:pt-0 last:pb-0"
          >
            <img
              src={show.image}
              alt={show.title}
              className="h-22.5 w-15 shrink-0 rounded-md object-cover"
            />

            <div className="flex min-w-0 flex-col justify-center">
              <h3 className="truncate font-bold text-primary-50">
                {show.title}
              </h3>

              <p className="text-sm font-medium text-grey">
                {show.genres[0]} · {show.year}
              </p>

              <p className="mt-1 text-sm font-bold text-primary-200">
                ★ {show.rating.toFixed(1)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ShowRecommendedCard