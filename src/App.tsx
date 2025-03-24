import {SubmitHandler, useForm} from "react-hook-form";
import style from "./App.module.css";
import {Bucket, Category} from "./atoms/bucketList.ts";
import {useBucketList} from "./hooks/useBucketList.ts";

type FormData = {
  bucketName: string;
}

function App() {
  const {register, handleSubmit, formState: {errors}, setValue} = useForm<FormData>();

  const {
    setBucketList,
    wantList,
    wentList,
    favoriteList
  } = useBucketList();

  const updateBucketCategory = (bucketId: number, targetCategory: Category) => {
    setBucketList((prev) => {
      const targetBucketIndex = prev.findIndex((bucket) => bucket['id'] === bucketId);
      return [
        ...prev.slice(0, targetBucketIndex),
        ...prev.slice(targetBucketIndex + 1),
        {...prev[targetBucketIndex], category: targetCategory}
      ];
    });
  }

  const onValid: SubmitHandler<FormData> = (formData) => {
    const newBucket: Bucket = {
      text: formData['bucketName'],
      id: Date.now(),
      category: Category.WANT,
    };
    setBucketList((prev) => [...prev, newBucket]);
    setValue('bucketName', '');
  }

  const handleCheckButtonClick = (bucketId: number) => () => {
    updateBucketCategory(bucketId, Category.WENT);
  }

  const handleTrashButtonClick = (bucketId: number) => () => {
    setBucketList((prev) => prev.filter((bucket) => bucket['id'] !== bucketId));
  }

  const handleThumbsUpButtonClick = (bucketId: number) => () => {
    updateBucketCategory(bucketId, Category.FAVORITE);
  }

  const handleRedCrossButtonClick = (bucketId: number) => () => {
    updateBucketCategory(bucketId, Category.WANT);
  }

  const handleThumbsDownButtonClick = (bucketId: number) => () => {
    updateBucketCategory(bucketId, Category.WENT);
  }

  return (
      <main className={style['container']}>
        <fieldset>
          <legend>
            <h1>내가 가고 싶은 나라들</h1>
          </legend>
          <form className={style['form-layout']} onSubmit={handleSubmit(onValid)}>
            <input type="text" placeholder="이름" {...register('bucketName', {required: true})} />
            {errors['bucketName']?.type === 'required' ?
                <small className={style['error-text']}>😠 required!</small> : null}
            <button type="submit">가자!</button>
          </form>
          <ul>
            {wantList.map((bucket) => (
                <li className={style['bucket-item']} key={bucket['id']}>
                  <span>{bucket['text']}</span>
                  <button onClick={handleCheckButtonClick(bucket['id'])}>✅</button>
                  <button onClick={handleTrashButtonClick(bucket['id'])}>🗑️</button>
                </li>
            ))}
          </ul>
        </fieldset>
        <fieldset>
          <legend>
            <h1>내가 가본 나라들</h1>
          </legend>
          <ul>
            {wentList.map((bucket) => (
                <li className={style['bucket-item']} key={bucket['id']}>
                  <span>{bucket['text']}</span>
                  <button onClick={handleThumbsUpButtonClick(bucket['id'])}>👍</button>
                  <button onClick={handleRedCrossButtonClick(bucket['id'])}>❌</button>
                </li>
            ))}
          </ul>
        </fieldset>
        <fieldset>
          <legend><h1>내가 좋아하는 나라들</h1></legend>
          <ul>
            {favoriteList.map((bucket) => (
                <li className={style['bucket-item']} key={bucket['id']}>
                  <span>{bucket['text']}</span>
                  <button onClick={handleThumbsDownButtonClick(bucket['id'])}>👎</button>
                </li>
            ))}
          </ul>
        </fieldset>
      </main>
  )
}

export default App