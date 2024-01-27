'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { type DocumentProps } from '@/app/lib/data/data'
import { useSideBar } from '@/app/lib/store/useSideBar'

export default function DocumentsClientSide ({ documents }: { documents: DocumentProps[] | null }) {
  const { setIsOpen } = useSideBar()

  return (
    documents?.map((document) => (
      <Link
        className='flex gap-4 items-baseline cursor-pointer [&_.doc-title]:hover:text-orange [&_.doc-title]:text-light-gray-1/2 text-light-gray-3'
        key={document.id}
        href={`/${document.id}`}
        onClick={() => { setIsOpen(false) }}>
        <Image
          src={'/icons/icon-document.svg'}
          alt="icon document"
          width={15}
          height={4}
          className='self-center'
        />
        <div >
          <p>{document.createdAt}</p>
          <p className='doc-title'>{document.name}</p>
        </div>
      </Link>
    ))
  )
}
