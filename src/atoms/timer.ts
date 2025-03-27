import {atomWithReducer} from "jotai/utils";

enum Action {
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

const MINUTES_TO_SECONDS = 60;

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
      return ({...curr, time: Math.max(curr['time'] - 1, 0)});
    default:
      return curr;
  }
};

export const timerControlAtom = atomWithReducer<Timer, ActionType>(generateInitialTimer(), timerControlReducer);