import {mockData} from "./mock-data.ts";

export const getAuthorList = () => mockData;

export const getTargetAuthor = (authorId: string) => {
  const targetAuthor = mockData.find(el => el['id'] === authorId);
  return targetAuthor ?? null;
}

export const getTargetBook = (authorId: string, bookId: string) => {
  const targetAuthor = getTargetAuthor(authorId);
  if (!targetAuthor) {
    return null;
  }
  const targetBook = targetAuthor['books'].find(book => book['id'] === bookId);
  return targetBook ?? null;
}