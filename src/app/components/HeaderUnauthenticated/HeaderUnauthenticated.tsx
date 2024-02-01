import DeleteSvg from '@/core/svg/DeleteSvg'
import Image from 'next/image'

export default function HeaderUnauthenticated (
  { setAlertModal }:
  { setAlertModal: (value: boolean) => void }) {
  const handleClick = () => {
    setAlertModal(true)
  }

  return (
    <>
      <div className='flex gap-2 w-[30%]' >
        <Image
          src={'/icons/icon-document.svg'}
          alt='Document Icon'
          width={18}
          height={18}
          className='flex-grow-1'
        />
        <input
          className='lowercase outline outline-0 focus:outline-0 bg-dark-gray-2 cursor-pointer hover:border-b-2 caret-orange w-full'
          defaultValue='Untitled.md'
        />
      </div>
      <div className='flex'>
        <div
          id="unauthorize-delete-button"
          className='p-3'
          onClick={() => { handleClick() }}>
          <DeleteSvg className='flex-grow-1 hover:fill-orange fill-light-gray-3' />
        </div>
        <div className='bg-orange hover:bg-orange-light rounded-md p-3' onClick={() => { handleClick() }}>
          <Image
            src={'/icons/icon-save.svg'}
            alt='Save Icon'
            width={18}
            height={18}
            className='flex-grow-1'
          />
        </div>
      </div>
    </>
  )
}
