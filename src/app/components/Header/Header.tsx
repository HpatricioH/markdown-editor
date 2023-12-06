'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Header () {
  return (
    <header className="fixed left-0 top-0 w-full bg-[#35393F]">
      <nav className='flex flex-wrap gap-4 justify-around items-baseline '>
        <div className='flex-grow-1 bg-[#7C8187] pb-6 pt-8'>
          <Image
            src={'/icons/icon-menu.svg'}
            alt='Menu Icon'
            width={24}
            height={24}
          />
        </div>
        <Image
          src={'/icons/icon-document.svg'}
          alt='Document Icon'
          width={24}
          height={24}
          className='flex-grow-1'
        />
        <p>Welcome.md</p>
        <Image
          src={'/icons/icon-delete.svg'}
          alt='Delete Icon'
          width={24}
          height={24}
          className='flex-grow-1'
        />
        <Image
          src={'/icons/icon-save.svg'}
          alt='Save Icon'
          width={24}
          height={24}
          className='flex-grow-1'
        />
        <button onClick={() => { signOut() } }>Sign out</button>
      </nav>
    </header>
  )
}
