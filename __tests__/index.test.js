import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import exampleChord from '../assets/exampleChord'
import Home from '../pages/index'
test('renders Home component', () => {
  render(<Home />)
  // Assertion 1: Check if the title is rendered
  const titleElement = screen.getByText(/Guitar Tabs/i)
  expect(titleElement).toBeInTheDocument()

  // Assertion 2: Check if the Navbar component is rendered
  const navbarElement = screen.getByRole('navigation')
  expect(navbarElement).toBeInTheDocument()
})
