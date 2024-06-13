import useGetTravelList from "@/api/travelList/useGetTravelList";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ITravelState {
  travelList: any[];
  isLoading: boolean;
}

const defaultTravelState: ITravelState = {
  travelList: [],
  isLoading: true,
};

const TravelContext = createContext<ITravelState>(defaultTravelState);
export const useTravelContext = () => useContext(TravelContext);

interface Props {
  children: ReactNode;
}

const TravelProvider = ({ children }: Props) => {
  const [travelList, setTravelList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const updateTravels = async () => {
      setIsLoading(true);
      try {
        const res = await useGetTravelList();
        console.log(res);
        setTravelList(res);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    updateTravels();
  }, []);

  return (
    <TravelContext.Provider value={{ travelList, isLoading }}>
      {children}
    </TravelContext.Provider>
  );
};

export default TravelProvider;
