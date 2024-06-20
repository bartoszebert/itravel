import { TTripStatus } from "@/types/TTripStatus";

export interface IAddTripForm {
  destination: string;
  name: string;
  photo: string;
  startDate: Date;
  endDate: Date;
  status: TTripStatus;
}
