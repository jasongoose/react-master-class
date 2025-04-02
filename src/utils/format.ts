export const numberWithComma = (value: string | number) => {
  return (value + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const MINUTES_TO_SECONDS = 60;

export const calcMinutesToHours = (totalSeconds: number) => {
  return Math.floor(totalSeconds / MINUTES_TO_SECONDS);
};

export const calcMinutesLeft = (totalSeconds: number) => {
  return totalSeconds % MINUTES_TO_SECONDS;
};
