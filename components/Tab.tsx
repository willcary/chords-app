import React from 'react'
import TabHeaderX from './symbols/TabHeaderX'
import TabHeaderO from './symbols/TabHeaderO'

export default function Tab() {
  return (
    <div className='tab-container'>
      <h2>Dsus2</h2>
      <div className='tab-header'>
        <TabHeaderX />
        <TabHeaderX />
        <TabHeaderO />
        <TabHeaderO />
        <TabHeaderO />
        <TabHeaderO />
      </div>
      <div className='fret'>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
      </div>
      <div className='fret'>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'>
          <div className='finger'>1</div>
        </div>
        <div className='string'></div>
        <div className='string'></div>
      </div>
      <div className='fret'>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'>
          <div className='finger'>2</div>
        </div>
        <div className='string'></div>
      </div>
      <div className='fret'>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
        <div className='string'></div>
      </div>
    </div>
  )
}
