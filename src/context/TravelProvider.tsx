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
  setTravelList: (travelList: any[]) => void;
  isLoading: boolean;
  getTravels: () => void;
}

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
  const [travelList, setTravelList] = useState<any[]>([]);
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
