import {useAtom} from "jotai";
import {Action, timerControlAtom} from "../atoms/timer.ts";
import {useEffect} from "react";

export const useTimer = () => {
  const [timer, dispatch] = useAtom(timerControlAtom);

  useEffect(() => {
    let timeoutId: number;

    if (timer['isRunning'] && timer['time'] > 0) {
      timeoutId = setTimeout(() => {
        dispatch({type: Action.TICK});
      }, 1_000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [timer, dispatch]);

  const startTimer = () => {
    dispatch({type: Action.START});
  };

  const pauseTimer = () => {
    dispatch({type: Action.PAUSE});
  };

  const resetTimer = () => {
    dispatch({type: Action.RESET});
  }

  return {
    timer,
    startTimer,
    pauseTimer,
    resetTimer,
  }
}