import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Component5 from '../components/Component5'

describe('Component5 (not DRY)', () => {
  test('It renders correctly', () => {
    const { container } = render(<Component5 increment={1} />)

    // get the elements
    // eslint-disable-next-line
    const valueEl = container.querySelector('.Component5__value')
    const subtractButton = screen.getByRole('button', { name: 'subtract' })
    const addButton = screen.getByRole('button', { name: 'add' })
    
    // do the tests
    // eslint-disable-next-line
    expect(container.querySelector('.Component5')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Component 5')
    expect(valueEl).toBeInTheDocument()
    expect(valueEl).toHaveTextContent('0')
    expect(subtractButton).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
  })

  test('It changes the value when the buttons are clicked', () => {
    const { container } = render(<Component5 increment={1} />)

    // get the elements
    // eslint-disable-next-line
    const valueEl = container.querySelector('.Component5__value')
    const subtractButton = screen.getByRole('button', { name: 'subtract' })
    const addButton = screen.getByRole('button', { name: 'add' })

    // test default value
    expect(valueEl).toHaveTextContent('0')
    // test addbutton
    userEvent.click(addButton)
    expect(valueEl).toHaveTextContent('1')
    // test subtract button
    userEvent.click(subtractButton)
    expect(valueEl).toHaveTextContent('0')
  })

  test('It adds or subtract the increment 10', () => {
    const { container } = render(<Component5 increment={10} />)

    // get the elements
    // eslint-disable-next-line
    const valueEl = container.querySelector('.Component5__value')
    const subtractButton = screen.getByRole('button', { name: 'subtract' })
    const addButton = screen.getByRole('button', { name: 'add' })

    // test addbutton
    userEvent.click(addButton)
    expect(valueEl).toHaveTextContent('10')
    // test subtract button
    userEvent.click(subtractButton)
    expect(valueEl).toHaveTextContent('0')
  })
})

function setup(props){
  const { container } = render(<Component5 {...props} />)
  return{
    // eslint-disable-next-line
    valueEl: container.querySelector('.Component5__value'),
    subtractButton: screen.getByRole('button', { name: 'subtract' }),
    addButton: screen.getByRole('button', { name: 'add' }),
    container,
  }
}

describe('Component 5 (DRY)', () => {
  test('It renders', () => {
    const { container, valueEl, subtractButton, addButton } = setup({ increment: 1 })
    // do the tests
    // eslint-disable-next-line
    expect(container.querySelector('.Component5')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Component 5')
    expect(valueEl).toBeInTheDocument()
    expect(valueEl).toHaveTextContent('0')
    expect(subtractButton).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
  })

  test('It changes the value when the buttons are clicked', () => {
    const { valueEl, subtractButton, addButton } = setup({ increment: 1 })

    // test default value
    expect(valueEl).toHaveTextContent('0')
    // test addbutton
    userEvent.click(addButton)
    expect(valueEl).toHaveTextContent('1')
    // test subtract button
    userEvent.click(subtractButton)
    expect(valueEl).toHaveTextContent('0')
  })

  test('It adds or subtract the increment 10', () => {
    const { valueEl, subtractButton, addButton } = setup({ increment: 10 })

    // test addbutton
    userEvent.click(addButton)
    expect(valueEl).toHaveTextContent('10')
    // test subtract button
    userEvent.click(subtractButton)
    expect(valueEl).toHaveTextContent('0')
  })
})