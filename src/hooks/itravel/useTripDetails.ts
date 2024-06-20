import deleteTravel from "@/api/travelList/deleteTravel";
import { useTripContext } from "@/context/TripProvider";
import { ITripItem } from "@/interfaces/ITripItem";
import { getDaysUntilStart } from "@/utils/getDaysUntilStart";
import { parseDate } from "@/utils/parseDate";
import { renderDaysCount } from "@/utils/renderDaysCount";
import { useMemo } from "react";

const useTripDetails = (item: ITripItem) => {
  const { getTravels } = useTripContext();
  const { $id, startDate, endDate, status } = item;

  const startDateFormatted = parseDate(startDate);
  const endDateFormatted = parseDate(endDate);
  const startsToday = getDaysUntilStart(startDate) <= 0;

  const statusColor = useMemo(() => {
    if (startsToday && status === "upcoming") return "bg-secondary";
    if (status === "ongoing") return "bg-green-700";
    if (status === "ended") return "bg-primary-800 opacity-50";
    return "bg-primary-800";
  }, [startsToday, status]);

  const dateRange =
    startDate === endDate
      ? startDateFormatted
      : `${startDateFormatted} - ${endDateFormatted}`;

  const daysCount = useMemo(
    () => renderDaysCount(startDate, endDate),
    [startDate, endDate]
  );

  const deleteItem = async () => {
    await deleteTravel($id);
    getTravels();
  };

  return { deleteItem, dateRange, daysCount, startsToday, statusColor };
};

export default useTripDetails;
