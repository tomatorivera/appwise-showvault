import { Home2Outlined, MenuCheesburgerSolid, Search2Outlined, User4Solid } from "@lineiconshq/free-icons"
import Lineicons from "@lineiconshq/react-lineicons"
import Button from "../Button"
import SearchBar from "../SearchBar"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="bg-background-200 relative border-b border-gray-400">
      <nav className="max-w-6xl mx-auto px-3 py-4 flex justify-between items-center 6xl:px-0 text-primary-50">
        <section>
          <h1 className="font-bold text-xl font-zalando-expanded">ShowVault</h1>
        </section>
        <button
          onClick={toggleMenu}
          className="md:hidden grid place-content-center cursor-pointer ps-6"
        >
          <div
            className={`
              relative w-6.5 h-1 rounded-full bg-primary-50 
              transition-all duration-200 before:content-[''] 
              before:absolute before:left-0 before:w-6.5 before:h-1 before:rounded-full before:bg-primary-50 before:transition-all before:duration-200 
              after:content-[''] after:absolute after:left-0 after:w-6.5 after:h-1 after:rounded-full after:bg-primary-50 after:transition-all after:duration-200 
              ${isMenuOpen ? 'bg-transparent before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45' : 'before:-translate-y-2 after:translate-y-2'}
            `}
          ></div>
        </button>
        <section
          className={`
            ${isMenuOpen ? 'block' : 'hidden'} flex-1 md:flex md:justify-between
            absolute md:relative 
            top-full left-0 w-full p-4 md:w-auto md:p-0
          bg-background-200 border-t border-gray-40 md:bg-transparent md:border-t-0 
            peer-focus:block
          `}
        >
          <ul className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-3 my-4 md:my-0 md:gap-4 md:mx-0 md:ps-6">
            <li>
              <a
                href="#"
                className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
              >
                <Lineicons icon={Home2Outlined} size={20} />
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
              >
                <Lineicons icon={Search2Outlined} size={20} />
                Explorar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
              >
                <Lineicons icon={MenuCheesburgerSolid} size={20} />
                Mi lista
              </a>
            </li>
          </ul>
          <div className="max-w-6xl mx-auto pt-4 md:pt-0 flex flex-col md:flex-row gap-2 md:gap-2 md:mx-0">
            <Button className="w-full md:w-auto flex items-center justify-center gap-2">
              <Lineicons icon={User4Solid} size={20} />
              Ingresar
            </Button>
            <SearchBar />
          </div>
        </section>
      </nav>
    </div>
  )
}

export default Navbar