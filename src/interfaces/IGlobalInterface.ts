import { IUser } from "./IUser";

export interface IGlobalState {
  theme: "light" | "dark";
  isLogged: boolean;
  user: IUser | null;
  isLoading: boolean;
  setIsLogged: (isLogged: boolean) => void;
  setUser: (user: IUser | null) => void;
}
