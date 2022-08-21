import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  // eslint-disable-next-line 
  expect(container.querySelector('.App')).toBeInTheDocument();
});
