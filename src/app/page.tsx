'use client'

import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession();

  console.log("Here is data: ", data)
  return (
    <main>
      <button onClick={() => signIn('google')}>Sign In</button>
    </main>
  )
}
