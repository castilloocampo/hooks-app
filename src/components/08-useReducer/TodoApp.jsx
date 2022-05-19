import { useReducer } from 'react';

import './styles.css'

import todoReducer from './todoReducer';
import { useEffect } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTODO = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  }

  const handleToggleTODO = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }

  const handleAddTODO = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  }

  return (
    <div>
      <h1>TodoApp →	 ( {todos.length} )</h1>
      <hr />

      <div className='flex'>
        <div className='w-3/5'>
          <TodoList todos={todos} onHandleToggleTODO={handleToggleTODO} onHandleDeleteTODO={handleDeleteTODO} />
        </div>
        <div className='w-2/5'>
          <TodoAdd onHandleAddTodo={handleAddTODO} />
        </div>

      </div>



    </div>
  );
}

export default TodoApp;
