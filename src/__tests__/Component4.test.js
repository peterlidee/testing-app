import { render, screen } from '@testing-library/react'
import Component4 from '../components/Component4'

test('Component4 renders', () => {
  
  render(<Component4 />)
  const input = screen.getByLabelText('Favorite Movie')
  const title = screen.getByRole('heading', { level: 4 })

  // we already used .toBeInTheDocument(), this is jest-dom
  expect(input).toBeInTheDocument()

  // test for class with jest
  expect(input.classList.contains('Component4__movie')).toBe(true)
  // test for class with jest-dom
  expect(input).toHaveClass('Component4__movie')
  
  // test for style with jest
  expect(input.style.border).toBe('1px solid blue')
  expect(input.style.borderRadius).toBe('3px')
  // test for style with jest-dom
  expect(input).toHaveStyle({
    border: '1px solid blue', 
    borderRadius: '3px',
  })

  // test h3 value with jest
  expect(title.textContent).toBe("Component 4")
  // test h3 value with jest-dom
  expect(title).toHaveTextContent("Component 4")

  // test input data attribute with jest
  expect(input.dataset.value).toEqual('abc')
  // test input data attribute with jest-dom
  expect(input).toHaveAttribute('data-value', 'abc')
})