import { useTravelContext } from "@/context/TravelProvider";
import { useEffect } from "react";

const useTripList = () => {
  const { travelList, getTravels, isLoading } = useTravelContext();

  useEffect(() => {
    getTravels();
  }, []);

  return { travelList, isLoading, getTravels };
};
export default useTripList;
