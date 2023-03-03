import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  addMovieHandler();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // if (enteredText.trim().length === 0) {
    //   return;
    // }
    // todosCtx.addTodo(enteredText);
  };

  async function addMovieHandler() {
    const response = await fetch('http://127.0.0.1:5000/api/orders/orders/', {
      method: 'GET',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();;
    console.log(data);
  }

  return (
    <form onSubmit={addMovieHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
