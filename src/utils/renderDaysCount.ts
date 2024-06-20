import { daysBetweenDates } from "./daysBetweenDates";

export const renderDaysCount = (startDate: string, endDate: string) => {
  const days = daysBetweenDates(startDate, endDate) + 1;
  return days > 1 ? `${days} days` : `${days} day`;
};
