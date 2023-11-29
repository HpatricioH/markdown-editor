'use client'

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function LoginForm () {
  const { data, status } = useSession()

  if (status === 'loading') return <h1>Loading...</h1>

  if (data) {
    redirect('/')
  }

  return (
    <div>
      <button onClick={async () => await signIn('google')} type="button">Sign in with Google</button>
    </div>
  )
}
