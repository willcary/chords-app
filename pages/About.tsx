import Navbar from '@/components/Navbar'
import React from 'react'
import { useState } from 'react'

export default function About() {
  //turn this code into a counter function with plus and minus buttons to change state
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Navbar />
      <h2>About</h2>
      <p>This is the about page</p>
      <p>And this is a test change</p>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}
