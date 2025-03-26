export const getDecimalDigits = (num: number) => {
  const firstDigit = num / 10;
  const secondDigit = num % 10;
  return [firstDigit, secondDigit];
}