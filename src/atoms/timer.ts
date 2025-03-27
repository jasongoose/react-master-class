import {atomWithReducer} from "jotai/utils";
import {MINUTES_TO_SECONDS} from "../utils/math.ts";

export enum Action {
  START,
  PAUSE,
  RESET,
  TICK,
}

type Timer = {
  time: number;
  isRunning: boolean;
}

type ActionType = { type: Action };

const TWENTY_FIVE_MINUTES_TO_SECONDS = 25 * MINUTES_TO_SECONDS;

const generateInitialTimer = (): Timer => ({
  time: TWENTY_FIVE_MINUTES_TO_SECONDS,
  isRunning: false,
})

const timerControlReducer = (curr: Timer, action?: ActionType) => {
  switch (action?.['type']) {
    case Action.START:
      return ({...curr, isRunning: true});
    case Action.PAUSE:
      return ({...curr, isRunning: false});
    case Action.RESET:
      return generateInitialTimer();
    case Action.TICK:
      // 잔여 시간이 없는 경우, reset
      return curr['time'] === 0 ? generateInitialTimer() : ({...curr, time: curr['time'] - 1});
    default:
      return curr;
  }
};

export const timerControlAtom = atomWithReducer<Timer, ActionType>(generateInitialTimer(), timerControlReducer);