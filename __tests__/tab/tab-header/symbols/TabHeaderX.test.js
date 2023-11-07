import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TabHeaderX from '@/components/tab/tab-header/symbols/TabHeaderX'

test('renders TabHeaderO component', () => {
  render(<TabHeaderX />)
  const tabHeaderX = screen.getByTestId('tab-header-x')
  expect(tabHeaderX).toBeInTheDocument()
  expect(tabHeaderX).toHaveClass('tab-header-x')
})
