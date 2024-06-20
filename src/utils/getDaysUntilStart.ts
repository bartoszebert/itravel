import { daysUntilDate } from "./daysUntilDate";

export const getDaysUntilStart = (startDate: string) => {
  const days = daysUntilDate(startDate);
  return days;
};
