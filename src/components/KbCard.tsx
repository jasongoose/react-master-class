import {MouseEventHandler} from "react";
import {useSetAtom} from 'jotai';

import {Category, TaskData, todosAtom} from "../atoms.ts";
import styled from "styled-components";

type Props = {
  taskData: TaskData
}

const KbCardLayout = styled.li`
  width: 100%;
  height: 10%;
  background-color: blue;`;

function KbCard({taskData}: Props) {
  const setTodos = useSetAtom((todosAtom));

  const handleTodoButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const category = event.currentTarget.name as TaskData['category'];

    setTodos((prev) => {
      const newTodo = {...taskData, category} as TaskData;

      return prev.reduce((acc, curr) => {
        acc.push(curr['id'] === taskData['id'] ? newTodo : curr);
        return acc;
      }, [] as TaskData[]);
    })
  }

  return (
      <KbCardLayout>
        <span>{taskData['text']}</span>

        {taskData['category'] !== Category.DOING ?
            <button name="DOING" onClick={handleTodoButtonClick}>Doing</button> : null}

        {taskData['category'] !== Category.TODO ?
            <button name="TODO" onClick={handleTodoButtonClick}>To Do</button> : null}

        {taskData['category'] !== Category.DONE ?
            <button name="DONE" onClick={handleTodoButtonClick}>Done</button> : null}
      </KbCardLayout>
  );
}

export default KbCard;