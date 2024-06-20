import SwipeableItem from "@/components/ui/SwipeableItem";
import TripStart from "@/components/ui/TripStart";
import useTripListItem from "@/hooks/itravel/useTripListItem";
import { ITripItem } from "@/interfaces/ITripItem";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
  item: ITripItem;
}

const TravelListItem = ({ item }: Props) => {
  const { name, photo, startDate, $id } = item;
  const { deleteItem, dateRange, daysCount } = useTripListItem(item);

  return (
    <SwipeableItem handleDelete={deleteItem} id={$id}>
      <Pressable onPress={() => router.push(`/details/${$id}`)}>
        <View className="bg-primary-800 rounded-lg flex-row items-center">
          <Image
            source={{ uri: photo }}
            className="w-[122px] h-[122px] rounded-lg"
            resizeMode="cover"
          />
          <View className="px-4 gap-1 flex-1">
            <Text
              className="text-primary-100 text-lg font-psemibold"
              numberOfLines={2}
            >
              {name}
            </Text>
            <View>
              <Text className="text-primary-100 text-sm">{dateRange}</Text>
              <Text className="text-primary-100 text-sm">{daysCount}</Text>
            </View>
            <TripStart startDate={startDate} />
          </View>
        </View>
      </Pressable>
    </SwipeableItem>
  );
};

export default TravelListItem;
