export const MINUTES_TO_SECONDS = 60;

export const calcMinutesFromSeconds = (totalSeconds: number) => {
  return Math.floor(totalSeconds / MINUTES_TO_SECONDS);
}

export const calcSecondsLeft = (totalSeconds: number) => {
  return totalSeconds % MINUTES_TO_SECONDS;
}

export const calcDecimalDigits = (num: number) => {
  const firstDigit = Math.floor(num / 10);
  const secondDigit = num % 10;
  return [firstDigit, secondDigit];
}