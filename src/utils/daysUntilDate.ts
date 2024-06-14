export const daysUntilDate = (date: string) => {
  const targetDate = new Date(date);
  const currentDate = new Date();

  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return dayDifference;
};
