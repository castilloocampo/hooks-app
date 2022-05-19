import React from 'react';
import { PropTypes } from 'prop-types';

const TodoListItem = ({ todo, index, onHandleDeleteTODO, onHandleToggleTODO }) => {
  const { id, description, done } = todo;
  return (
    <li
      id='list-group-item'
      className='relative block py-3 px-6 -mb-px '
      key={id}>
      <p
        className={`text-center ${done && 'line-through'}`}
        onClick={() => onHandleToggleTODO(id)} >
        {index + 1}. {description}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => onHandleDeleteTODO(id)} >
        Borrar
      </button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    done: PropTypes.bool
  }).isRequired,
  index: PropTypes.number.isRequired,
  onHandleDeleteTODO: PropTypes.func.isRequired,
  onHandleToggleTODO: PropTypes.func.isRequired

}

export default TodoListItem;
