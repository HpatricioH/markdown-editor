import { fetchDocuments } from '@/app/lib/data/data'
import Image from 'next/image'
import React from 'react'

export default async function Documents () {
  const documents = await fetchDocuments()

  console.log(documents)

  return (
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
  )
}
