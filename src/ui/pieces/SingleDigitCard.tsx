import styled from "styled-components";
import {motion} from "motion/react";
import type {PropsWithChildren} from "react";

const Card = styled(motion.div)`
  width: 20%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
`;

function SingleDigitCard({children}: PropsWithChildren) {
  return (
      <Card
          transition={{
            type: "spring",
            duration: 0.9,
            bounce: 0.3,
          }}
          initial={{
            opacity: 0,
            y: 40,
            x: 0,
            rotateX: 120,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            rotateX: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: -10,
            rotateX: 60,
            scale: 0.2,
          }}>
        {children}
      </Card>
  )
}

export default SingleDigitCard;