import Image from 'next/image'
import React from 'react'

export default function VisibilityBar () {
  return (
    <section className='w-full flex justify-between p-3 dark:bg-[#1D1F22] dark:text-[#C1C4CB] bg-[#F5F5F5]'>
      <h4 className='uppercase font-bold text-base tracking-wider'>Markdown</h4>
      {/* <p>Preview</p> */}
      {/* <Image
        src={'/icons/icon-hide-preview.svg'}
        alt='Preview Icon'
        width={25}
        height={5}
        className='flex-grow-1 p-1'
      /> */}
      <Image
        src={'/icons/icon-show-preview.svg'}
        alt='Preview Icon'
        width={25}
        height={5}
        className='flex-grow-1 p-1'
      />
    </section>
  )
}
