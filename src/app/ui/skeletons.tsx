const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

export function SignInSkeleton () {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded-xl shadow-sm md:w-full md:max-w-lg bg-gray-100`}>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <input className="flex h-10 w-full rounded-md px-3 py-2 text-black bg-gray-200"/>
        </div>
        <div className="space-y-2">
          <input className="flex h-10 w-full rounded-md px-3 py-2 text-black bg-gray-200"/>
        </div>
        <div className="flex items-center justify-center ">
          <button className="inline-flex h-10 px-4 py-2 w-1/2 my-5 bg-gray-200">
          </button>
        </div>
        <div className="flex items-center justify-center my-4">
        </div>
        <div className='flex items-center justify-center mt-4'>
          <button
            className='inline-flex h-10 px-4 py-2 w-1/2 my-5 bg-gray-200'>
          </button>
        </div>
      </div>
    </div>
  )
}

export function DocumentsSkeleton () {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  )
}
