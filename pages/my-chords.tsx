import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Dsus2.png'
import Link from 'next/link'
import UserChords from '@/components/user-chords/UserChords'

export default function MyChords() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>My Chords</h1>
        <p>
          <Link href='/api/auth/login?returnTo=/my-chords'>Login</Link>
        </p>
        <p>
          This will be a list of added chords to practice from All Chords page.
        </p>
        <p>Play on!</p>
        <Image
          src={Logo}
          alt='logo'
          className='mx-auto mt-4'
          priority={true}
        ></Image>

        <p>
          <Link href='/api/auth/logout?returnTo=/my-chords'>logout</Link>
        </p>
        <br />
        <hr />
        <br />
        <UserChords />
      </main>
    </div>
  )
}
