// App.js
import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  return (
    <div>
      <h1>Todo List Application</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
