import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('TodoListItem', () => {

  let fnDelete = jest.fn();
  let fnToggle = jest.fn();
  let { container, rerender } = render(<TodoListItem
    todo={demoTodos[1]}
    index={0}
    onHandleDeleteTODO={fnDelete}
    onHandleToggleTODO={fnToggle}
  />);

  beforeEach(() => {
    fnDelete = jest.fn();
    fnToggle = jest.fn();
    const tempRender = render(<TodoListItem
      todo={demoTodos[1]}
      index={0}
      onHandleDeleteTODO={fnDelete}
      onHandleToggleTODO={fnToggle}
    />);
    container = tempRender.container;
    rerender = tempRender.rerender;
  });

  afterEach(() => {
    cleanup();
  })

  test('should show correctly', () => {
    expect(container).toMatchSnapshot();
  });

  test('should call delete function', () => {
    const btnDelete = screen.getByTestId('delete-button');
    fireEvent.click(btnDelete);
    expect(fnDelete).toHaveBeenCalledTimes(1);
    expect(fnDelete).toHaveBeenCalledWith(2);
  });

  test('should call toggle function', () => {
    const paragToggle = screen.getByTestId('p-list-item');
    fireEvent.click(paragToggle);
    expect(fnToggle).toHaveBeenCalledTimes(1);
    expect(fnToggle).toHaveBeenCalledWith(2);
  });

  test('should show text correctly', () => {
    const index = 0;
    const expectedText = `${index + 1}. ${demoTodos[1].description}`;
    const paragText = screen.getByTestId('p-list-item').textContent;
    expect(paragText).toBe(expectedText);
  });

  test('should throug text', async () => {
    const todo = demoTodos[1];
    todo.done = true;
    rerender(<TodoListItem
      todo={todo}
      index={0}
      onHandleDeleteTODO={fnDelete}
      onHandleToggleTODO={fnToggle}
    />);
    const parag = screen.getByTestId('p-list-item');
    expect(parag).toHaveClass('line-through');
  });

});
