interface Props {
  children: React.ReactNode,
  style?: "primary" | "secondary",
  className?: string
}

const Button = ({ children, style = "primary", className = "" }: Props) => {
  return (
    <button
      className={`${style === 'primary' ? 'bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-600' : 'bg-background-100 hover:bg-neutral-800 focus:bg-neutral-800'} font-semibold px-3 py-2 rounded-md text-white transition-colors cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}

export default Button