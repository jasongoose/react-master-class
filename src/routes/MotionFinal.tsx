import styled from "styled-components";
import {useState} from "react";
import {AnimatePresence, motion} from 'motion/react';

import {MotionBox, MotionWrapper} from "../components/styled-ui.tsx";

const Grid = styled.div`
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  ${MotionBox} {
    width: 100%;

    &:first-child,
    &:last-child {
      grid-column: span 2;
    }
  }
`

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MotionBox} {
    width: 400px;
    height: 200px;
  }
`;

const overlayVariants = {
  initial: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  animate: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  exit: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  }
}

const sampleArr = Array.from({length: 4}).map((_, i) => i + 1);

function MotionFinal() {
  const [clickedId, setClickedId] = useState<number | null>(null);

  const resetOverlay = () => {
    setClickedId(null);
  }

  return (
      <MotionWrapper>
        <Grid>
          {sampleArr.map((key) => <MotionBox key={key} layoutId={key + ''} onClick={() => {
            setClickedId(key)
          }}/>)}
        </Grid>
        <AnimatePresence>
          {clickedId ?
              <Overlay variants={overlayVariants} initial="initial" animate="animate" exit="exit"
                       onClick={resetOverlay}>
                <MotionBox layoutId={clickedId + ''}/>
              </Overlay> : null}
        </AnimatePresence>
      </MotionWrapper>
  );
}

export default MotionFinal;