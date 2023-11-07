import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

test('renders Navbar component', () => {
  render(<Navbar />)

  const homeLink = screen.getByText('Home')
  const aboutLink = screen.getByText('About')

  expect(homeLink).toBeInTheDocument()
  expect(aboutLink).toBeInTheDocument()
})
