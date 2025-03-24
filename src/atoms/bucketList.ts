import {atom} from "jotai";

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

export const bucketListAtom = atom<Bucket[]>([])

export const wantListAtom = atom<Bucket[]>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.WANT));

export const wentListAtom = atom<Bucket[]>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.WENT));

export const favoriteListAtom = atom<Bucket[]>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.FAVORITE));

// TODO:: localStorage 연동