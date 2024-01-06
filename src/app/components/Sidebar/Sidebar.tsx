import Button from '@/core/utils/Button'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export default function Sidebar () {
  return (
    <aside
    id="sidebar"
    className='fixed top-0 left-0 w-[250px] bg-dark-gray-3 h-screen px-6 py-7 transition-all'>
      <Image
        src={'/logos/logo.svg'}
        alt="logo"
        width={150}
        height={150}
      />
      <p className='uppercase text-lg text-light-gray-4 font-semibold tracking-[0.06em] '>
        My Documents
      </p>
      <Button >
        <Image
          src={'/icons/icon-add-document.svg'}
          alt="icon add document"
          width={10}
          height={10}
        />
        New Document
      </Button>
      <div className='flex text-light-gray-3 gap-4 items-center'>
        <Image
          src={'/icons/icon-document.svg'}
          alt="icon document"
          width={15}
          height={4}
          className='py-3'
        />
        <div>
          <p>01 April 2022</p>
          <p className='text-light-gray-1/2'>untitled-document.md</p>
        </div>
      </div>
      <ThemeToggle />
     </aside>
  )
}
