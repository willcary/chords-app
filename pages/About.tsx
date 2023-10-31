import Navbar from '@/components/Navbar'
import React from 'react'
import { useState } from 'react'

export default function About() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>And this is a test change</p>
      </main>
    </div>
  )
}
