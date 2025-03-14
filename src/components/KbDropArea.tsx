import styled from "styled-components";
import {PropsWithChildren} from "react";
import {useDrop} from "react-dnd";
import {Category, TaskData} from "../atoms.ts";
import {useTodo} from "../hooks/useTodo.tsx";

type Props = {
  type: Category;
}

const KbDropAreaLayout = styled.ul`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: tomato;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function KbDropArea({children, type}: PropsWithChildren<Props>) {
  const {setTodos} = useTodo();

  const [collectedProps, drop] = useDrop(() => ({
    accept: Object.keys(Category).filter((cateory) => cateory !== type),
    drop(item: TaskData) {
      setTodos((prev) => {
        return prev.reduce((acc, curr) => {
          acc.push(curr['id'] === item['id'] ? {...curr, category: type} : curr);
          return acc;
        }, [] as TaskData[]);
      })
    },
  }));

  return (
      <KbDropAreaLayout ref={(node) => {
        drop(node)
      }}>
        {children}
      </KbDropAreaLayout>
  )
}

export default KbDropArea;