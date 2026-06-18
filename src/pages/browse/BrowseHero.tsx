import {
  ChevronDownCircleOutlined,
  Funnel1Solid,
} from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import SearchBar from '../../shared/ui/SearchBar'
import type {
  ShowFilter,
  ShowFilterKey,
} from '../../features/show/types/show.types'

interface Props {
  value: string
  filters?: ShowFilter[]
  onValueChange: (value: string) => void
  onFilterChange?: (key: ShowFilterKey, value: string) => void
}

const BrowseHero = ({
  value,
  onValueChange,
  filters,
  onFilterChange,
}: Props) => {
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

      <section
        className="
          flex flex-col gap-2 
          lg:bg-background-100/45 lg:p-4 lg:flex-row lg:justify-between 
          lg:border lg:border-gray-600 lg:rounded-md
        "
      >
        <SearchBar
          // className="lg:w-87.5"
          value={value}
          onChange={onValueChange}
        />

        {filters && filters.length > 0 && (
          <section className="flex gap-2">
            <div className="hidden lg:flex lg:items-center lg:gap-1 lg:me-2">
              <Lineicons icon={Funnel1Solid} size={20} />
              <p>Filtros:</p>
            </div>

            {filters.map((filterGroup) => (
              <select
                name={filterGroup.key}
                id={filterGroup.key}
                key={filterGroup.key}
                onChange={(e) =>
                  onFilterChange?.(filterGroup.key, e.target.value)
                }
                className="bg-background-100 border border-gray-500 rounded-md p-3"
              >
                <option value="all">Todos</option>
                {filterGroup.values.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            ))}
          </section>
        )}
      </section>
    </header>
  )
}

export default BrowseHero
