import SwipeableItem from "@/components/ui/SwipeableItem";
import TripStart from "@/components/ui/TripStart";
import useTripDetails from "@/hooks/itravel/useTripDetails";
import { ITripItem } from "@/interfaces/ITripItem";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
  item: ITripItem;
}

const TravelListItem = ({ item }: Props) => {
  const { name, photo, startDate, $id, status } = item;
  const { deleteItem, dateRange, daysCount, statusColor, textColor } =
    useTripDetails(item);

  return (
    <SwipeableItem handleDelete={deleteItem} id={$id}>
      <Pressable onPress={() => router.push(`/details/${$id}`)}>
        <View className={`${statusColor} rounded-lg flex-row items-center`}>
          <Image
            source={{ uri: photo }}
            className="w-[122px] h-[122px] rounded-lg"
            resizeMode="cover"
          />
          <View className="px-4 gap-1 flex-1">
            <Text
              className={`${textColor} text-lg font-psemibold`}
              numberOfLines={2}
            >
              {name}
            </Text>
            <View>
              <Text className={`${textColor} text-sm`}>{dateRange}</Text>
              <Text className={`${textColor} text-sm`}>{daysCount}</Text>
            </View>
            <TripStart
              textColor={textColor}
              startDate={startDate}
              status={status}
            />
          </View>
        </View>
      </Pressable>
    </SwipeableItem>
  );
};

export default TravelListItem;
