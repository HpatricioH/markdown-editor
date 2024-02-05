'use client'

import { useSideBar } from '@/app/lib/store/useSideBar'
import Image from 'next/image'
import HeaderForm from './HeaderForm'
import { useSession } from 'next-auth/react'
import { useEditorInput } from '@/app/lib/store/useEditorInput'
import { useSelectedDocument } from '@/app/lib/hook/useSelectedDocument'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import DeleteModal from '../Modals/DeleteModal'
import HeaderUnauthenticated from '../HeaderUnauthenticated/HeaderUnauthenticated'
import AlertModal from '../Modals/AlertModal'
import UserDeleteModal from '../Modals/UserDeleteModal'

export default function Header () {
  const { data, status } = useSession()
  const { isOpen, setIsOpen } = useSideBar()
  const { markdownInput } = useEditorInput()
  const [deleteDocModal, setDeleteDocModal] = useState(false)
  const [alertModal, setAlertModal] = useState(false)
  const [userDeleteModal, setUserDeleteModal] = useState(false)
  const { id } = useParams()
  // @ts-expect-error - sub is not defined in the type definition
  const userId = data?.user?.id as string
  const { documentSelected } = useSelectedDocument({ id: id as string })
  const documentName = (documentSelected as { name: string }).name

  console.log(data)

  const toggleSidebar = () => {
    const main = document.getElementById('main')
    const sidebar = document.getElementById('sidebar')

    const isOpen = main?.classList.toggle('open')
    sidebar?.classList.toggle('openSidebar')

    setIsOpen(isOpen ?? false)
  }

  return (
    <section
      className="flex justify-around bg-dark-gray-2 text-white text-sm w-full"
      id='header'>
      <div
        id='hamburger-menu'
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
            ? <HeaderForm
                id={id}
                markdownInput={markdownInput}
                userId={userId}
                documentName={documentName}
                setDeleteDocModal={setDeleteDocModal}
                setUserDeleteModal={setUserDeleteModal} />
            : <HeaderUnauthenticated
                setAlertModal={setAlertModal}/>
        }
      </nav>
      {deleteDocModal &&
        <DeleteModal
          setDeleteDocModal={setDeleteDocModal}
          documentName={documentName}
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          id={id?.toString()} />
      }
      {
        alertModal &&
        <AlertModal
          setAlertModal={setAlertModal} />
      }
      {
        userDeleteModal &&
        <UserDeleteModal
          setUserDeleteModal={setUserDeleteModal} />
      }
    </section>
  )
}
