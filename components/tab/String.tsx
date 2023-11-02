import React from 'react'

export default function String({
  key,
  string,
}: {
  key: string
  string: number
}) {
  return string !== 0 ? (
    <div className='string'>
      <div className='finger'>{string}</div>
    </div>
  ) : (
    <div className='string'></div>
  )
}
