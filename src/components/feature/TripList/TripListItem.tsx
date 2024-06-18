import SwipeableItem from "@/components/ui/SwipeableItem";
import useTripListItem from "@/hooks/itravel/useTripListItem";
import { ITravelItem } from "@/interfaces/ITravelItem";
import { parseDate } from "@/utils/parseDate";
import { renderDaysCount } from "@/utils/renderDaysCount";
import { renderDaysUntilStart } from "@/utils/renderDaysUntilStart";
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
            className="w-[100px] h-[100px] rounded-lg"
            resizeMode="cover"
          />
          <View className="px-3 gap-1">
            <Text className="text-white text-sm font-psemibold">{name}</Text>
            <View>
              <Text className="text-white text-xs">
                {parseDate(startDate)} - {parseDate(endDate)}
              </Text>
              <Text className="text-white text-xs">
                {renderDaysCount(startDate, endDate)}
              </Text>
            </View>
            <Text className="text-white text-xs">
              <Text className="font-psemibold">Starts in </Text>
              {renderDaysUntilStart(startDate)}
            </Text>
          </View>
        </View>
      </Pressable>
    </SwipeableItem>
  );
};

export default TravelListItem;
