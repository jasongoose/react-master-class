import styled from "styled-components";
import {useTimer} from "./hooks/useTimer.ts";
import {calcDecimalDigits, calcMinutesFromSeconds, calcSecondsLeft} from "./utils/math.ts";

const AppLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 50px;
  text-align: center;
  padding: 10px 0;
`;

const TimerDigitsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

function App() {
  const {
    timer,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer();

  const minutesDecimalDigits = calcDecimalDigits(calcMinutesFromSeconds(timer['time']));

  const secondsLeftDecimalDigits = calcDecimalDigits(calcSecondsLeft(timer['time']));

  return (
      <AppLayout>
        <Title>Pomodoro</Title>
        <TimerDigitsContainer>
          <span>{minutesDecimalDigits[0]}</span>
          <span>{minutesDecimalDigits[1]}</span>
          <span>{secondsLeftDecimalDigits[0]}</span>
          <span>{secondsLeftDecimalDigits[1]}</span>
        </TimerDigitsContainer>
        <ButtonsContainer>
          <button onClick={startTimer}>Start</button>
          <button onClick={pauseTimer}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </ButtonsContainer>
      </AppLayout>
  )
}

export default App