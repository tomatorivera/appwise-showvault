import Button from './Button'

interface Props {
  page: number
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
  className?: string
}

const Paginator = ({
  page,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  className = '',
}: Props) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 py-10 ${className}`}
    >
      <Button style="secondary" onClick={onPrev} disabled={!hasPrev}>
        Anterior
      </Button>
      <span className="text-grey">{page + 1}</span>
      <Button style="secondary" onClick={onNext} disabled={!hasNext}>
        Siguiente
      </Button>
    </div>
  )
}

export default Paginator
