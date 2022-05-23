
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import TodoApp from '../../../components/08-useReducer/TodoApp';

describe('TodoApp component', () => {
  let { container } = render(<TodoApp />);

  // jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem')
  // Object.setPrototypeOf(localStorage.setItem, jest.fn());
  // let setItemJest = localStorage.setItem;

  beforeEach(() => {
    // localStorage.clear();
    // setItemJest = null;
    cleanup();
    const tempRender = render(<TodoApp />);
    container = tempRender.container;
    // jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem')
    // Object.setPrototypeOf(localStorage.setItem, jest.fn());
    // setItemJest = localStorage.setItem;
    Storage.prototype.setItem = jest.fn();
  });


  test('should show correctly', () => {
    expect(container).toMatchSnapshot();
    // expect(setItemJest).toHaveBeenCalledTimes(1);
  });

  test('should add todo from this component', async () => {
    // expect(setItemJest).toHaveBeenCalledTimes(1);
    const value = "Learn something";
    const inputTodo = screen.queryByRole('textbox');
    const formTodo = screen.getByTestId('form-todoadd');
    fireEvent.change(inputTodo, { target: { value } });
    fireEvent.submit(formTodo, { preventDefault: jest.fn() });
    await waitFor(() => {
      expect(screen.queryByTestId('p-list-item')).toHaveTextContent(`1. ${value}`);
    });
    fireEvent.change(inputTodo, { target: { value: 'Learn something more' } });
    fireEvent.submit(formTodo, { preventDefault: jest.fn() });
    await waitFor(() => {
      expect(screen.queryAllByTestId('p-list-item').length).toBe(2);
    });
    // expect(setItemJest).toHaveBeenCalledTimes(3);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(container).toMatchSnapshot();
  });

  test('should eliminate todo ', () => {
    const inputTodo = screen.queryByRole('textbox');
    const formTodo = screen.getByTestId('form-todoadd');
    for (let index = 0; index < 5; index++) {
      const value = `Learn something ${index + 1}`;
      fireEvent.change(inputTodo, { target: { value } });
      fireEvent.submit(formTodo, { preventDefault: jest.fn() });
    }
    expect(screen.queryAllByTestId('p-list-item').length).toBe(5);
    const btnDelete = screen.getAllByTestId('delete-button')[0];
    fireEvent.click(btnDelete);
    expect(screen.queryAllByTestId('p-list-item').length).toBe(4);
    // });

  

  });

})
