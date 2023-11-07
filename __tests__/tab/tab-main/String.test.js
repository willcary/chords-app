import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import String from '@/components/tab/tab-main/String'

describe('String component', () => {
  test('renders the string with finger when it is not equal to zero', () => {
    render(<String string={2} />)
    const stringElement = screen.getByTestId('string')
    expect(stringElement).toBeInTheDocument()
    expect(stringElement.firstChild).toHaveTextContent('2')
  })

  test('renders an empty div when the string is equal to zero', () => {
    render(<String string={0} />)
    const stringElement = screen.getByTestId('string')
    expect(stringElement).toBeInTheDocument()
    expect(stringElement.firstChild).toBeNull()
  })
})
