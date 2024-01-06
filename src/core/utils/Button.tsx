interface ButtonProps {
  children: React.ReactNode
}

export default function Button ({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-orange hover:bg-orange-light text-white w-full py-2 px-4 rounded flex items-center justify-center gap-2"
    >
      {children}
    </button>
  )
}
