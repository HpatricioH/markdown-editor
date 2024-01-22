'use client'
import React from 'react'
import { useVisibilityBar } from '@/app/lib/store/useVisibilityBar'
import HidePreviewSvg from '@/core/svg/HidePreviewSvg'
import PreviewSvg from '@/core/svg/PreviewSvg'

export default function VisibilityBar ({ title }: { title: string }) {
  const { isPreview, setIsPreview } = useVisibilityBar()

  return (
    <section className='w-full flex justify-between p-3 dark:bg-dark-gray-3 dark:text-light-gray-2 bg-light-gray'>
      <h4 className='uppercase font-bold text-base tracking-wider'>
        {title}
      </h4>
      <div
        className={`${title === 'Markdown' ? 'sm:hidden' : 'inline-block'} self-center cursor-pointer`}>
        {
          isPreview
            ? <HidePreviewSvg
              className='hover:fill-orange fill-light-gray-3 self-center'
              onClick={() => { setIsPreview(!isPreview) }} />
            : <PreviewSvg
              className='hover:fill-orange fill-light-gray-3 self-center'
              onClick={() => { setIsPreview(!isPreview) }} />
        }
      </div>
    </section>
  )
}
