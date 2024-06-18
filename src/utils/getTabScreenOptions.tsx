import TabIcon from "@/components/ui/TabIcon";
import { ImageSourcePropType } from "react-native";

const getTabScreenOptions = (icon: ImageSourcePropType, name: string) => ({
  title: name,
  headerShown: false,
  tabBarIcon: ({ color }: { color: string }) => (
    <TabIcon icon={icon} color={color} name={name} />
  ),
});

export default getTabScreenOptions;
