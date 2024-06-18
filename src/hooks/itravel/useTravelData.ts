import getTravelList from "@/api/travelList/getTravelList";
import { ITravelItem } from "@/interfaces/ITravelItem";
import { useCallback, useEffect, useState } from "react";

const useTravelData = () => {
  const [travelList, setTravelList] = useState<ITravelItem[]>([]);
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
export default useTravelData;
