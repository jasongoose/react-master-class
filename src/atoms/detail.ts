import { atom } from 'jotai';

export const detailMovieIdAtom = atom<number | null>(null);

export const detailMovieModalOpenStatusAtom = atom(
  (get) => get(detailMovieIdAtom) !== null
);
