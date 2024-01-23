'use client'

import React from 'react'
import LayoutHolder from '../components/Layout/LayoutHolder'
import Header from '../components/Header/Header'
import MarkDownEditor from '../components/MarkDownEditor/MarkDownEditor'
import { useParams } from 'next/navigation'

export default function Page () {
  const { id } = useParams()

  return (
    <>
      <LayoutHolder />
      <main id='main' className="flex flex-col items-center justify-between transition-transform overflow-y-hidden duration-500">
      <Header />
        <div className="z-10 w-full items-center justify-between">
          <MarkDownEditor id={id}/>
        </div>
      </main>
    </>
  )
}
