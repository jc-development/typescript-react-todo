import React, { useRef } from 'react';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

  const textInputRef = useRef<HTMLInputElement>(null);

  const submitTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onAddTodo(textInputRef.current!.value);
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <div>
        <label htmlFor="todo-text">Todo</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
}

export default NewTodo;