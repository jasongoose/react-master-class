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

const Svg = styled(motion.svg)`
  width: 300px;
  height: 300px;
  color: white;

  path {
    stroke: white;
    stroke-width: 2px;
  }
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
    // scrollY.on('change', () => {})
  }, [scrollY, scrollYProgress]);

  const svgVariants = {
    start: {
      fill: "rgba(255, 255, 255, 0)",
      pathLength: 0,
    },
    end: {
      fill: "rgba(255, 255, 255, 1)",
      pathLength: 1,
    }
  }

  return (
      <Wrapper style={{background: gradient}}>
        {/*<Box style={{x, scale, rotateZ}} drag dragSnapToOrigin></Box>*/}
        <Svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512">
          <motion.path
              variants={svgVariants}
              initial="start"
              animate="end"
              transition={{
                default: {
                  duration: 5,
                  fill: {
                    duration: 2, delay: 5
                  }
                }
              }}
              d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"/>
        </Svg>
      </Wrapper>
  )
}

export default Motion;