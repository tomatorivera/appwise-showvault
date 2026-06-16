import { useEffect } from "react";
import LoginForm from "../components/login/LoginForm"
import { useAppStore } from "../store/appStore"
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated)
      return

    const from = (location.state as { from?: string })?.from ?? '/'
    navigate(from, { replace: true })
  }, [isAuthenticated])

  return (
    <div
      className="
        bg-[radial-gradient(ellipse_90%_35%_at_15%_0%,color-mix(in_srgb,var(--color-primary-600)_55%,transparent)_0%,transparent_60%),radial-gradient(ellipse_70%_45%_at_15%_25%,color-mix(in_srgb,var(--color-primary-500)_18%,transparent)_0%,transparent_65%),linear-gradient(180deg,var(--color-background-100)_0%,var(--color-background-200)_18%,var(--color-background-200)_100%)]
        px-4 text-primary-50
        min-h-screen
        grid place-items-center
      "
    >
      <div className="mx-auto flex w-full max-w-sm flex-col items-center">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold font-zalando-expanded">
            ShowVault
          </h1>
          <p className="mt-1 text-sm text-grey">
            Tu archivo personal de series y películas.
          </p>
        </header>

        <LoginForm />

        <p className="mt-5 text-sm text-grey">
          ¿No tienes una cuenta?{' '}
          <a
            href="#"
            className="font-semibold text-primary-200 hover:text-primary-100 transition-colors"
          >
            Regístrate gratis
          </a>
        </p>
        <button onClick={() => navigate('/')} className="mt-3 text-sm font-semibold text-primary-200 hover:text-primary-100 transition-colors cursor-pointer">
          ← Volver al inicio
        </button>
      </div>
    </div>
  )
}

export default Login