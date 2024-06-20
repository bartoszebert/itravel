import useTripData from "@/hooks/itravel/useTripData";
import { ITripState } from "@/interfaces/ITripState";
import { ReactNode, createContext, useContext } from "react";

const defaultTravelState: ITripState = {
  travelList: [],
  setTravelList: () => {},
  isLoading: true,
  getTravels: () => {},
  error: null,
};

const TripContext = createContext<ITripState>(defaultTravelState);
export const useTripContext = () => useContext(TripContext);

interface Props {
  children: ReactNode;
}

const TripProvider = ({ children }: Props) => {
  const { travelList, setTravelList, isLoading, getTravels, error } =
    useTripData();
  return (
    <TripContext.Provider
      value={{ travelList, isLoading, error, setTravelList, getTravels }}
    >
      {children}
    </TripContext.Provider>
  );
};

export default TripProvider;
