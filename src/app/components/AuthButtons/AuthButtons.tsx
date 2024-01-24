'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Button from '@/core/utils/Button'
import Link from 'next/link'

export default function AuthButtons () {
  const { data } = useSession()

  return (
    <>
    {data
      ? <Button className='w-full py-2 px-4' onClick={() => { signOut() }} >
        Sign Out
      </Button>
      : <Link
          href={'/api/auth/signin'}
          className={'bg-orange hover:bg-orange-light text-white w-full py-2 px-4 rounded flex items-center justify-center gap-2'}>
          Sign In
      </Link>
    }
    </>
  )
}
