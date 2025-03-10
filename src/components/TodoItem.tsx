import {PrimitiveAtom, useAtom} from "jotai";
import {MouseEventHandler} from "react";

import {TodoItemData} from "../atoms.ts";

type Props = {
  todoAtom: PrimitiveAtom<TodoItemData>
}

function TodoItem({todoAtom}: Props) {
  const [todo, setTodo] = useAtom(todoAtom);

  const handleTodoButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const category = event.currentTarget.name as TodoItemData['category'];

    setTodo((prev) => {
      const newTodo: TodoItemData = {
        ...prev,
        category,
      }
      return newTodo;
    });
  }

  return (
      <li>
        <span>{todo['text']}</span>
        {todo['category'] !== 'DOING' ?
            <button name="DOING" onClick={handleTodoButtonClick}>Doing</button> : null}

        {todo['category'] !== 'TODO' ?
            <button name="TODO" onClick={handleTodoButtonClick}>To Do</button> : null}

        {todo['category'] !== 'DONE' ? <button name="DONE" onClick={handleTodoButtonClick}>Done</button> : null}
      </li>
  );
}

export default TodoItem;