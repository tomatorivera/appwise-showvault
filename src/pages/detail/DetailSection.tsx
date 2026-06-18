interface Props {
  title: string
  body?: string
  children?: React.ReactNode
  className?: string
}

const DetailSection = ({
  title,
  body = '',
  children,
  className = '',
}: Props) => {
  return (
    <article className={className}>
      <h2 className="text-primary-50 text-2xl font-semibold mb-2">{title}</h2>

      {body && <p className="text-grey">{body}</p>}

      {children && children}
    </article>
  )
}

export default DetailSection
