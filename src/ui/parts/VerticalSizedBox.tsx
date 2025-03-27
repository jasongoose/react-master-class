import styled from "styled-components";

type Unit = 'px' | 'em' | 'rem';

type Props = {
  $size: number;
  $unit: Unit;
};

export const VerticalSizedBox = styled.div<Props>`
  height: ${(props) => props.$size + props.$unit};
`;