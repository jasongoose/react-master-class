import {atom} from "jotai";

enum Category {
  "WANT",
  "WENT",
  "FAVORITE"
}

type Bucket = {
  text: string;
  id: number;
  category: Category;
}

type BucketList = Bucket[];

export const bucketListAtom = atom<BucketList>([])

export const wantListAtom = atom<BucketList>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.WANT));

export const wentListAtom = atom<BucketList>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.WENT));

export const favoriteListAtom = atom<BucketList>((get) => get(bucketListAtom).filter((bucket) => bucket['category'] === Category.FAVORITE));

