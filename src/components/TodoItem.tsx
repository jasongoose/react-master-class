import {MouseEventHandler} from "react";
import {useSetAtom} from 'jotai';

import {Category, TaskData as TodoItemData, todosAtom} from "../atoms.ts";

type Props = {
  todoData: TodoItemData
}

function TodoItem({todoData}: Props) {
  const setTodos = useSetAtom((todosAtom));

  const handleTodoButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const category = event.currentTarget.name as TodoItemData['category'];

    setTodos((prev) => {
      const newTodo = {...todoData, category} as TodoItemData;

      return prev.reduce((acc, curr) => {
        acc.push(curr['id'] === todoData['id'] ? newTodo : curr);
        return acc;
      }, [] as TodoItemData[]);
    })
  }

  return (
      <li>
        <span>{todoData['text']}</span>
        {todoData['category'] !== Category.DOING ?
            <button name="DOING" onClick={handleTodoButtonClick}>Doing</button> : null}

        {todoData['category'] !== Category.TODO ?
            <button name="TODO" onClick={handleTodoButtonClick}>To Do</button> : null}

        {todoData['category'] !== Category.DONE ?
            <button name="DONE" onClick={handleTodoButtonClick}>Done</button> : null}
      </li>
  );
}

export default TodoItem;