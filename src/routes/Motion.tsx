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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  position: absolute;
  top: 100px;
`;

const sampleArr = Array.from({length: 10}, (_, index) => index);

function Motion() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [back, setBack] = useState(false)

  const nextPlease = () => {
    setVisibleIndex((visibleIndex + 1) % sampleArr.length);
    setBack(false);
  }

  const prevPlease = () => {
    setVisibleIndex(visibleIndex === 0 ? sampleArr.length - 1 : visibleIndex - 1);
    setBack(true);
  }

  const boxVariants = {
    entry: (back: boolean) => ({
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      }
    },
    exit: (back: boolean) => ({
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
      }
    }),
  }

  return (
      <>
        <Wrapper>
          <AnimatePresence custom={back} mode="wait">
            <Box key={visibleIndex} variants={boxVariants} initial="entry" animate="center"
                 exit="exit" custom={back}>{visibleIndex}</Box>
          </AnimatePresence>
        </Wrapper>
        <button onClick={nextPlease}>Next</button>
        <button onClick={prevPlease}>Previous</button>
      </>
  )
}

export default Motion;