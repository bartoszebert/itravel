import { useTripContext } from "@/context/TripProvider";
import { useEffect } from "react";

const useTripList = () => {
  const { travelList, getTravels, isLoading } = useTripContext();

  useEffect(() => {
    getTravels();
  }, [getTravels]);

  return { travelList, isLoading, getTravels };
};
export default useTripList;
