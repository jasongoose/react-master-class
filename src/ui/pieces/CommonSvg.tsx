import styled from 'styled-components';

export const CommonSvg = styled.svg<{ $size: number }>`
  width: ${(props) => props.$size + 'px'};

  path {
    fill: ${(props) => props.theme.contrast};
  }
`;
