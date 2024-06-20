import getTravelList from "@/api/travelList/getTravelList";
import { ITripItem } from "@/interfaces/ITripItem";
import { useCallback, useEffect, useState } from "react";

const useTripData = () => {
  const [travelList, setTravelList] = useState<ITripItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getTravels = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getTravelList();
      setTravelList(res);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getTravels();
  }, [getTravels]);

  return { travelList, isLoading, error, getTravels, setTravelList };
};
export default useTripData;
