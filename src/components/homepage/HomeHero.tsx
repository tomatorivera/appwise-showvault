import Lineicons from "@lineiconshq/react-lineicons"
import Button from "../shared/Button"
import { Books2Solid, MenuCheesburgerSolid } from "@lineiconshq/free-icons"
import { useNavigate } from "react-router-dom"

interface Props {
  className?: string
}

const HomeHero = ({ className = "" }: Props) => {
  const navigate = useNavigate();

  return (
    <header
      className={`flex flex-col gap-10 text-primary-50 py-30 max-w-lg mx-auto ${className}`}
    >
      <section className="grid place-content-center text-center px-4">
        <h1 className="font-bold font-zalando-expanded text-4xl mb-2">
          ShowVault
        </h1>
        <p className="text-grey">
          Explorá series, obtené información, guardá tus favoritas y organizá tu
          progreso.
        </p>
      </section>
      <section className="flex flex-col gap-3 md:flex-row md:justify-center">
        <Button
          style="primary"
          className="md:w-1/2"
          onClick={() => navigate('/shows')}
        >
          <Lineicons icon={Books2Solid} size={20} />
          Explorar series
        </Button>
        <Button
          style="secondary"
          className="md:w-1/2"
          onClick={() => navigate('/my-list')}
        >
          <Lineicons icon={MenuCheesburgerSolid} size={20} />
          Ver mi lista
        </Button>
      </section>
    </header>
  )
}

export default HomeHero