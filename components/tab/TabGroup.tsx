import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { SpecificChordProps } from '@/assets/typescript'
import Tab from './Tab'
export default function TabGroup({
  tone,
  suffix,
  positions,
}: SpecificChordProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])
  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {positions.map((position, version) => (
          <div className='embla__slide'>
            <Tab
              key={`${tone}${suffix}${position.frets}${position.fingers}`}
              tone={tone}
              suffix={suffix}
              positions={position}
              version={version + 1}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
