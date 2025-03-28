import styled from "styled-components";
import {useAtomValue, useSetAtom} from "jotai";
import {useEffect} from "react";
import {AnimatePresence} from "motion/react";
import {appAtom} from "./atoms/app.ts";
import {isTimerRunningAtom, timeLeftAtom, TimerAction} from "./atoms/timer.ts";
import {goalStatusAtom, roundStatusAtom} from "./atoms/progress.ts";
import {calcDecimalDigits, calcMinutesFromSeconds, calcSecondsLeft} from "./utils/math.ts";
import SingleDigitCard from "./ui/pieces/SingleDigitCard.tsx";
import ToggleSlider from "./ui/parts/ToggleSlider.tsx";
import {VerticalSizedBox} from "./ui/parts/VerticalSizedBox.tsx";
import Battery from "./ui/parts/Battery.tsx";

const AppLayout = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 100px;
  text-align: center;
  padding-top: 40px;
`;

const ContentsLayout = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const DigitsLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 5px;
`;

const ProgressLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProgressTitle = styled.h2`
  font-size: 40px;
`;

const ResetButton = styled.div`
  height: 50px;
  outline: 1px solid ${(props) => props.theme.contrast};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
`;

function App() {
  const dispatch = useSetAtom(appAtom);
  const isTimerRunning = useAtomValue(isTimerRunningAtom);
  const timeLeft = useAtomValue(timeLeftAtom);
  const [currentRound, totalRounds] = useAtomValue(roundStatusAtom);
  const [currentGoal, totalGoals] = useAtomValue(goalStatusAtom);

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

  const handleToggleChipClick = () => {
    (isTimerRunning ? pauseTimer : startTimer)();
  }

  return (
      <AppLayout>
        <Title>Pomodoro</Title>
        <VerticalSizedBox $size={80} $unit={'px'}/>
        <ContentsLayout>
          <AnimatePresence initial={false}>
            <DigitsLayout>
              <SingleDigitCard key={minutesDecimalDigits[0] + '_0'}>{minutesDecimalDigits[0]}</SingleDigitCard>
              <SingleDigitCard key={minutesDecimalDigits[1] + '_1'}>{minutesDecimalDigits[1]}</SingleDigitCard>
              <SingleDigitCard>:</SingleDigitCard>
              <SingleDigitCard key={secondsLeftDecimalDigits[0] + '_2'}>{secondsLeftDecimalDigits[0]}</SingleDigitCard>
              <SingleDigitCard key={secondsLeftDecimalDigits[1] + '_3'}>{secondsLeftDecimalDigits[1]}</SingleDigitCard>
            </DigitsLayout>
          </AnimatePresence>
          <VerticalSizedBox $size={30} $unit={'px'}/>
          <ToggleSlider
              isOn={!isTimerRunning}
              onText="Pause"
              offText="Start"
              handleToggleChipClick={handleToggleChipClick}
          />
          <VerticalSizedBox $size={100} $unit={'px'}/>
          <ProgressLayout>
            <ProgressTitle>Round</ProgressTitle>
            <Battery currentGauge={currentRound} totalGauge={totalRounds}/>
          </ProgressLayout>
          <VerticalSizedBox $size={30} $unit={'px'}/>
          <ProgressLayout>
            <ProgressTitle>Goal</ProgressTitle>
            <Battery currentGauge={currentGoal} totalGauge={totalGoals}/>
          </ProgressLayout>
          <VerticalSizedBox $size={150} $unit={'px'}/>
          <ResetButton onClick={resetTimer}>Reset</ResetButton>
        </ContentsLayout>
      </AppLayout>
  )
}

export default App