interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button ({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={'bg-orange hover:bg-orange-light text-white rounded flex items-center justify-center gap-2 ' + className}
    >
      {children}
    </button>
  )
}
