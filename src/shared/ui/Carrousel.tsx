interface Props<T> {
  items: T[]
  className?: string

  renderItem: (item: T) => React.ReactNode
}

const Carrousel = <T,>({ items, className = '', renderItem }: Props<T>) => {
  return (
    <section className={`relative w-full py-2 max-w-6xl mx-auto ${className}`}>
      {/* Gradientes encima del scroll, no interactúan con el mouse */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-linear-to-r from-background-200 to-transparent rounded-tl-4xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-linear-to-l from-background-200 to-transparent rounded-tr-4xl" />

      <div className="flex gap-4 overflow-x-auto py-3 snap-x snap-mandatory scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden">
        {items.map((item) => renderItem(item))}
      </div>
    </section>
  )
}

export default Carrousel
