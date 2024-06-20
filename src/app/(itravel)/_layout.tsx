import useScreenOptions from "@/hooks/useScreenOptions";
import getTabScreenOptions from "@/utils/getTabScreenOptions";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabsLayout = () => {
  const { screenOptions } = useScreenOptions();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        ...screenOptions,
      }}
    >
      <Tabs.Screen
        name="home"
        options={getTabScreenOptions(icons.home, "Home")}
      />
      <Tabs.Screen
        name="(trips)"
        options={getTabScreenOptions(icons.travel, "Trips")}
      />
      <Tabs.Screen
        name="discover"
        options={getTabScreenOptions(icons.discover, "Discover")}
      />
      <Tabs.Screen
        name="travelmates"
        options={getTabScreenOptions(icons.travelmates, "TravelMates")}
      />
      <Tabs.Screen
        name="(profile)"
        options={getTabScreenOptions(icons.profile, "Profile")}
      />
    </Tabs>
  );
};

export default TabsLayout;
