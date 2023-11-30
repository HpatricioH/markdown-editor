'use client'

import { signOut } from 'next-auth/react'

export default function Header () {
  return (
    <header>
      <button onClick={() => { signOut() } }>Sign out</button>
    </header>
  )
}
