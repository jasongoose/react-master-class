import styled from "styled-components";

import {useTodo} from "../hooks/useTodo.tsx";
import KbCard from "../components/KbCard.tsx";
import {Category} from "../atoms.ts";
import {ChangeEventHandler, useState} from "react";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SelectWrapper = styled.div`
  width: 40%;

  & > select {
    width: 100%;
  }
`;

const KbLayout = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
`;

const KbColumn = styled.fieldset`
  width: 200px;
  height: 400px;
  outline: 1px solid red;
`;

const KbDropArea = styled.ul`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: tomato;
`;

function KanbanBoard() {
  const {
    todoList,
    doingList,
    doneList,
  } = useTodo();

  const [nextTaskType, setNextTaskType] = useState<Category>();

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const targetValue = event.currentTarget.value as Category;
    setNextTaskType(targetValue);
  }

  return (
      <PageContainer>
        <SelectWrapper>
          <select onChange={handleSelectChange} value={nextTaskType}>
            <option value={Category.TODO}>Todo</option>
            <option value={Category.DOING}>Doing</option>
            <option value={Category.DONE}>Done</option>
          </select>
        </SelectWrapper>
        <KbLayout>
          <KbColumn>
            <legend>
              <h1>Todo</h1>
            </legend>
            <KbDropArea>
              {todoList.map((taskData) => <KbCard taskData={taskData}/>)}
            </KbDropArea>
          </KbColumn>

          <KbColumn>
            <legend>
              <h1>Doing</h1>
            </legend>
            <KbDropArea>
              {doingList.map((taskData) => <KbCard taskData={taskData}/>)}
            </KbDropArea>
          </KbColumn>

          <KbColumn>
            <legend>
              <h1>Done</h1>
            </legend>
            <KbDropArea>
              {doneList.map((taskData) => <KbCard taskData={taskData}/>)}
            </KbDropArea>
          </KbColumn>
        </KbLayout>
      </PageContainer>

  )
}

export default KanbanBoard;