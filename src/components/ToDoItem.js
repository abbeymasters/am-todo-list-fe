import React from 'react';
import PropTypes from 'prop-types';
import './ToDoItem.css';

const ToDoItem = ({ todo, id, handleToggle, handleDelete }) => {
  return (
  <li key={id}>
    <label className="checkbox">
    <input
    type="checkbox"
    onClick={handleToggle}
    id={id} 
    value={id}
    />
    <span>{todo}</span>
    </label>
    <button 
    onClick={e => handleDelete(e)} 
    id={id} 
    className="x-button">x</button>
  </li>
  )
};

ToDoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleToggle: PropTypes.func,
  handleDelete: PropTypes.func.isRequired
}

export default ToDoItem;