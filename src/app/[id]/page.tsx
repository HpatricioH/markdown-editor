'use client'

import React from 'react'
import LayoutHolder from '../components/Layout/LayoutHolder'
import Header from '../components/Header/Header'
import { redirect } from 'next/navigation'
import MarkDownEditor from '../components/MarkDownEditor/MarkDownEditor'
import { useSession } from 'next-auth/react'

export default function Page () {
  // Get user session
  const { data: session } = useSession()

  if (!session) {
    redirect('/')
  }

  return (
    <>
      <LayoutHolder />
      <main id='main' className="flex flex-col items-center justify-between transition-transform overflow-y-hidden duration-500">
      <Header />
        <div className="z-10 w-full items-center justify-between">
          <MarkDownEditor />
        </div>
      </main>
    </>
  )
}
