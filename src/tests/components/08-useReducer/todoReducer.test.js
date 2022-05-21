import { demoTodos } from '../../fixtures/demoTodos';
import todoReducer from '../../../components/08-useReducer/todoReducer';

describe('todoReducer', () => {
  test('should return default state', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('should add a ToDo element', () => {
    const newTodo = {
      id: new Date().getTime(),
      descripcion: "Learn Express",
      done: false
    };

    const action = {
      type: 'ADD_TODO',
      payload: newTodo
    }
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('should delete a ToDo element', () => {
    const action = {
      type: 'DELETE_TODO',
      payload: 2
    }

    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(1);
    expect(state).toEqual(state.filter(({ id }) => id !== 2));
  });

  test('should be toggle ToDo element', () => {
    const [oldTodo] = demoTodos;
    const action = {
      type: 'TOGGLE_TODO',
      payload: 1
    }

    const [todo] = todoReducer(demoTodos, action);
    expect(todo.done).toBe(!oldTodo.done);

  });
});