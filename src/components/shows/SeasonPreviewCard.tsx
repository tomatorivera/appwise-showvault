import Lineicons from "@lineiconshq/react-lineicons"
import type { Season } from "../../services/shows/show.types"
import { CameraMovie1Solid } from "@lineiconshq/free-icons"

interface Props {
  season: Season,
  className?: string
}

const SeasonPreviewCard = ({ season, className = "" }: Props) => {
  return (
    <article className={`relative bg-background-100 border border-primary-500/15 ${className}`}>
      <figure>
        <img src={season.image} alt="" className="w-full h-full" />
      </figure>

      <div className="p-2">
        <h3 className="font-semibold text-primary-50 text-lg">
          Temporada {season.number}
        </h3>
        <p className="text-grey text-sm">Estreno: {season.premiereDate}</p>
      </div>

      {!season.endDate && (
        <span className="absolute top-2 right-2 bg-tertiary-400/80 text-primary-50/80 text-sm rounded-md py-1 px-2 flex items-center gap-1">
          <Lineicons icon={CameraMovie1Solid} className="animate animate-pulse" size={20} /> En emisión
        </span>
      )}
    </article>
  )
}

export default SeasonPreviewCard