const Footer = () => {
  return (
    <footer className="
        bg-background-100/40 border-t border-gray-500 text-center py-5 
        grid grid-cols-1 place-items-center gap-2
      "
    >
      <p className="font-bold font-zalando-expanded text-xl text-primary-50">
        ShowVault
      </p>
      <ul className="flex gap-6 text-grey">
        <li>
          <a
            href="#"
            className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
          >
            Privacidad
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
          >
            Términos
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative before:content-[''] before:absolute before:-bottom-0.5 before:w-0 before:h-px before:bg-primary-300 hover:before:w-full focus:before:w-full before:transition-all hover:text-primary-200 focus:text-primary-200 transition-colors flex items-center gap-2"
          >
            Contacto
          </a>
        </li>
      </ul>
      <p className="text-grey/50 mt-4 md:col-span-full">
        &copy; 2026 ShowVault. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
