'use client'

import { useSideBar } from '@/app/lib/store/useSideBar'
import DeleteSvg from '@/core/svg/DeleteSvg'
import Image from 'next/image'

export default function Header () {
  const { isOpen, setIsOpen } = useSideBar()

  const toggleSidebar = () => {
    const main = document.getElementById('main')
    const sidebar = document.getElementById('sidebar')

    const isOpen = main?.classList.toggle('open')
    sidebar?.classList.toggle('openSidebar')

    setIsOpen(isOpen ?? false)
  }

  return (
    <section className="flex justify-around bg-dark-gray-2 text-white text-sm w-full">
      <div
        className='flex-grow-1 flex justify-center items-center bg-dark-gray pb-6 pt-6 w-[3.9rem] hover:bg-orange cursor-pointer'
        onClick = {() => { toggleSidebar() }}>
        <Image
          src={`${isOpen ? '/icons/icon-close.svg' : '/icons/icon-menu.svg'}`}
          alt='Menu Icon'
          width={18}
          height={18}
        />
      </div>
      <nav className='flex flex-1 flex-wrap gap-2 justify-between items-center px-2 *:cursor-pointer'>
        <div className='flex gap-2 hover:underline'>
          <Image
            src={'/icons/icon-document.svg'}
            alt='Document Icon'
            width={18}
            height={18}
            className='flex-grow-1'
          />
          <p className='lowercase'>Welcome.md</p>
        </div>
        <div className='flex'>
          <div className='p-3'>
            <DeleteSvg className='flex-grow-1 hover:fill-orange fill-light-gray-3'/>
          </div>
          <div className='bg-orange hover:bg-orange-light rounded-md p-3'>
            <Image
              src={'/icons/icon-save.svg'}
              alt='Save Icon'
              width={18}
              height={18}
              className='flex-grow-1'
            />
          </div>
        </div>
      </nav>
    </section>
  )
}
