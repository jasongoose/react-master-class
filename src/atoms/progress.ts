import {atom} from "jotai";

export enum ProgressAction {
  RESET_ROUND_COUNT,
  ADD_ROUND_COUNT,
  RESET_GOAL_COUNT,
  ADD_GOAL_COUNT,
}

type ProgressActionType = {
  type: ProgressAction;
}

const MAXIMUM_ROUND_COUNT = 4;

const MAXIMUM_GOAL_COUNT = 10;

const roundCounterAtom = atom(0);

const goalCounterAtom = atom(0);

export const progressAtom = atom(
    (get) => {
      return [get(roundCounterAtom), get(goalCounterAtom)];
    },
    (get, set, action: ProgressActionType) => {
      switch (action['type']) {
        case ProgressAction.RESET_ROUND_COUNT:
          set(roundCounterAtom, 0);
          break;
        case ProgressAction.ADD_ROUND_COUNT:
          if (get(roundCounterAtom) === MAXIMUM_ROUND_COUNT) {
            set(goalCounterAtom, get(goalCounterAtom) + 1);
            set(roundCounterAtom, 0);
          } else {
            set(roundCounterAtom, get(roundCounterAtom) + 1);
          }
          break;
        case ProgressAction.RESET_GOAL_COUNT:
          set(goalCounterAtom, 0);
          break;
        case ProgressAction.ADD_GOAL_COUNT:
          if (get(goalCounterAtom) === MAXIMUM_GOAL_COUNT) {
            set(goalCounterAtom, 0);
          } else {
            set(goalCounterAtom, get(goalCounterAtom) + 1);
          }
          break;
      }
    }
);