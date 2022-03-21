import React, { useState } from 'react';
import TodoList from '../src/components/TodoList';
import NewTodo from '../src/components/NewTodo';
import { Todo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // setTodos([...todos].concat({id: Math.random().toString(), text: text}));
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text: text }]);
  };

  const todoRemoveHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId ));
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoRemoveHandler} />
    </div>
  );
}

export default App;
