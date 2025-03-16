import styled from "styled-components";
import {motion, useMotionValue, useScroll, useTransform} from "motion/react"
import {useEffect} from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
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
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(x, [-800, 0, 800], [
    "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
    "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
    "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))"
  ]);
  const {scrollY, scrollYProgress} = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    // x.on('change', () => {})
    // scale.on('change', () => {})
    scrollY.on('change', () => {
      console.log("scrollY", scrollY.get());
      console.log("scrollYProgress", scrollYProgress.get());
    })
  }, [scrollY, scrollYProgress]);

  return (
      <Wrapper style={{background: gradient}}>
        <Box style={{x, scale, rotateZ}} drag dragSnapToOrigin></Box>
      </Wrapper>
  )
}

export default Motion;