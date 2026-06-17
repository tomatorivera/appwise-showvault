import { ChevronDownCircleOutlined, Funnel1Solid } from "@lineiconshq/free-icons"
import Lineicons from "@lineiconshq/react-lineicons"
import SearchBar from "../../shared/ui/SearchBar"

interface Props {
  value: string,
  onChange: (value: string) => void
}

const BrowseHero = ({ value, onChange }: Props) => {
  return (
    <header className="max-w-6xl mx-auto text-primary-50 py-10">
      <section className="mb-10">
        <div className="flex items-center gap-2">
          <Lineicons
            icon={ChevronDownCircleOutlined}
            size={30}
            className="animate-bounce-soft text-primary-300"
          />
          <h1 className="font-semibold font-zalando-expanded text-3xl">
            Explorar series
          </h1>
        </div>

        <p className="text-grey mt-2.5">
          Descubre tu próxima obsesion cinematográfica entre miles de títulos
        </p>
      </section>

      <section className="
          flex flex-col gap-2 
          lg:bg-background-100/45 lg:p-4 lg:flex-row-reverse lg:justify-between 
          lg:border lg:border-gray-600 lg:rounded-md
        "
      >
        <SearchBar className="lg:w-87.5" value={value} onChange={onChange} />

        <section className="flex gap-2">
          <div className="hidden lg:flex items-center gap-1 lg:me-2">
            <Lineicons icon={Funnel1Solid} size={20} />
            <p>Filtros:</p>
          </div>
          <select name="genre" id="genre" className="w-1/2 bg-background-100 border border-gray-500 rounded-md p-3">
            <option value="all">Todos los géneros</option>
            <option value="genero-1">Genero 1</option>
            <option value="genero-2">Genero 2</option>
            <option value="genero-3">Genero 3</option>
          </select>
          <select name="status" id="status" className="w-1/2 bg-background-100 border border-gray-500 rounded-md p-3">
            <option value="all">Cualquier estado</option>
            <option value="ended">Terminada</option>
            <option value="running">En emisión</option>
          </select>
        </section>
      </section>
    </header>
  )
}

export default BrowseHero