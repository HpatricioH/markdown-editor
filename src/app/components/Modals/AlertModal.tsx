import Modal from './Modal'
import { roboto } from '@/app/ui/fonts'
import Link from 'next/link'

export default function AlertModal (
  { setAlertModal }:
  { setAlertModal: (value: boolean) => void }) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'deleteModal') {
      setAlertModal(false)
    }
  }

  return (
    <Modal
      modalId="deleteModal"
      handleClose={handleClose} >
      <h1 className='normal-case text-dark-gray dark:text-[#FFF] font-bold text-xl tracking-[0.07rem] leading-[0.938rem]'>
        You are not logged in!
      </h1>
      <p className='text-light-gray-3 dark:text-light-gray-2 font-normal text-[1.01rem] tracking-[0.05rem] leading-[1.5rem]'>
        Please sign in and try again.
      </p>
      <Link
          href={'/api/auth/signin'}
          className={`${roboto.className} h-[3rem] text-base bg-orange hover:bg-orange-light text-white w-full py-2 px-4 rounded flex items-center justify-center gap-2`}>
          Sign In
      </Link>
    </Modal>
  )
}
