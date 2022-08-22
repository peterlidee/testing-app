import { render, screen } from '@testing-library/react'
import Component2 from '../components/Component2'

test('Component2 renders', () => {
  render(<Component2 />)
  
  // method 1
  expect(screen.getByRole('button', { name: 'subtract' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'add' })).toBeInTheDocument()

  // method 2
  const buttons = screen.getAllByRole('button')
  expect(buttons[0]).toBeInTheDocument()
  expect(buttons[1]).toBeInTheDocument()
})