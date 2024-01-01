'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Header () {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <header className="left-0 top-0 w-full flex justify-around bg-[#2B2D31] text-white text-sm">
      <div className='flex-grow-1 flex justify-center items-center bg-[#35393F] pb-6 pt-6 w-[3.9rem]'>
        <Image
          src={'/icons/icon-menu.svg'}
          alt='Menu Icon'
          width={18}
          height={18}
          onClick = {() => { toggleSidebar() }}
        />
      </div>
      <nav className='flex flex-1 flex-wrap gap-2 justify-between items-center px-2'>
        <div className='flex gap-2'>
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
            <Image
              src={'/icons/icon-delete.svg'}
              alt='Delete Icon'
              width={18}
              height={18}
              className='flex-grow-1'
            />
          </div>
          <div className='bg-[#E46643] rounded-md p-3'>
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
    </header>
  )
}
