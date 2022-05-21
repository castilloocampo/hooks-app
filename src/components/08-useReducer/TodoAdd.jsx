import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';

const initialFormState = {
  description: ""
};

const TodoAdd = ({ onHandleAddTodo }) => {
  const [{ description }, handleInputChange, resetForm] = useForm(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        description,
        done: false
      }
      onHandleAddTodo(newTodo);
      resetForm();
    }
  }


  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form
        onSubmit={handleSubmit}
        data-testid="form-todoadd"
      >
        <input
          type="text"
          name="description"
          placeholder="Aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
          data-testid="input-todoadd"
        />

        <button
          type='submit'
          className='btn btn-outline-primary w-full'
          data-testid="button-todoadd"
        >
          Agregar
        </button>
      </form>
    </>
  );
};


TodoAdd.propTypes = {
  onHandleAddTodo: PropTypes.func.isRequired,
};


export default TodoAdd;
