export const MINUTES_TO_SECONDS = 60;
export const getDecimalDigits = (num: number) => {
  const firstDigit = num / 10;
  const secondDigit = num % 10;
  return [firstDigit, secondDigit];
}