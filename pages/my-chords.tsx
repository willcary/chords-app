import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Dsus2.png'

export default function MyChords() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>My Chords</h1>
        <p>
          <a href='/api/auth/login'>Login</a>
        </p>
        <p>
          This will be a list of added chords to practice from All Chords page.
        </p>
        <p>Play on!</p>
        <Image src={Logo} alt='logo' className='mx-auto mt-4'></Image>

        <p>
          <a href='/api/auth/logout'>logout</a>
        </p>
      </main>
    </div>
  )
}
