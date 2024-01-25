'use client'

import { useSideBar } from '@/app/lib/store/useSideBar'
import DeleteSvg from '@/core/svg/DeleteSvg'
import Image from 'next/image'
import HeaderForm from './HeaderForm'
import { Suspense } from 'react'
import { useSession } from 'next-auth/react'
import { useEditorInput } from '@/app/lib/store/useEditorInput'
import { useSelectedDocument } from '@/app/lib/hook/useSelectedDocument'

export default function Header ({ id }: { id?: string | string[] | undefined }) {
  const { data, status } = useSession()
  const { isOpen, setIsOpen } = useSideBar()
  const { markdownInput } = useEditorInput()
  const userId = data?.user?.sub as string
  const { documentSelected } = useSelectedDocument({ id: id as string })
  const documentName = (documentSelected as { name: string }).name

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
          src={isOpen ? '/icons/icon-close.svg' : '/icons/icon-menu.svg'}
          alt='Menu Icon'
          width={18}
          height={18}
        />
      </div>
      <nav className='flex flex-1 flex-wrap gap-2 justify-between items-center px-2 *:cursor-pointer w-full'>
        {
          status !== 'unauthenticated'
            ? <Suspense fallback={<div>loading...</div>}>
              <HeaderForm
                id={id}
                markdownInput={markdownInput}
                userId={userId}
                documentName={documentName}/>
            </Suspense>
            : <>
              <div className='flex gap-2 w-[30%]' >
                <Image
                  src={'/icons/icon-document.svg'}
                  alt='Document Icon'
                  width={18}
                  height={18}
                  className='flex-grow-1'
                />
                <input
                  className='lowercase outline outline-0 focus:outline-0 bg-dark-gray-2 cursor-pointer hover:border-b-2 caret-orange w-full'
                  defaultValue='Untitled'
                  />
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
            </>
        }
      </nav>
    </section>
  )
}
