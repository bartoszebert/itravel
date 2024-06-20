import useGlobalState from "@/hooks/useGlobalState";
import { IGlobalState } from "@/interfaces/IGlobalInterface";
import { themes } from "@/utils/colorTheme";
import { useColorScheme } from "nativewind";
import { ReactNode, createContext, useContext } from "react";
import { View } from "react-native";

const defaultGlobalState: IGlobalState = {
  theme: "light",
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
  const { colorScheme } = useColorScheme();
  const resolvedColorScheme = colorScheme || "dark";

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        isLoading,
        theme: resolvedColorScheme,
      }}
    >
      <View style={themes[resolvedColorScheme]} className="flex-1">
        {children}
      </View>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
