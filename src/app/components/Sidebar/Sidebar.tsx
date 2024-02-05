'use client'

import Button from '@/core/utils/Button'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'
import AuthButtons from '../AuthButtons/AuthButtons'
import Documents from './Documents/Documents'
import { Suspense } from 'react'
import { DocumentsSkeleton } from '@/app/ui/skeletons'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useSideBar } from '@/app/lib/store/useSideBar'

export default function Sidebar () {
  const { data: session, status } = useSession()
  const { setIsOpen } = useSideBar()
  const router = useRouter()
  // @ts-expect-error - sub is not defined in the type definition
  const userId = session?.user?.id as string

  console.log(userId)

  const handleNewDocument = () => {
    router.push('/')
    const main = document.getElementById('main')
    const sidebar = document.getElementById('sidebar')

    const isOpen = main?.classList.toggle('open')
    sidebar?.classList.toggle('openSidebar')

    setIsOpen(isOpen ?? false)
  }

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
          <Button className='w-full py-2 px-4' onClick={() => { handleNewDocument() }}>
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
        {
          status !== 'unauthenticated' && (
            <Suspense fallback={
              <>
                <DocumentsSkeleton />
                <DocumentsSkeleton />
              </>
              }>
              <Documents userId={userId}/>
            </Suspense>
          )
        }
      </section>
      <div>
        <ThemeToggle />
        <AuthButtons />
      </div>
     </aside>
  )
}
