import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TabHeaderO from '@/components/tab/tab-header/symbols/TabHeaderO'

test('renders TabHeaderO component', () => {
  render(<TabHeaderO />)
  const tabHeaderO = screen.getByTestId('tab-header-o')
  expect(tabHeaderO).toBeInTheDocument()
  expect(tabHeaderO).toHaveClass('tab-header-o')
})
