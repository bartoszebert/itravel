import { getCurrentUser } from "@/api/appwrite";
import { IGlobalState } from "@/interfaces/IGlobalInterface";
import { IUser } from "@/interfaces/IUser";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const defaultGlobalState: IGlobalState = {
  isLogged: false,
  user: null,
  isLoading: true,
  setIsLogged: (isLogged) => {},
  setUser: (user) => {},
};

const GlobalContext = createContext<IGlobalState>(defaultGlobalState);

export const useGlobalContext = () => useContext(GlobalContext);

interface Props {
  children: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const updateUserStatus = async () => {
      setIsLoading(true);
      try {
        const res = await getCurrentUser();
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    updateUserStatus();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isLogged, setIsLogged, user, setUser, isLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
