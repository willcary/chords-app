import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Tab from '@/components/tab/tab-main/Tab'

const tone = 'D'
const suffix = 'sus2'
const positions = {
  frets: [-1, -1, 1, 1, 2, 4],
  fingers: [0, 0, 1, 1, 2, 4],
  barres: [1],
  baseFret: 2,
  midi: [52, 57, 62, 69],
}

// ------------------- fix bugs!! ----------------------
describe('Tab', () => {
  test('renders TabHeader component with correct props', () => {
    render(<Tab tone={tone} suffix={suffix} positions={positions} />)

    expect(screen.getByTestId('tab-header')).toHaveAttribute('data-tone', tone)
    expect(screen.getByTestId('tab-header')).toHaveAttribute(
      'data-suffix',
      suffix
    )
    expect(screen.getByTestId('tab-header')).toHaveAttribute(
      'data-base-fret',
      positions.baseFret.toString()
    )
    expect(screen.getByTestId('tab-header')).toHaveAttribute(
      'data-frets',
      positions.frets.join(',')
    )
  })

  test('renders Fret components with correct props', () => {
    render(<Tab tone={tone} suffix={suffix} positions={positions} />)

    const fretComponents = screen.getAllByTestId('fret')
    expect(fretComponents.length).toBe(4)

    fretComponents.forEach((fret, index) => {
      expect(fret).toHaveAttribute(
        'data-strings',
        positions.fingers[index].toString()
      )
    })
  })
})
