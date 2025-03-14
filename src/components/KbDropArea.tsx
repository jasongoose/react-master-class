import styled from "styled-components";
import {PropsWithChildren} from "react";
import {useDrop} from "react-dnd";
import {Category, TaskData} from "../atoms.ts";

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
  const [collectedProps, drop] = useDrop(() => ({
    accept: [Category.TODO, Category.DOING, Category.DONE].filter((cateory) => cateory !== type),
    // collect: (monitor) => ({}),
    drop(item: TaskData) {
      console.log(`item ${item['id']} dropped in ${type} area`);
    },
    hover(item: TaskData) {
      console.log(`item ${item['id']} is hovering on ${type} area`);
    }
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