import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = ({ todos, handleToggle, handleDelete }) => {
  return(
    <div>
    <h1>Knock Em' Off!</h1>
    <ul>
      {todos.map(todo => 
        <ToDoItem
          todo={todo.title}
          id={todo.id}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          />
      )}
    </ul>
    </div>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default ToDoList;