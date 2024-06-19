import { Image, ImageSourcePropType, Text, View } from "react-native";

interface Props {
  icon: ImageSourcePropType;
  color: string;
  name: string;
}

const TabIcon = ({ icon, color, name }: Props) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
        testID="tab-icon-image"
      />
      <Text className={"text-xs font-pregular"} style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};
export default TabIcon;
