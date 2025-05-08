import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removetodo } from '../feasure/todo/todoSlice';

export default function Todos() {
  const todos = useSelector((state) => state.todo.todos || []); 
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="card">
        <h2 className="todos-header">Your Todos</h2>
        <ul className="todos-list">
          {todos.length === 0 ? (
            <li>No todos available</li>
          ) : (
            todos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <span>{todo.text}</span>
                <button onClick={() => dispatch(removetodo(todo.id))}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
