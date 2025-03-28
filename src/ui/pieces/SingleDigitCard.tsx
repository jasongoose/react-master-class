import styled from "styled-components";
import {motion} from "motion/react";
import type {PropsWithChildren} from "react";

const Card = styled(motion.div)`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
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
            y: -40,

          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 10,
          }}>
        {children}
      </Card>
  )
}

export default SingleDigitCard;