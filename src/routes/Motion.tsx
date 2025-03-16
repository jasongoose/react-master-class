import styled from "styled-components";
import {motion} from "motion/react"

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {scale: 1.5, rotateZ: 90},
  click: {borderRadius: "100px"},
}

function Motion() {
  return (
      <Wrapper>
        <Box variants={boxVariants} whileHover="hover" whileTap="click"></Box>
      </Wrapper>
  )
}

export default Motion;