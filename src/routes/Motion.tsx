import styled from "styled-components";
import {motion} from "motion/react"
import {useState} from "react";

type BoxProps = {
  $clicked: boolean;
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)<BoxProps>`
  width: 400px;
  height: 400px;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: ${(props) => props.$clicked ? "center" : 'flex-start'};
  align-items: ${(props) => props.$clicked ? "center" : 'flex-start'};
  font-size: 28px;
`;

const SharedLayoutBox = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

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
      <Wrapper onClick={toggleClicked}>
        {/*<Box $clicked={clicked}>*/}
        {/*  <Circle layout></Circle>*/}
        {/*</Box>*/}
        <SharedLayoutBox>
          {clicked ? null : <Circle layoutId="circle" style={{borderRadius: "50%"}}></Circle>}
        </SharedLayoutBox>
        <SharedLayoutBox>
          {clicked ? <Circle layoutId="circle" style={{borderRadius: 0, scale: 2}}></Circle> : null}
        </SharedLayoutBox>
      </Wrapper>
  )
}

export default Motion;