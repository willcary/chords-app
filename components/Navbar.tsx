import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-center items-center py-8'>
      <Link href='/' className='mx-4'>
        Home
      </Link>
      <Link href='/About' className='mx-4'>
        About
      </Link>
    </nav>
  )
}
