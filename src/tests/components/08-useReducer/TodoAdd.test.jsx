
import { fireEvent, render } from '@testing-library/react';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';
import { screen } from '@testing-library/react';

describe('TodoAdd component', () => {
  const handleAddTodo = jest.fn();

  test('should show correctly', () => {

    const { container } = render(<TodoAdd
      onHandleAddTodo={handleAddTodo}
    />);

    expect(container).toMatchSnapshot();

  });

  test("shouldn't call onHandleAddTodo ", () => {
    render(<TodoAdd
      onHandleAddTodo={handleAddTodo}
    />);
    const btnSubmit = screen.getByTestId('button-todoadd');
    fireEvent.click(btnSubmit);

    expect(handleAddTodo).not.toBeCalled();
  });

  test("shouldn't call onHandleAddTodo ", () => {
    render(<TodoAdd
      onHandleAddTodo={handleAddTodo}
    />);
    const btnSubmit = screen.getByTestId('button-todoadd');
    fireEvent.click(btnSubmit);

    expect(handleAddTodo).not.toBeCalled();
  });

  test('should call onHandleAddTodo', () => {
    render(<TodoAdd
      onHandleAddTodo={handleAddTodo}
    />);
    const formSubmit = screen.queryByTestId('form-todoadd');
    const input = screen.getByTestId('input-todoadd');
    const value = "Learn SCRUM";
    fireEvent.change(input, { target: { value } });
    fireEvent.submit(formSubmit);
    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false,
    });
    expect(input.getAttribute("value")).toBe("");
  });

});