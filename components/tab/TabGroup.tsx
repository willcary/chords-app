import { useState } from 'react'
import { SpecificChordProps } from '@/assets/typescript'
import Tab from './Tab'
export default function TabGroup({
  tone,
  suffix,
  positions,
}: SpecificChordProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === positions.length ? 0 : prevIndex + 1
    )
  }
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? positions.length - 1 : prevIndex - 1
    )
  }
  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className='carousel'>
      <div className='slide_direction'>
        <Tab
          key={`${tone}${suffix}${positions[currentIndex]}${positions[currentIndex]}`}
          tone={tone}
          suffix={suffix}
          positions={positions[currentIndex]}
          version={currentIndex + 1}
        />
        <div className='carousel-btn-container'>
          <button className='left' onClick={handlePrevious}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='20'
              viewBox='0 96 960 960'
              width='20'
            >
              <defs>
                <linearGradient
                  id='leftGradient'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='0%'
                >
                  <stop offset='5%' stop-color='#38b27f' stop-opacity='1' />
                  <stop offset='60%' stop-color='#fff' stop-opacity='1' />
                </linearGradient>
              </defs>
              <path
                d='M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z'
                fill='url(#leftGradient)'
              />
            </svg>
          </button>
          <button className='right' onClick={handleNext}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='20'
              viewBox='0 96 960 960'
              width='20'
            >
              <defs>
                <linearGradient
                  id='rightGradient'
                  x1='0%'
                  y1='0%'
                  x2='100%'
                  y2='0%'
                >
                  <stop offset='60%' stop-color='#fff' stop-opacity='1' />
                  <stop offset='5%' stop-color='#38b27f' stop-opacity='1' />
                </linearGradient>
              </defs>
              <path
                d='m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z'
                fill='url(#rightGradient)'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='carousel-indicator'>
        {positions.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
