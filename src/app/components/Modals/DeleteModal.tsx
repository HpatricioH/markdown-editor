import Button from '@/core/utils/Button'
import { roboto } from '@/app/ui/fonts'
import Modal from './Modal'
import { deleteDocument } from '@/app/lib/data/data'
import { useRouter } from 'next/navigation'

interface DeleteModalProps {
  setDeleteDocModal: (value: boolean) => void
  id: string
  documentName: string | string[] | undefined
}

export default function DeleteModal ({ setDeleteDocModal, id, documentName }: DeleteModalProps) {
  const router = useRouter()

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'deleteModal') {
      setDeleteDocModal(false)
    }
  }

  async function deleteDocuments () {
    if (id) {
      const response = await deleteDocument({ id })
      router.push('/')
      console.log(response)
    }
  }

  return (
    <Modal
      modalId="deleteModal"
      handleClose={handleClose} >
      <h1 className='normal-case text-dark-gray dark:text-[#FFF] font-bold text-xl tracking-[0.07rem] leading-[0.938rem]'>
        Delete this document?
      </h1>
      <p className='text-light-gray-3 dark:text-light-gray-2 font-normal text-[1.01rem] tracking-[0.05rem] leading-[1.8rem] line-clamp-3'>
        Are you sure you want to delete <span>&apos;{documentName ?? 'undefined.md'}&apos;</span> document and its contents? This action cannot be revered.
      </p>
      <Button className={`${roboto.className} h-[3rem] text-base`} onClick={() => { deleteDocuments() }}>
        Confirm & Delete
      </Button>
    </Modal>
  )
}
