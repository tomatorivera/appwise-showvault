interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`
        animate-pulse rounded-md
        bg-primary-500/10
        ${className}
      `}
    />
  )
}
