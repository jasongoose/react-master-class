import {useForm} from "react-hook-form";
import {useAtomValue, useSetAtom} from "jotai";

import {splitTodosAtom, type TodoItemData, todosAtom} from "../atoms.ts";
import TodoItem from "../components/TodoItem.tsx";

type FormData = {
  todo?: string;
}

function TodoList() {
  const setTodos = useSetAtom(todosAtom);
  const todoAtoms = useAtomValue(splitTodosAtom);

  const {register, watch, handleSubmit, formState, setError, setValue} = useForm<FormData>({});

  const onValid = (formData: FormData) => {
    setTodos((prev) => {
      const newTodo: TodoItemData = {
        text: formData['todo'] ?? '',
        id: Date.now(),
        category: "TODO",
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
          {todoAtoms.map((todo) => <TodoItem todoAtom={todo}/>)}
        </ul>
      </>
  );
}

export default TodoList;