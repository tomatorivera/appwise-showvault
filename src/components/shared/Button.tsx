import type React from "react"

type Props = React.ComponentProps<'button'> & {
  children: React.ReactNode,
  style: "primary" | "secondary",
  className?: string,
}

const Button = ({ children, style, className = "", ...props }: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style === 'primary' ? 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600' : 'bg-background-100 hover:bg-neutral-800 focus:bg-neutral-800'} font-semibold px-3 py-3 rounded-md text-white transition-colors cursor-pointer flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button