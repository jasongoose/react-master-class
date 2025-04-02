import styled from 'styled-components';
import { motion } from 'motion/react';

export const Overlay = styled(motion.div)<{ $opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.mainBlur};
`;
