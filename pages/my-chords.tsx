import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Dsus2.png'
import UserChords from '@/components/user-chords/UserChords'
import MyChordsSidebar from '@/components/user-chords/sidebar/MyChordsSidebar'

export default function MyChords() {
  return (
    <div>
      <Navbar />
      <main>
        <MyChordsSidebar />
        <h1>My Chords</h1>
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
        <UserChords />
      </main>
    </div>
  )
}
