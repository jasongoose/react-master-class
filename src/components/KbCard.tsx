import {TaskData} from "../atoms.ts";
import styled from "styled-components";
import {useDrag} from "react-dnd";

type Props = {
  taskData: TaskData
}

const KbCardLayout = styled.li`
  width: 100%;
  height: 10%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function KbCard({taskData}: Props) {
  const [collectedProps, drag] = useDrag(() => ({
    type: taskData['category'],
    item: taskData,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }));

  return (
      <KbCardLayout ref={(node) => {
        drag(node)
      }}>
        <span>{taskData['text']}</span>
      </KbCardLayout>
  );
}

export default KbCard;