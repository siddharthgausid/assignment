// TodoItem.js (continued)
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice'; // Adjusted import path

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id)); // Dispatch deleteTodo action when delete button is clicked
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button> {/* Connect handleDelete to onClick event */}
    </div>
  );
}

export default TodoItem;
