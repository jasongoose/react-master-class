import {atom} from "jotai";
import {atomWithStorage} from 'jotai/utils';

export enum Category {
  "WANT",
  "WENT",
  "FAVORITE"
}

export type Bucket = {
  text: string;
  id: number;
  category: Category;
}

export const bucketListAtom = atomWithStorage<Bucket[]>('bucketList', []);

export const wantListAtom = atom<Bucket[]>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.WANT));

export const wentListAtom = atom<Bucket[]>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.WENT));

export const favoriteListAtom = atom<Bucket[]>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.FAVORITE));