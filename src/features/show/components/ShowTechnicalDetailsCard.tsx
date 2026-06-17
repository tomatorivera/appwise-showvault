import type { Show } from "../types/show.types"

interface Props {
  show: Show
}

const ShowTechnicalDetailsCard = ({ show }: Props) => {
  return (
    <section className="w-full rounded-xl border border-grey/25 bg-background-100/30 p-6 text-primary-50">
      <h2 className="text-xl font-bold border-b border-grey/20 pb-4 mb-4">
        Detalles Técnicos
      </h2>

      <div className="space-y-5">
        <div>
          <p className="mb-1 text-sm text-grey">Géneros</p>
          <div className="flex flex-wrap gap-1.5">
            {show.genres.map((genre) => (
              <span
                key={genre}
                className="rounded bg-grey/15 px-2 py-1 text-xs font-semibold text-primary-50 ring-1 ring-grey/10"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-grey">Cadena</p>
          <p className="font-medium text-primary-50">{show.network}</p>
        </div>

        <div>
          <p className="text-sm text-grey">Año de Lanzamiento</p>
          <p className="font-medium text-primary-50">{show.year}</p>
        </div>

        <div>
          <p className="text-sm text-grey">Estado</p>
          
          {show.status === 'Running' && (
            <p className="flex items-center gap-1.5 font-medium text-primary-200">
              <span className="size-2 rounded-full bg-secondary-400 animate animate-pulse" />
              En Emisión
            </p>
          )}

          {(show.status === 'Ended' || show.status === 'Unknown') && (
            <p className="flex items-center gap-1.5 font-medium text-primary-50">Finalizado</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ShowTechnicalDetailsCard