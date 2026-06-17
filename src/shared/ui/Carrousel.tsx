interface Props<T> {
  items: T[]
  className?: string

  renderItem: (item: T) => React.ReactNode
}

const Carrousel = <T,>({ items, className = '', renderItem }: Props<T>) => {
  return (
    <section
      className={`w-full overflow-x-hidden py-2 max-w-6xl mx-auto mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] ${className}`}
    >
      <div
        className="
          flex gap-4 overflow-x-auto py-3
          snap-x snap-mandatory
          scroll-smooth
          scrollbar-none [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((item) => renderItem(item))}
      </div>
    </section>
  )
}

export default Carrousel
