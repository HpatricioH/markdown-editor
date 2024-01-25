import { fetchDocuments } from '@/app/lib/data/data'
import React from 'react'
import DocumentsClientSide from './DocumentsClientSide'

export default async function Documents ({ userId }: { userId: string }) {
  let document = null

  if (userId) {
    document = await fetchDocuments({ userId })
  }

  return (
    <div className='flex flex-col w-full gap-4 '>
      <DocumentsClientSide documents={document} />
    </div>
  )
}
