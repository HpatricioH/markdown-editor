'use client'

import Sidebar from '../Sidebar/Sidebar'
import { useSideBar } from '@/app/lib/store/useSideBar'

export default function LayoutHolder () {
  const { isOpen } = useSideBar()

  return (
    <>
      {isOpen ? <Sidebar /> : null}
    </>
  )
}
