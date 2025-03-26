import {atomWithReducer} from "jotai/utils";

type Timer = {
  time: number;
  isRunning: boolean;
}

enum ActionType {
  START,
  PAUSE,
  RESET,
  TICK,
}

const MINUTES_TO_SECONDS = 60;

const TWENTY_FIVE_MINUTES_TO_SECONDS = 25 * MINUTES_TO_SECONDS;

const initialTimer: Timer = {
  time: TWENTY_FIVE_MINUTES_TO_SECONDS,
  isRunning: false,
}

const timerControlReducer = (curr: Timer, action?: ActionType) => {
  switch (action) {
    case ActionType.START:
      return curr; // 임시지정
    case ActionType.PAUSE:
      return curr; // 임시지정
    case ActionType.RESET:
      return curr; // 임시지정
    case ActionType.TICK:
      return curr; // 임시지정
    default:
      return curr;
  }
};

export const timerControlAtom = atomWithReducer<Timer, ActionType>(initialTimer, timerControlReducer);