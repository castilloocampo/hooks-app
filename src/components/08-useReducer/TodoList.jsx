import React from 'react';
import { PropTypes } from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onHandleToggleTODO, onHandleDeleteTODO }) => {
  return (
    <ul>
      {
        todos.map((todo, i) =>
          <TodoListItem 
            key={todo.id}
            todo={todo} 
            index={i} 
            onHandleDeleteTODO={onHandleDeleteTODO}
            onHandleToggleTODO={onHandleToggleTODO} />
        )
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onHandleToggleTODO: PropTypes.func.isRequired,
  onHandleDeleteTODO: PropTypes.func.isRequired,
}

export default TodoList;
