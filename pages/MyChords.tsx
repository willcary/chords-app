import Navbar from '@/components/Navbar'
import React from 'react'
import { useState } from 'react'

export default function MyChords() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>My Chords</h1>
        <p>
          This will be a list of added chords to practice from All Chords page.
        </p>
        <p>Play on!</p>
      </main>
    </div>
  )
}
