import { render } from '@testing-library/react'
import Component1 from "../components/Components1"

test('Component1 renders', () => {
  // destructure container out of render result
  const { container } = render(<Component1 />)
  // true
  // eslint-disable-next-line
  expect(container.querySelector('.Component1')).toBeInTheDocument()
})