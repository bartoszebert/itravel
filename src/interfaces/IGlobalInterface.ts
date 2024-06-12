import { IUser } from "./IUser";

export interface IGlobalState {
  isLogged: boolean;
  user: IUser | null;
  isLoading: boolean;
  setIsLogged: (isLogged: boolean) => void;
  setUser: (user: IUser | null) => void;
}