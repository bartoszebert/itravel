import { daysBetweenDates } from "./daysBetweenDates";

export const renderDaysCount = (startDate: string, endDate: string) => {
  const days = daysBetweenDates(startDate, endDate);
  return days > 1 ? `${days} days` : `${days} day`;
};
