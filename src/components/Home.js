import React, { useState, useEffect } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import { getToDos, deleteToDo, updateToDo, addToDo } from '../services/api';
import './Home.css';
import { useCurrentUser } from '../hooks/AuthProvider';
import AddToDo from './AddToDo';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [toDoInput, settoDoInput] = useState(null);
  const user = useCurrentUser();
  const username = JSON.parse(user.text).email;
  const userToken = JSON.parse(user.text).token

  useEffect(() => {
    async function getAllTodos() {
      const allTodos = await getToDos(userToken);
      setTodos(allTodos);
    }
    getAllTodos();
  }, [userToken]);

  const handleInput = (e) => {
    settoDoInput(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newToDo = {
      id: Math.floor(Math.random()*100),
      title: toDoInput,
      complete: false
    };

    const newToDos = [...todos, newToDo];
    setTodos(newToDos);
    await addToDo(newToDo, userToken);
  }

  const handleDelete = async(e) => {
    const deletedToDo = e.target.id;
    const allTodos = [...todos];
    allTodos.splice(todos.findIndex(todo => {
      return todo.id === Number(deletedToDo)
    }), 1)
    setTodos(allTodos);
    await deleteToDo(deletedToDo, userToken);
  }

  const handleToggle = async(e) => {
    const idToUpdate = Number(e.target.id);
    const newToDos = todos.slice();
    const toDoToUpdate = newToDos.find(todo => todo.id === idToUpdate);
    toDoToUpdate.complete = !toDoToUpdate.complete;
    setTodos(newToDos);
    await updateToDo(toDoToUpdate, userToken);
  }

  return (
    <div>
      <Header username={username} />
      <div className="body-area">
        <div>
        <ToDoList className="ToDoList" 
        todos={todos}
        handleDelete={handleDelete} 
        handleToggle={handleToggle}
        />
        <AddToDo 
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          toDoInput={toDoInput}
          />
        </div>
        <img src="motivationalquote.jpg" alt="motivational quote" />        
      </div>
    </div>
  )
}

export default Home;
