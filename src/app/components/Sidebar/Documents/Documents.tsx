import { fetchDocuments } from '@/app/lib/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Documents ({ userId }: { userId: string }) {
  const documents = await fetchDocuments({ userId })

  return (
    <div className='flex flex-col w-full gap-4 '>
      {documents.map((document) => (
        <Link
          className='flex gap-4 items-baseline cursor-pointer [&_.doc-title]:hover:text-orange [&_.doc-title]:text-light-gray-1/2 text-light-gray-3'
          key={document.id}
          href={`/${document.id}`}>
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
      ))}
    </div>
  )
}
