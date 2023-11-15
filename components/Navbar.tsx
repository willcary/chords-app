import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-center items-center py-8'>
      <Link href='/' className='mx-4'>
        All chords
      </Link>
      <Link href='/MyChords' className='mx-4'>
        My chords
      </Link>
    </nav>
  )
}
