import { ITravelItem } from "./ITravelItem";

export interface ITravelState {
  travelList: ITravelItem[];
  setTravelList: (travelList: ITravelItem[]) => void;
  isLoading: boolean;
  getTravels: () => void;
  error: Error | null;
}
