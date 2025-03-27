import styled from "styled-components";
import {useAtomValue, useSetAtom} from "jotai";
import {useEffect} from "react";
import {appAtom} from "./atoms/app.ts";
import {isTimerRunningAtom, timeLeftAtom, TimerAction} from "./atoms/timer.ts";
import {goalStatusAtom, roundStatusAtom} from "./atoms/progress.ts";
import {calcDecimalDigits, calcMinutesFromSeconds, calcSecondsLeft} from "./utils/math.ts";
import {VerticalSizedBox} from "./ui/parts/VerticalSizedBox.tsx";

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
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const dispatch = useSetAtom(appAtom);
  const isTimerRunning = useAtomValue(isTimerRunningAtom);
  const timeLeft = useAtomValue(timeLeftAtom);
  const roundStatus = useAtomValue(roundStatusAtom);
  const goalStatus = useAtomValue(goalStatusAtom);

  const minutesDecimalDigits = calcDecimalDigits(calcMinutesFromSeconds(timeLeft));
  const secondsLeftDecimalDigits = calcDecimalDigits(calcSecondsLeft(timeLeft));

  useEffect(() => {
    let timeoutId: number;
    if (isTimerRunning && timeLeft >= 0) {
      timeoutId = setTimeout(() => {
        dispatch({type: TimerAction.TICK});
      }, 1_000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [dispatch, isTimerRunning, timeLeft]);

  const startTimer = () => {
    dispatch({type: TimerAction.START});
  };

  const pauseTimer = () => {
    dispatch({type: TimerAction.PAUSE});
  };

  const resetTimer = () => {
    dispatch({type: TimerAction.RESET});
  }

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
        <VerticalSizedBox $size={100} $unit={'px'}/>
        <ProgressContainer>
          <span>{`round:: ${roundStatus}`}</span>
          <span>{`goal:: ${goalStatus}`}</span>
        </ProgressContainer>
      </AppLayout>
  )
}

export default App