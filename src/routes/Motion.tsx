import styled from "styled-components";
import {AnimatePresence, motion} from "motion/react"
import {useState} from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Motion() {

  const [showBox, setShowBox] = useState(false);

  const toggleShowBox = () => {
    setShowBox(!showBox);
  }

  const boxVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 360,
    },
    leaving: {
      opacity: 0,
      scale: 0,
      y: 50,
    }
  }


  return (
      <Wrapper>
        <button onClick={toggleShowBox}>Click</button>
        <AnimatePresence>
          {showBox ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving"></Box> : null}
        </AnimatePresence>
      </Wrapper>
  )
}

export default Motion;