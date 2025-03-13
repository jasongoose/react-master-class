import {useAtomValue, useSetAtom} from "jotai/index";
import {doingListAtom, doneListAtom, todoListAtom, todosAtom} from "../atoms.ts";

export const useTodo = () => {
  const setTodos = useSetAtom(todosAtom);

  const todoList = useAtomValue(todoListAtom);

  const doingList = useAtomValue(doingListAtom);

  const doneList = useAtomValue(doneListAtom);

  return {
    todoList,
    doingList,
    doneList,
    setTodos,
  }
}