'use client'
import { signOut } from 'next-auth/react'

export default function SignOutButton () {
  return (
    <button
      className='flex-grow-1 flex justify-center items-center'
      onClick={() => { signOut() }}
    >
      Sign Out
    </button>
  )
}
