import styled from "styled-components";

export const StickyTitle = styled.h1`
  width: 100%;
  position: sticky;
  top: 0;
  font-size: 100px;
  padding: 50px 0;
  text-align: center;
  background-color: ${(props) => props.theme.bgColor};
`;
