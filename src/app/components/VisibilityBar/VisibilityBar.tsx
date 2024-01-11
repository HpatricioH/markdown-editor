'use client'
import React from 'react'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'
import HidePreviewSvg from '@/core/svg/HidePreviewSvg'
import PreviewSvg from '@/core/svg/PreviewSvg'

export default function VisibilityBar () {
  const { isPreview, setIsPreview } = useVisibilityBar()

  return (
    <section className='w-full flex justify-between p-3 dark:bg-dark-gray-3 dark:text-light-gray-2 bg-light-gray'>
      <h4 className='uppercase font-bold text-base tracking-wider'>
        {`${isPreview ? 'Preview' : 'Markdown'}`}
      </h4>
      {
        isPreview
          ? <HidePreviewSvg
            className='hover:fill-orange fill-light-gray-3 self-center'
            onClick={() => { setIsPreview(!isPreview) }}/>
          : <PreviewSvg
            className='hover:fill-orange fill-light-gray-3 self-center'
            onClick={() => { setIsPreview(!isPreview) }}/>
      }
    </section>
  )
}
