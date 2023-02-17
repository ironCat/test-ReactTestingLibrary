import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('First light test', () => {

  test('should render button', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('should render input', () => {
    render(<App />);
    const input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
  });

  test('input should contain placeholder', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input some Text/i);
    expect(input).toBeInTheDocument();

    // expect(input).toMatchSnapshot();
    // screen.debug()

  });

  test('should not be on page', () => {
    render(<App />);
    const missing = screen.queryByText('missing element');
    expect(missing).toBeNull();
  });

  test('should wait for element appear and have style', async () => {
    render(<App />);
    const appear = await screen.findByText(/Appearing element after timeout/i);
    expect(appear).toBeInTheDocument();
    expect(appear).toHaveStyle({ color: 'red' });
  });

  test('check click event', () => {
    render(<App />);
    const button = screen.getByTestId('toggle-button')
    expect(button).toBeInTheDocument();

    expect(screen.queryByTestId('toggle-block')).toBeNull();

    fireEvent.click(button)
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByTestId('toggle-block')).toBeInTheDocument();

    fireEvent.click(button)
    expect(screen.queryByTestId('toggle-block')).toBeNull();
  })
})
