import styled from "styled-components";
import {ChangeEventHandler, useState} from "react";

import {useTodo} from "../hooks/useTodo.tsx";
import KbCard from "../components/KbCard.tsx";
import KbDropArea from "../components/KbDropArea.tsx";
import {Category, TaskData} from "../atoms.ts";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SelectWrapper = styled.div`
  & > select {
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`

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

function KanbanBoard() {
  const {
    todoList,
    doingList,
    doneList,
    setTodos,
  } = useTodo();

  const [nextTaskType, setNextTaskType] = useState<Category>();

  const [taskInputValue, setTaskInputValue] = useState('');

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const targetValue = event.currentTarget.value as Category;
    setNextTaskType(targetValue);
  }

  const handleTaskInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const targetValue = event.currentTarget.value;
    setTaskInputValue(targetValue);
  }

  const handleAddButtonClick = () => {
    setTodos((prev) => {
      const newTask = {
        text: taskInputValue,
        id: Date.now(),
        category: Category.TODO
      } as TaskData;
      return [...prev, newTask];
    });
    setTaskInputValue('');
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
        <InputWrapper>
          <input type="text" value={taskInputValue} onChange={handleTaskInputChange} placeholder="Write a task..."/>
          <button onClick={handleAddButtonClick}>Add</button>
        </InputWrapper>
        <KbLayout>
          <KbColumn>
            <legend>
              <h1>Todo</h1>
            </legend>
            <KbDropArea type={Category.TODO}>
              {todoList.map((taskData) => <KbCard key={taskData['id']} taskData={taskData}/>)}
            </KbDropArea>
          </KbColumn>
          <KbColumn>
            <legend>
              <h1>Doing</h1>
            </legend>
            <KbDropArea type={Category.DOING}>
              {doingList.map((taskData) => <KbCard key={taskData['id']} taskData={taskData}/>)}
            </KbDropArea>
          </KbColumn>
          <KbColumn>
            <legend>
              <h1>Done</h1>
            </legend>
            <KbDropArea type={Category.DONE}>
              {doneList.map((taskData) => <KbCard key={taskData['id']} taskData={taskData}/>)}
            </KbDropArea>
          </KbColumn>
        </KbLayout>
      </PageContainer>

  )
}

export default KanbanBoard;