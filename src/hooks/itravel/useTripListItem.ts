import deleteTravel from "@/api/travelList/deleteTravel";
import { useTripContext } from "@/context/TripProvider";
import { ITripItem } from "@/interfaces/ITripItem";
import { parseDate } from "@/utils/parseDate";
import { renderDaysCount } from "@/utils/renderDaysCount";

const useTripListItem = (item: ITripItem) => {
  const { getTravels } = useTripContext();
  const { $id, startDate, endDate } = item;

  const startDateFormatted = parseDate(startDate);
  const endDateFormatted = parseDate(endDate);

  const dateRange =
    startDate === endDate
      ? startDateFormatted
      : `${startDateFormatted} - ${endDateFormatted}`;

  const daysCount = renderDaysCount(startDate, endDate);

  const deleteItem = async () => {
    await deleteTravel($id);
    getTravels();
  };

  return { deleteItem, dateRange, daysCount };
};

export default useTripListItem;
