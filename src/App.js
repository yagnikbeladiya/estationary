import React from 'react';
import AddTodo from './components/AddTodo'; 
import Todos from './components/Todos';  

export default function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />   
         <Todos />
          </div>

  );
}
