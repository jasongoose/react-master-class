import {useAtomValue, useSetAtom} from "jotai";
import {bucketListAtom, favoriteListAtom, wantListAtom, wentListAtom} from '../atoms/bucketList.ts'

export const useBucketList = () => {
  const setBucketList = useSetAtom(bucketListAtom);
  const wantList = useAtomValue(wantListAtom);
  const wentList = useAtomValue(wentListAtom);
  const favoriteList = useAtomValue(favoriteListAtom);

  return {
    setBucketList,
    wantList,
    wentList,
    favoriteList
  }
}