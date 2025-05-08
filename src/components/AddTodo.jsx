import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feasure/todo/todoSlice';
import '../index.css'; 


export default function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandle = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput(''); 
    }
  };

  return (
    <div className="card">
      <form onSubmit={addTodoHandle}>
        <div className="form-group">
          <label htmlFor="todoInput">Enter Todo</label>
          <input
            type="text"
            id="todoInput"
            placeholder="Enter Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
