import { Search1Outlined } from "@lineiconshq/free-icons"
import Lineicons from "@lineiconshq/react-lineicons"

interface Props {
  value: string,
  className?: string
  onChange: (value: string) => void,
  onSubmit?: (value: string) => void
}

const SearchBar = ({ value, className = "", onChange, onSubmit }: Props) => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        flex items-center justify-center gap-1 
        bg-background-100 border border-gray-500 rounded-md px-2 py-1 
        hover:border-gray-400 focus-within:border-gray-400 
        hover:[&_svg]:text-primary-50 focus-within:[&_svg]:text-primary-50
        transition-colors 
        ${className}`}
    >
      <Lineicons
        icon={Search1Outlined}
        className="text-gray-400 transition-colors"
      />
      <input
        type="text"
        placeholder="Busca una serie..."
        name="search"
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent focus:outline-0 focus:border-0 p-1 text-primary-50"
      />
    </form>
  )
}

export default SearchBar