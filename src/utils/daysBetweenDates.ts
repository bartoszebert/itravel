export const daysBetweenDates = (date1: string, date2: string) => {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
  const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return dayDifference;
};
