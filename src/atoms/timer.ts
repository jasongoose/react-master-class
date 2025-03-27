import {MINUTES_TO_SECONDS} from "../utils/math.ts";
import {atom} from "jotai";

export enum TimerAction {
  START,
  PAUSE,
  RESET,
  TICK,
}

export type TimerActionType = { type: TimerAction };

type Timer = {
  timeLeft: number;
  isRunning: boolean;
};

const TWENTY_FIVE_MINUTES_TO_SECONDS = 25 * MINUTES_TO_SECONDS;

export const generateInitialTimer = (): Timer => ({
  timeLeft: TWENTY_FIVE_MINUTES_TO_SECONDS,
  isRunning: false,
});

export const timerAtom = atom(generateInitialTimer());

export const timeLeftAtom = atom(
    (get) => {
      return get(timerAtom)['timeLeft'];
    },
    (get, set, newValue: number) => {
      set(timerAtom, {...get(timerAtom), timeLeft: newValue});
    }
);

export const isTimerRunningAtom = atom((get) => get(timerAtom)['isRunning']);