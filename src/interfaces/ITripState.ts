import { ITripItem } from "./ITripItem";

export interface ITripState {
  travelList: ITripItem[];
  setTravelList: (travelList: ITripItem[]) => void;
  isLoading: boolean;
  getTravels: () => void;
  error: Error | null;
}
