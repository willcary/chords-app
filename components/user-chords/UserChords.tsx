'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

export default function UserChords() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    console.log(user)
  }

  return user ? (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <Link href='/api/auth/logout?returnTo=/my-chords'>logout</Link>
    </div>
  ) : (
    <p>
      You are logged out. Want to{' '}
      <Link href='/api/auth/login?returnTo=/my-chords'>Login</Link>?
    </p>
  )
}
