import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TabHeader from '@/components/tab/tab-header/TabHeader'

describe('TabHeader', () => {
  it('renders the correct number of TabHeaderO and TabHeaderX components', () => {
    const frets = [-1, -1, 1, 1, 2, 4]
    render(<TabHeader tone='D' suffix='sus2' baseFret={2} frets={frets} />)

    //Assert that the correct chord name is rendered in the document
    expect(screen.getByText(/Dsus2/i)).toBeInTheDocument()

    // Assert that the correct number of TabHeaderO and TabHeaderX components are rendered
    expect(screen.getAllByTestId('tab-header-o')).toHaveLength(4)
    expect(screen.getAllByTestId('tab-header-x')).toHaveLength(2)
  })
})
