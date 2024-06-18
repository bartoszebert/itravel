import useGetTravelList from "@/api/travelList/useGetTravelList";
import { ITravelItem } from "@/interfaces/ITravelItem";
import { ITravelState } from "@/interfaces/ITravelState";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const defaultTravelState: ITravelState = {
  travelList: [],
  setTravelList: () => {},
  isLoading: true,
  getTravels: () => {},
};

const TravelContext = createContext<ITravelState>(defaultTravelState);
export const useTravelContext = () => useContext(TravelContext);

interface Props {
  children: ReactNode;
}

const TravelProvider = ({ children }: Props) => {
  const [travelList, setTravelList] = useState<ITravelItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTravels = async () => {
    setIsLoading(true);
    try {
      const res = await useGetTravelList();
      setTravelList(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTravels();
  }, []);

  return (
    <TravelContext.Provider
      value={{ travelList, isLoading, setTravelList, getTravels }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default TravelProvider;
