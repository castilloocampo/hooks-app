import RealExampleRef from '../../../components/04-useRef/RealExampleRef';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('RealExampleRef', () => {
  test('should show correctly', () => {
    const { container } = render(<RealExampleRef />);
    expect(container).toMatchSnapshot();
  });

  test('should show <MultipleCustomHooks>', async () => {
    render(<RealExampleRef />);
    //Se carga por primera vez el componente
    const buttonMultiple = screen.getByTestId('button-multiplecustomhook');
    //Se hace cambio en propiedad
    fireEvent.click(buttonMultiple);
    //Se muestra componente por cambio de propiedad
    expect(screen.queryByText(/BreakingBad/)).toHaveTextContent("BreakingBad Quotes");

    let load = null, quote = null, buttonNext = null;
    //Se muestra elemento loading antes de mostrar el quote
    await waitFor(() => {
      load = screen.queryByTestId('loading');
      expect(load).toHaveTextContent(/Loading/);
    });
    //Se muestra el quote
    await waitFor(() => {
      load = screen.queryByTestId('loading');
      expect(load).toBe(null);
    });
    quote = screen.queryByTestId('blockquote').textContent
    buttonNext = screen.queryByTestId('button-next-quote');
      
    //Se Solicita mostrar nuevo elemento
    fireEvent.click(buttonNext);

    //Se muestra elemento loading antes de mostrar el nuevo quote
    await waitFor(() => {
      load = screen.queryByTestId('loading');
      expect(load).toHaveTextContent(/Loading/);
    });

    //Se muestra el nuevo quote
    await waitFor(() => {
      load = screen.queryByTestId('loading');
      expect(load).toBe(null);
      expect(screen.queryByTestId('blockquote').textContent).not.toBe(quote);
    });

    //Se hace cambio en propiedad
    fireEvent.click(buttonMultiple);

    //Se oculta componente por cambio de propiedad
    expect(screen.queryByText(/BreakingBad/)).toBe(null);
  });
})
