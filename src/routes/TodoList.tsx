import {FormEvent, useState} from "react";

function TodoList() {
  const [value, setValue] = useState('');

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    //
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
      <form action="" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="What needs to be done" value={value} onChange={handleInputChange}/>
        <button>Add</button>
      </form>
  );
}

export default TodoList;