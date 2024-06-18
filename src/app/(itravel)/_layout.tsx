import getTabScreenOptions from "@/utils/getTabScreenOptions";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#8982e4",
        tabBarInactiveTintColor: "#cdcde0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
          paddingTop: 12,
        },
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
