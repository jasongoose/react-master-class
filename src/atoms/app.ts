import {atom} from "jotai";
import {ProgressAction, progressAtom} from "./progress.ts";
import type {TimerActionType} from "./timer.ts";
import {generateInitialTimer, timeLeftAtom, TimerAction, timerAtom} from "./timer.ts";

export const appAtom = atom(
    null,
    (get, set, action: TimerActionType) => {
      switch (action?.['type']) {
        case TimerAction.START:
          set(timerAtom, {...get(timerAtom), isRunning: true});
          break;
        case TimerAction.PAUSE:
          set(timerAtom, {...get(timerAtom), isRunning: false});
          break;
        case TimerAction.RESET:
          set(timerAtom, generateInitialTimer());
          set(progressAtom, {type: ProgressAction.RESET_ROUND_COUNT});
          set(progressAtom, {type: ProgressAction.RESET_GOAL_COUNT});
          break;
        case TimerAction.TICK:
          // 잔여 시간이 없는 경우, reset
          if (get(timeLeftAtom) === 1) {
            set(timerAtom, generateInitialTimer());
            set(progressAtom, {type: ProgressAction.ADD_ROUND_COUNT});
          } else {
            set(timeLeftAtom, get(timeLeftAtom) - 1);
          }
          break;
      }
    }
);