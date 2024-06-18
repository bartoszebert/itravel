import { daysUntilDate } from "./daysUntilDate";

export const renderDaysUntilStart = (startDate: string) => {
  const days = daysUntilDate(startDate);
  return days > 1 ? `${days} days` : `${days} day`;
};
