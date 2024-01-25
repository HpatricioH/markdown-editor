import { createDocument } from '@/app/lib/data/data'
import DeleteSvg from '@/core/svg/DeleteSvg'
import Button from '@/core/utils/Button'
import Date from '@/core/utils/date'
import Image from 'next/image'
import React, { type FormEvent } from 'react'

interface HeaderFormProps {
  id?: string | string[] | undefined
  markdownInput: string
  userId: string
  documentName: string | undefined
}

export default function HeaderForm ({ id, markdownInput, userId, documentName }: HeaderFormProps) {
  async function onSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const currentDate = Date()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    await createDocument({ name, content: markdownInput, userId, createdAt: currentDate })
  }

  return (
    <form
      className='flex gap-2 w-full justify-between'
      onSubmit={onSubmit as (event: React.FormEvent<HTMLFormElement>) => void}>
      <div className='flex gap-4 flex-1 items-center pl-4'>
        <Image
          src={'/icons/icon-document.svg'}
          alt='Document Icon'
          width={19}
          height={10}
          className='h-5'
        />
        <input
          className='lowercase bg-dark-gray-2 cursor-pointer hover:border-b-2 caret-orange w-[30%] focus:outline-none'
          defaultValue={documentName}
          type='text'
          name='name'
        />
      </div>
      <div className='flex gap-2 items-center'>
        <DeleteSvg className='flex-grow-1 hover:fill-orange fill-light-gray-3' />
        <Button
          className='py-3 px-3'
          type='submit'
          >
          <Image
              src={'/icons/icon-save.svg'}
              alt='Save Icon'
              width={20}
              height={20}
            />
        </Button>
      </div>
    </form>
  )
}
