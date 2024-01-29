import { robotoSlab } from '@/app/ui/fonts'

interface ModalProps {
  children: React.ReactNode
  handleClose: (e: React.MouseEvent<HTMLDivElement>) => void
  modalId: string
}

export default function Modal ({ children, handleClose, modalId }: ModalProps) {
  return (
    <section
      id={modalId}
      className={`${robotoSlab.className} bg-[#c1c4cb3a] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out  `}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => { handleClose(e) }}>
      <div
        className='bg-[#FFF] dark:bg-dark-gray-3 rounded-md flex flex-col gap-6 absolute w-[18rem] top-[4.7rem] p-4 md:w-[23.9rem] md:p-7 md:top-[17rem]'>
        {children}
      </div>
    </section>
  )
}
