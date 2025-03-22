import styled from "styled-components";

export const ChipGroup = styled.ul`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ChipItem = styled.li`
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
`;