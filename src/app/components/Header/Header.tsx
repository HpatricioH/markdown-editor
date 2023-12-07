'use client'

import Image from 'next/image'

export default function Header () {
  return (
    <header className="fixed left-0 top-0 w-full flex justify-around bg-[#2B2D31] text-white">
      <div className='flex-grow-1 flex justify-center items-center bg-[#35393F] pb-8 pt-8 w-[3.9rem]'>
        <Image
          src={'/icons/icon-menu.svg'}
          alt='Menu Icon'
          width={24}
          height={24}
        />
      </div>
      <nav className='flex flex-1 flex-wrap gap-4 justify-between items-center px-5'>
        <div className='flex gap-4'>
          <Image
            src={'/icons/icon-document.svg'}
            alt='Document Icon'
            width={24}
            height={24}
            className='flex-grow-1'
          />
          <p className='lowercase'>Welcome.md</p>
        </div>
        <div className='flex gap-2'>
          <div className='p-4'>
            <Image
              src={'/icons/icon-delete.svg'}
              alt='Delete Icon'
              width={24}
              height={24}
              className='flex-grow-1'
            />
          </div>
          <div className='bg-[#E46643] rounded-md p-4'>
            <Image
              src={'/icons/icon-save.svg'}
              alt='Save Icon'
              width={24}
              height={24}
              className='flex-grow-1'
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
