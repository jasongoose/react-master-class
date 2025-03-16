import styled from "styled-components";
import {motion} from "motion/react"
import {useRef} from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

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
  drag: {
    backgroundColor: "rgb(46, 204, 113)",
    transition: {duration: 10},
  }
}

function Motion() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box drag dragSnapToOrigin
               dragElastic={0.5}
               dragConstraints={biggerBoxRef} variants={boxVariants} whileHover="hover"
               whileTap="click"
               whileDrag="drag"></Box>
        </BiggerBox>
      </Wrapper>
  )
}

export default Motion;