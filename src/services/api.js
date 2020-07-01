import request from 'superagent';

const URL = 'http://localhost:3000/api/todos';
const authURL = 'http://localhost:3000/api/auth'

export const getSignUp = async(signUpInfo) => {
  return await request.post(`${authURL}/signup`, signUpInfo);
}

export const getLogin = async(loginInfo) => {
  return await request.post(`${authURL}/signin`, loginInfo);
}

export const getLogout = async() => {
  return await request.get(`${authURL}/logout`);
}

export const getToDos = async(user) => {
  const data = await request.get(`${URL}`)
  .set('Authorization', user);
  return data.body;
}

export const addToDo = async(todo, user) => {
  const data = await request.post(`${URL}`, todo)
  .set('Authorization', user);
};

export const updateToDo = async(todo, user) => {
  const data = await request.put(`${URL}/${todo.id}`, todo)
  .set('Authorization', user);
}

export const deleteToDo = async(todo, user) => {
  const data = await request.delete(`${URL}/${todo}`)
  .set('Authorization', user);
}

