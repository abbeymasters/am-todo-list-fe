import React from 'react';
import PropTypes from 'prop-types';
import './AddToDo.css';

const AddToDo = ({ handleSubmit, toDoInput, handleInput }) => {
  return (
    <form 
    className="add-form" 
    onSubmit={handleSubmit}>
      <input
        className="add-task-input"
        value={toDoInput}
        onChange={handleInput}
        placeholder="Add task here..."
        />
      <button className="add-button">✔</button>
    </form>
  )
}

AddToDo.propTypes = {
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
  toDoInput: PropTypes.string
}

export default AddToDo;