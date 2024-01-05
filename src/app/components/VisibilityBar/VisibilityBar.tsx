'use client'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'
import Image from 'next/image'
import React from 'react'

export default function VisibilityBar () {
  const { isPreview, setIsPreview } = useVisibilityBar()

  return (
    <section className='w-full flex justify-between p-3 dark:bg-dark-gray-3 dark:text-light-gray-2 bg-light-gray-1/2'>
      <h4 className='uppercase font-bold text-base tracking-wider'>
        {`${isPreview ? 'Preview' : 'Markdown'}`}
      </h4>
      <Image
        src={isPreview ? '/icons/icon-hide-preview.svg' : '/icons/icon-show-preview.svg'}
        alt={isPreview ? 'Hide preview' : 'Show preview'}
        width={25}
        height={5}
        className='flex-grow-1 p-1'
        onClick={() => { setIsPreview(!isPreview) }}
      />
    </section>
  )
}
