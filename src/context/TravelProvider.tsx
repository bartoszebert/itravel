import useTravelData from "@/hooks/itravel/useTravelData";
import { ITravelState } from "@/interfaces/ITravelState";
import { ReactNode, createContext, useContext } from "react";

const defaultTravelState: ITravelState = {
  travelList: [],
  setTravelList: () => {},
  isLoading: true,
  getTravels: () => {},
  error: null,
};

const TravelContext = createContext<ITravelState>(defaultTravelState);
export const useTravelContext = () => useContext(TravelContext);

interface Props {
  children: ReactNode;
}

const TravelProvider = ({ children }: Props) => {
  const { travelList, setTravelList, isLoading, getTravels, error } =
    useTravelData();
  return (
    <TravelContext.Provider
      value={{ travelList, isLoading, error, setTravelList, getTravels }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default TravelProvider;
