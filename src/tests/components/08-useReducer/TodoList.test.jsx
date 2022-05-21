import { render, screen } from '@testing-library/react';
import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';


describe('TodoList', () => {
  const toggleTodo = jest.fn();
  const deleteTodo = jest.fn();
  let todoRendered = render(<TodoList
    todos={demoTodos}
    onHandleToggleTODO={toggleTodo}
    onHandleDeleteTODO={deleteTodo}
  />);

  let { container } = todoRendered;

  beforeEach(() => {
    todoRendered = render(<TodoList
      todos={demoTodos}
      onHandleToggleTODO={toggleTodo}
      onHandleDeleteTODO={deleteTodo}
    />);
    container = todoRendered.container;
  });

  test('should show correctly', () => {
    expect(container).toMatchSnapshot();
  });

  test('should have two elements of todoListItem', () => {
    const prgph = screen.getAllByTestId('p-list-item');
    expect(prgph.length).toBe(2);
  })
  
})
