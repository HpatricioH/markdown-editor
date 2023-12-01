'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function LoginForm () {
  const { data, status } = useSession()

  if (status === 'loading') return <h1>Loading...</h1>

  if (data) {
    redirect('/')
  }

  return (
    <div className="rounded-lg border bg-white text-card-foreground shadow-sm mx-auto max-w-sm md:w-full md:max-w-lg">
      <div className="flex flex-col px-6 pt-6 space-y-1 ">
        <Image
          src='/logos/logoLogin.svg'
          alt='Markdown Editor Logo'
          width={400}
          height={400}
          className='self-center mb-6'
          priority/>
        <p className="text-sm text-[#2B2D31]">Please enter your username and password to log in.</p>
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2B2D31]" htmlFor="username">
            Username
          </label>
          <input className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-black" id="username" placeholder="Username" required type="text" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#2B2D31]" htmlFor="password">
            Password
          </label>
          <input className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-black" id="password" required type="password" placeholder="Password"/>
        </div>
        <div className="flex items-center justify-center ">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#2B2D31] h-10 px-4 py-2 w-1/2 bg-black text-white my-5" type="submit" onClick={() => { alert('Coming Soon') }}>
            Login
          </button>
        </div>
        <div className="flex items-center justify-center my-4">
          <hr className="hidden md:block w-1/3 border-gray-300 dark:border-gray-600" />
          <span className="px-2 text-sm text-gray-500 dark:text-gray-400">Or log in with</span>
          <hr className="hidden md:block w-1/3 border-gray-300 dark:border-gray-600" />
        </div>
        <div className='flex items-center justify-center mt-4'>
          <button
            onClick={() => { signIn('google') }}
            type="button"
            className='text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#ededed] h-10 flex items-center justify-center bg-[#FFF] text-black px-4 py-2 rounded border mt-2 w-1/2'>
            <Image
              src='/icons/icon-google.svg'
              alt='Google Logo'
              width={24}
              height={24}
              className='mr-2'
              priority
            />
            Sign in with Google
          </button>

        </div>
      </div>
    </div>
  )
}
