import { Home2Solid, XmarkCircleOutlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import Button from '../../shared/ui/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="grid place-items-center overflow-hidden bg-background-200 px-4 py-15 text-primary-50 min-h-[calc(100vh-81px)]">
      <section className="relative flex w-full max-w-xl flex-col items-center text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-primary-500)_16%,transparent),transparent_55%)]" />

        <p className="select-none text-[8rem] font-black leading-none text-grey/20 md:text-[10rem] animate animate-bounce-soft">
          404
        </p>

        <h1 className="-mt-3 text-xl font-extrabold md:text-2xl">
          Lo sentimos, la página que buscas no existe.
        </h1>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-grey">
          Es posible que el enlace esté roto o que el contenido haya sido
          movido. ¿Quieres volver a explorar nuestro catálogo?
        </p>

        <div className="mt-8 flex justify-center w-full max-w-md flex-col gap-3 sm:flex-row">
          <Button style="primary" onClick={() => navigate('/')}>
            <Lineicons icon={Home2Solid} size={20} />
            Volver al inicio
          </Button>

          <Button style="secondary">
            <Lineicons icon={XmarkCircleOutlined} size={20} />
            Reportar un problema
          </Button>
        </div>
      </section>
    </main>
  )
}

export default NotFound
