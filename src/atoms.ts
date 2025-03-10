import {atom} from "jotai/index";
import {splitAtom} from "jotai/utils";

export type TodoItemData = {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

export const todosAtom = atom<TodoItemData[]>([]);

export const splitTodosAtom = splitAtom(todosAtom);
