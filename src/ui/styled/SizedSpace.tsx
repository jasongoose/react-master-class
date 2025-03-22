import styled from "styled-components";

export const SizedSpace = styled.div<{ size: number }>`
  width: 100%;
  height: ${(props) => props.size + 'px'};
`