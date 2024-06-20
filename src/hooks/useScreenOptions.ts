import { useGlobalContext } from "@/context/GlobalProvider";

const useScreenOptions = () => {
  const { theme } = useGlobalContext();

  const lightThemeOptions = {
    tabBarActiveTintColor: "#5c52d6",
    tabBarInactiveTintColor: "#9999b0",
    tabBarStyle: {
      backgroundColor: "#fff",
      borderTopWidth: 1,
      borderTopColor: "#d9d9d9",
      height: 84,
      paddingTop: 12,
    },
  };

  const darkThemeOptions = {
    tabBarActiveTintColor: "#8982e4",
    tabBarInactiveTintColor: "#cdcde0",
    tabBarStyle: {
      backgroundColor: "#161622",
      borderTopWidth: 1,
      borderTopColor: "#232533",
      height: 84,
      paddingTop: 12,
    },
  };

  const screenOptions = theme === "dark" ? darkThemeOptions : lightThemeOptions;

  return { screenOptions };
};

export default useScreenOptions;
