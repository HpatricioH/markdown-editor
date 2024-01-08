import { useTheme } from 'next-themes'
import Moon from '@/core/svg/Moon'
import Sun from '@/core/svg/Sun'

export const ThemeToggle = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { theme, setTheme } = useTheme() as { theme: string, setTheme: (theme: string) => void }

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='flex h-[3rem] rounded-md items-center gap-4'>
      <Moon className={`${theme === 'dark' ? 'fill-light-gray-1/2' : 'fill-light-gray-4'} `} />
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleFour"
            className="sr-only"
            onChange={handleToggle}
          />
          <div
            className={'box bg-light-gray-4 block h-6 w-12 rounded-full'}
          ></div>
          <div
            className={`dot absolute ${theme === 'dark' ? 'left-1' : 'right-1'
              } top-[0.25rem] flex h-[1.05rem] w-[1.05rem] items-center justify-center rounded-full bg-white transition-all duration-500`}
          ></div>
        </div>
      </label>
      <Sun className={`${theme === 'light' ? 'fill-light-gray-1/2' : 'fill-light-gray-4'} `} />
    </div>
  )
}
