import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Fret from '@/components/tab/tab-main/Fret'

describe('Fret', () => {
  test('renders fret component', () => {
    render(<Fret strings={[]} />)
    expect(screen.getByTestId('fret')).toBeInTheDocument()
  })

  test('renders the correct number of strings', () => {
    const strings = [0, 0, 1, 1, 2, 4]
    const { getAllByTestId } = render(<Fret strings={strings} />)
    const stringElements = getAllByTestId('string')
    expect(stringElements.length).toBe(strings.length)
  })
})
