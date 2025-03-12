import {atom} from "jotai";

export enum Category {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export type TodoItemData = {
  text: string;
  id: number;
  category: Category;
}

export const todosAtom = atom<TodoItemData[]>([]);

export const todoListAtom = atom((get) => get(todosAtom).filter((todo) => todo['category'] === Category.TODO));

export const doingListAtom = atom((get) => get(todosAtom).filter((todo) => todo['category'] === Category.DOING));

export const doneListAtom = atom((get) => get(todosAtom).filter((todo) => todo['category'] === Category.DONE));
