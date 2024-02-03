import Button from '@/core/utils/Button'
import Modal from './Modal'
import { roboto } from '@/app/ui/fonts'

export default function UserDeleteModal (
  { setUserDeleteModal }:
  { setUserDeleteModal: (value: boolean) => void }) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'UserDeleteModal') {
      setUserDeleteModal(false)
    }
  }

  return (
    <Modal
      modalId="UserDeleteModal"
      handleClose={handleClose} >
      <h1 className='normal-case text-dark-gray dark:text-[#FFF] font-bold text-xl tracking-[0.07rem] leading-[0.938rem]'>
        No Document Selected!
      </h1>
      <p className='text-light-gray-3 dark:text-light-gray-2 font-normal text-[1.01rem] tracking-[0.05rem] leading-[1.5rem]'>
        Please select a document and try again.
      </p>
      <Button
          onClick={() => { setUserDeleteModal(false) }}
          className={`${roboto.className} h-[3rem] `}>
          Ok
      </Button>
    </Modal>
  )
}
