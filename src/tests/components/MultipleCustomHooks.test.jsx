import '@testing-library/jest-dom'

import { render, screen } from "@testing-library/react"
import MultipleCustomHooks from '../../components/03-examples/MultipleCustomHooks';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('MultipleCustomHooks', () => {
  beforeEach(()=>{
    useCounter.mockReturnValue({
      counter: 10,
      // increment: () => jest.fn()
    });
  });

  test('should show correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });
    const { container } = render(<MultipleCustomHooks />)
    expect(container).toMatchSnapshot();
  })

  test('should show information', () => {
    const data = [{
      author: "Mock Author",
      quote: "Esta es una nota con informacion pasada desde un Mock"
    }];
    useFetch.mockReturnValue({
      data,
      loading: false,
      error: null
    });
    render(<MultipleCustomHooks />);
    expect(screen.queryByTestId('loading')).toBe(null);
    expect(screen.queryByText(/informacion/)).toHaveClass('mb-0');
    expect(screen.getByRole('contentinfo')).toHaveTextContent(data[0].author);
  })

})