import {atom} from "jotai";
import {darkTheme, lightTheme} from "../my-theme.ts";

export const themeIndexAtom = atom(0);

export const themeAtom = atom((get) => {
  return get(themeIndexAtom) ? darkTheme : lightTheme;
})