import { fetchADocument } from '@/app/lib/data/data'
import Image from 'next/image'
import React from 'react'

export default async function HeaderForm ({ id }: { id?: string | string[] | undefined }) {
  const document = await fetchADocument({ documentId: id as string })
  const { name } = document

  return (
    <form className='flex gap-2 w-[30%]' >
      <Image
        src={'/icons/icon-document.svg'}
        alt='Document Icon'
        width={18}
        height={18}
        className='flex-grow-1'
      />
      <input
        className='lowercase outline outline-0 focus:outline-0 bg-dark-gray-2 cursor-pointer hover:border-b-2 caret-orange w-full'
        defaultValue={name}
        />
    </form>
  )
}
