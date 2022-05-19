import { useReducer } from 'react';

import './styles.css'

import todoReducer from './todoReducer';
import useForm from '../../hooks/useForm';
import { useEffect } from 'react';


const initialState = [];

const initialFormState = {
  description: ""
};

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const [{ description }, handleInputChange, resetForm] = useForm(initialFormState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        description,
        done: false
      }
      dispatch({ type: "ADD_TODO", payload: newTodo });
      resetForm();
    }
  }

  const handleDeleteTODO = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  }

  return (
    <div>
      <h1>TodoApp →	 ( {todos.length} )</h1>
      <hr />

      <div className='flex'>
        <div className='w-3/5'>
          <ul>
            {
              todos.map(({ id, description, done }, i) =>
                <li
                  id='list-group-item'
                  className='relative block py-3 px-6 -mb-px '
                  key={id}>
                  <p className={`text-center ${done && 'line-through'}`}>
                    {i + 1}. {description}
                  </p>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDeleteTODO(id)} >
                    Borrar
                  </button>
                </li>
              )
            }
          </ul>
        </div>
        <div>
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange} />

            <button
              type='submit'
              className='btn btn-outline-primary w-full' >
              Agregar
            </button>
          </form>
        </div>

      </div>



    </div>
  );
}

export default TodoApp;
