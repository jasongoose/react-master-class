import {atom} from "jotai";

export type TodoItemData = {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

export const todosAtom = atom<TodoItemData[]>([]);

export const todoListAtom = atom((get) => get(todosAtom).filter((todo) => todo['category'] === 'TODO'));

export const doingListAtom = atom((get) => get(todosAtom).filter((todo) => todo['category'] === 'DOING'));

export const doneListAtom = atom((get) => get(todosAtom).filter((todo) => todo['category'] === 'DONE'));
