import { render, screen } from '@testing-library/react'
import Component3 from '../components/Component3'

test('Component3 renders', () => {
  render(<Component3 />)
  
  // get the heading
  expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  // get the number input
  expect(screen.getByRole('spinbutton')).toBeInTheDocument()
})