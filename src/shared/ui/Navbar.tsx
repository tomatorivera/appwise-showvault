import {
  Home2Outlined,
  MenuCheesburgerSolid,
  Search2Outlined,
  User4Solid,
} from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import Button from '../../shared/ui/Button'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppStore } from '../../app/appStore'
import SearchBar from './SearchBar'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const isAuthenticated = useAppStore((state) => state.isAuthenticated)
  const logout = useAppStore((state) => state.logout)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    if (confirm('¿Está seguro de que desea cerrar sesión?')) {
      logout()
      navigate('/login')
    }
  }

  const handleSearch = () => {
    if (!search.trim()) return

    navigate(`/shows?q=${encodeURIComponent(search.trim())}`)
    setSearch('') // este componente no se suele rerenderizar
  }

  return (
    <div className="bg-background-200 relative border-b border-gray-500">
      <nav className="max-w-6xl mx-auto px-3 py-4 flex justify-between items-center 6xl:px-0 text-primary-50">
        <section>
          <h1 className="font-bold text-xl font-zalando-expanded">ShowVault</h1>
        </section>
        <button
          onClick={handleToggleMenu}
          className="lg:hidden grid place-content-center cursor-pointer ps-6"
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
            ${isMenuOpen ? 'block' : 'hidden'} flex-1 lg:flex lg:justify-between
            absolute lg:relative 
            top-full left-0 w-full p-4 lg:w-auto lg:p-0
          bg-background-200 border-t border-gray-500 lg:bg-transparent lg:border-t-0 
            peer-focus:block
            shadow-2xl shadow-black lg:shadow-none
            z-20
          `}
        >
          <ul className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-3 my-4 lg:my-0 lg:gap-4 lg:mx-0 lg:ps-6">
            <li>
              <Link
                to="/"
                className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
              >
                <Lineicons icon={Home2Outlined} size={20} />
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/shows"
                className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
              >
                <Lineicons icon={Search2Outlined} size={20} />
                Explorar
              </Link>
            </li>
            <li>
              <Link
                to="/my-list"
                className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
              >
                <Lineicons icon={MenuCheesburgerSolid} size={20} />
                Mi lista
              </Link>
            </li>
          </ul>
          <div className="max-w-6xl mx-auto pt-4 lg:pt-0 flex flex-col lg:flex-row gap-2 lg:gap-2 lg:mx-0">
            {!isAuthenticated && (
              <Button
                className="w-full lg:w-auto"
                style="primary"
                onClick={() => navigate('/login')}
              >
                <Lineicons icon={User4Solid} size={20} />
                Ingresar
              </Button>
            )}

            {isAuthenticated && (
              <Button
                className="w-full lg:w-auto"
                style="secondary"
                onClick={handleLogout}
              >
                <Lineicons icon={User4Solid} size={20} />
                Cerrar sesión
              </Button>
            )}

            <SearchBar
              value={search}
              onChange={setSearch}
              onSubmit={handleSearch}
            />
          </div>
        </section>
      </nav>
    </div>
  )
}

export default Navbar
