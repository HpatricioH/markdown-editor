import React from 'react'
import LayoutHolder from '../components/Layout/LayoutHolder'
import Header from '../components/Header/Header'
import VisibilityBar from '../components/VisibilityBar/VisibilityBar'
import MarkDownEditor from '../components/MarkDownEditor/MarkDownEditor'

export default function page () {
  return (
    <>
      <LayoutHolder />
      <main id='main' className="flex flex-col items-center justify-between transition-transform overflow-y-hidden duration-500">
      <Header />
        <VisibilityBar />
        <div className="z-10 w-full items-center justify-between">
          <MarkDownEditor />
        </div>
      </main>
    </>
  )
}
