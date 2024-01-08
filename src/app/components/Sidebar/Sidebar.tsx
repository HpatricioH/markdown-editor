import Button from '@/core/utils/Button'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export default function Sidebar () {
  return (
    <aside
    id="sidebar"
    className='fixed top-0 left-0 w-[250px] bg-dark-gray-3 h-screen px-6 py-7 transition-all flex flex-col justify-between'>
      <section className='*:pb-8'>
        <Image
          src={'/logos/logo.svg'}
          alt="logo"
          width={150}
          height={150}
        />
        <p className='uppercase text-lg text-light-gray-4 font-semibold tracking-[0.06em]'>
          My Documents
        </p>
        <div>
          <Button >
            <Image
              src={'/icons/icon-add-document.svg'}
              alt="icon add document"
              width={13}
              height={13}
              className='pr-1'
            />
            New Document
          </Button>
        </div>
        <div className='flex text-light-gray-3 gap-4 items-center cursor-pointer [&_.doc-title]:hover:text-orange [&_.doc-title]:text-light-gray-1/2'>
          <Image
            src={'/icons/icon-document.svg'}
            alt="icon document"
            width={15}
            height={4}
            className='py-3'
          />
          <div >
            <p>01 April 2022</p>
            <p className='doc-title'>untitled-document.md</p>
          </div>
        </div>
      </section>
      <ThemeToggle />
     </aside>
  )
}
