import { IAddTripForm } from "@/interfaces/IAddTripForm";

export const defaultTrip: IAddTripForm = {
  destination: "",
  name: "",
  photo: "",
  startDate: new Date(),
  endDate: new Date(),
};
