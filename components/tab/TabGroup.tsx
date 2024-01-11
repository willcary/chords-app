import { useState } from 'react'
import { SpecificChordProps } from '@/assets/typescript'
import Tab from './Tab'
export default function TabGroup({
  tone,
  suffix,
  positions,
  handleFetchChords,
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
          handleFetchChords={handleFetchChords}
        />
        <div className='carousel-btn-container'>
          <button
            className='left'
            onClick={handlePrevious}
            type='button'
            aria-label={`next ${tone}${suffix} version`}
          >
            &lt;
          </button>
          <div className='carousel-indicator'>
            {positions.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
          <button
            className='right'
            onClick={handleNext}
            type='button'
            aria-label={`next ${tone}${suffix} version`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
