import SwipeableItem from "@/components/ui/SwipeableItem";
import TripStart from "@/components/ui/TripStart";
import useTripListItem from "@/hooks/itravel/useTripListItem";
import { ITravelItem } from "@/interfaces/ITravelItem";
import { parseDate } from "@/utils/parseDate";
import { renderDaysCount } from "@/utils/renderDaysCount";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
  item: ITravelItem;
}

const TravelListItem = ({ item }: Props) => {
  const { name, photo, startDate, endDate, $id } = item;
  const { deleteItem } = useTripListItem(item);

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
              <Text className="text-primary-100 text-sm">
                {parseDate(startDate)} - {parseDate(endDate)}
              </Text>
              <Text className="text-primary-100 text-sm">
                {renderDaysCount(startDate, endDate)}
              </Text>
            </View>
            <TripStart startDate={startDate} />
          </View>
        </View>
      </Pressable>
    </SwipeableItem>
  );
};

export default TravelListItem;
