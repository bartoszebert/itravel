import { ILocation } from "@/interfaces/ILocation";
import { Pressable, Text, View } from "react-native";
interface Props {
  item: ILocation;
  onSelect: () => void;
}

const LocationListItem = ({ item, onSelect }: Props) => (
  <Pressable
    onPress={onSelect}
    className="rounded-xl w-full bg-primary-800 mt-1 z-50"
  >
    <View className="items-start py-3 px-5">
      <Text className="text-white font-psemibold">{item.address_line1}</Text>
      <Text className="text-white">{item.address_line2}</Text>
    </View>
  </Pressable>
);
export default LocationListItem;
