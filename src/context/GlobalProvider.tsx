import useGlobalState from "@/hooks/useGlobalState";
import { IGlobalState } from "@/interfaces/IGlobalInterface";
import { ReactNode, createContext, useContext } from "react";

const defaultGlobalState: IGlobalState = {
  isLogged: false,
  user: null,
  isLoading: true,
  setIsLogged: () => {},
  setUser: () => {},
};

const GlobalContext = createContext<IGlobalState>(defaultGlobalState);
export const useGlobalContext = () => useContext(GlobalContext);

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  const { isLogged, setIsLogged, user, setUser, isLoading } = useGlobalState();
  return (
    <GlobalContext.Provider
      value={{ isLogged, setIsLogged, user, setUser, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
