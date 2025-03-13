import {useForm} from "react-hook-form";

import {Category, type TaskData as TodoItemData} from "../atoms.ts";
import TodoItem from "../components/TodoItem.tsx";
import {useTodo} from "../hooks/useTodo.tsx";

type FormData = {
  todo?: string;
}

function TodoList() {
  const {
    todoList,
    doingList,
    doneList,
    setTodos,
  } = useTodo();

  const {register, watch, handleSubmit, formState, setError, setValue} = useForm<FormData>({});

  const onValid = (formData: FormData) => {
    setTodos((prev) => {
      const newTodo: TodoItemData = {
        text: formData['todo'] ?? '',
        id: Date.now(),
        category: Category.TODO,
      };
      return [newTodo, ...prev];
    });

    setValue('todo', "");
  }

  const onInvalid = (reason: any) => {
    //
  }

  return (
      <>
        <h1>Todo List</h1>

        <form action="" onSubmit={handleSubmit(onValid, onInvalid)}>
          <input {...register('todo', {
            required: "Please write a todo"
          })} placeholder="Please Write a Todo"/>
          <button>Add</button>
        </form>

        <h2>TODO</h2>
        <ul>
          {todoList.map((todo) => <TodoItem key={todo['id']} todoData={todo}/>)}
        </ul>

        <h2>DOING</h2>
        <ul>
          {doingList.map((todo) => <TodoItem key={todo['id']} todoData={todo}/>)}
        </ul>

        <h2>DONE</h2>
        <ul>
          {doneList.map((todo) => <TodoItem key={todo['id']} todoData={todo}/>)}
        </ul>
      </>
  );
}

export default TodoList;