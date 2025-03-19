import styled from "styled-components";
import {motion} from "motion/react"
import {useState} from "react";

import {MotionBox, MotionWrapper} from "../components/styled-ui.tsx";

type BoxProps = {
  $clicked: boolean;
}

const Box = styled(MotionBox)<BoxProps>`
  justify-content: ${(props) => props.$clicked ? "center" : 'flex-start'};
  align-items: ${(props) => props.$clicked ? "center" : 'flex-start'};
`;

const SharedLayoutBox = styled(MotionBox)``;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

function Motion() {
  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked(!clicked);
  }

  return (
      <MotionWrapper onClick={toggleClicked}>
        {/*<Box $clicked={clicked}>*/}
        {/*  <Circle layout></Circle>*/}
        {/*</Box>*/}
        <SharedLayoutBox>
          {clicked ? null : <Circle layoutId="circle" style={{borderRadius: "50%"}}></Circle>}
        </SharedLayoutBox>
        <SharedLayoutBox>
          {clicked ? <Circle layoutId="circle" style={{borderRadius: 0, scale: 2}}></Circle> : null}
        </SharedLayoutBox>
      </MotionWrapper>
  )
}

export default Motion;