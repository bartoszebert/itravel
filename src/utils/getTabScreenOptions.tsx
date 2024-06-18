import TabIcon from "@/components/ui/TabIcon";

const getTabScreenOptions = (icon: any, name: string) => ({
  title: name,
  headerShown: false,
  tabBarIcon: ({ color }: { color: string }) => (
    <TabIcon icon={icon} color={color} name={name} />
  ),
});

export default getTabScreenOptions;
