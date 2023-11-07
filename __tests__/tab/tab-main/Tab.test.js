import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Tab from '@/components/tab/tab-main/Tab'

// ------------------- fix bugs!! ----------------------
describe('Tab', () => {
  test('renders TabHeader component with correct props', () => {
    const tone = 'C'
    const suffix = 'maj'
    const positions = {
      frets: [0, 1, 2, 3, 4],
      fingers: [0, 1, 2, 3, 4],
      baseFret: 1,
      barres: [],
    }

    render(<Tab tone={tone} suffix={suffix} positions={positions} />)

    // Assert that the TabHeader component is rendered with the correct props
    expect(screen.getByTestId('tab-header')).toHaveAttribute('tone', tone)
    expect(screen.getByTestId('tab-header')).toHaveAttribute('suffix', suffix)
    expect(screen.getByTestId('tab-header')).toHaveAttribute(
      'baseFret',
      positions.baseFret.toString()
    )
    expect(screen.getByTestId('tab-header')).toHaveAttribute(
      'frets',
      positions.frets.join(',')
    )
  })

  test('renders Fret components with correct props', () => {
    const tone = 'C'
    const suffix = 'maj'
    const positions = {
      frets: [0, 1, 2, 3, 4],
      fingers: [0, 1, 2, 3, 4],
      baseFret: 1,
      barres: [],
    }

    render(<Tab tone={tone} suffix={suffix} positions={positions} />)

    // Assert that the Fret components are rendered with the correct props
    const fretComponents = screen.getAllByTestId('fret')
    expect(fretComponents.length).toBe(positions.frets.length)

    fretComponents.forEach((fret, index) => {
      expect(fret).toHaveAttribute(
        'strings',
        positions.fingers[index].toString()
      )
    })
  })
})
