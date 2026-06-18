import {
  Locked2Solid,
  Paperclip1Solid,
  Spinner3Solid,
} from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-lineicons'
import { useAppStore } from '../../../app/appStore'
import Button from '../../../shared/ui/Button'

const LoginForm = () => {
  const login = useAppStore((state) => state.login)
  const isLoggingIn = useAppStore((state) => state.isLoggingIn)
  const error = useAppStore((state) => state.error)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    login(formData.get('email') as string, formData.get('pass') as string)
  }

  return (
    <section className="w-full rounded-xl border border-gray-400/50 bg-background-100/70 p-6 shadow-2xl shadow-black/30">
      <h2 className="mb-6 text-2xl font-bold border-b border-gray-400/50 pb-2">
        Ingresar
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <section>
          <label className="mb-1.5 block text-sm font-semibold text-grey">
            Correo electrónico
          </label>

          <div className="flex h-10 items-center gap-2 rounded-md border border-grey/25 bg-background-200 px-3 hover:border-gray-400 focus-within:border-gray-400 hover:[&_svg]:text-primary-50 focus-within:[&_svg]:text-primary-50 transition-all">
            <Lineicons
              icon={Paperclip1Solid}
              size={20}
              className="text-grey transition-colors"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              aria-label="Correo electrónico"
              className="w-full bg-transparent text-sm text-primary-50 outline-none placeholder:text-grey/50 transition-colors"
            />
          </div>
        </section>

        <section>
          <div className="mb-1.5 flex items-center justify-between gap-3">
            <label className="text-sm font-semibold text-grey">
              Contraseña
            </label>

            <a
              href="#"
              className="text-xs font-semibold text-primary-200 hover:text-primary-100 transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="flex h-10 items-center gap-2 rounded-md border border-grey/25 bg-background-200 px-3 hover:border-gray-400 focus-within:border-gray-400 hover:[&_svg]:text-primary-50 focus-within:[&_svg]:text-primary-50 transition-all">
            <Lineicons
              icon={Locked2Solid}
              size={20}
              className="text-grey transition-colors"
            />
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="••••••••"
              aria-label="Contraseña"
              className="w-full bg-transparent text-sm text-primary-50 outline-none placeholder:text-grey/50"
            />
          </div>
        </section>

        {!isLoggingIn && (
          <Button style="primary" type="submit" className="mt-5 w-full">
            Ingresar
          </Button>
        )}

        {isLoggingIn && (
          <Button style="secondary" className="mt-5 w-full" disabled={true}>
            <Lineicons icon={Spinner3Solid} className="animate animate-spin" />
            Ingresando...
          </Button>
        )}
      </form>

      {error && (
        <p className="mt-5 text-center text-red-500 font-semibold">{error}</p>
      )}

      <section className="mt-6 rounded-md border border-secondary-400/30 bg-secondary-900/30 p-4">
        <p className="mb-2 flex items-center gap-2 text-sm font-bold text-primary-100">
          <span className="flex size-5 items-center justify-center rounded-full bg-secondary-200 text-xs text-secondary-900">
            i
          </span>
          ACCESO DE DEMOSTRACIÓN
        </p>

        <p className="text-xs text-grey">
          Usa{' '}
          <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-primary-50">
            carlos@test.com
          </span>{' '}
          /{' '}
          <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-primary-50">
            1234
          </span>
        </p>

        <p className="text-xs text-grey mt-2">
          O también{' '}
          <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-primary-50">
            ana@test.com
          </span>{' '}
          /{' '}
          <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-primary-50">
            1234
          </span>
        </p>
      </section>
    </section>
  )
}

export default LoginForm
