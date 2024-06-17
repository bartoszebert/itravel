import { daysBetweenDates } from "@/utils/daysBetweenDates";
import { daysUntilDate } from "@/utils/daysUntilDate";
import { parseDate } from "@/utils/parseDate";
import React, { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface ITravelListItem {
  item: {
    travelId: string;
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    destination: string;
    photo: string;
    budget: number;
    owner: string;
  };
  handleDelete: () => void;
}

let rowRefs = new Map();

const TravelListItem = ({ item, handleDelete }: ITravelListItem) => {
  const { name, photo, startDate, endDate, travelId } = item;
  const swipeableRef = useRef<Swipeable>(null);

  const renderDaysCount = () => {
    const days = daysBetweenDates(startDate, endDate);
    return days > 1 ? `${days} days` : `${days} day`;
  };

  const renderDaysUntilStart = () => {
    const days = daysUntilDate(startDate);
    return days > 1 ? `${days} days` : `${days} day`;
  };

  const rightSwipe = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleDelete}
      className="bg-red-800 justify-center p-5 ml-1 rounded-lg"
    >
      <View>
        <Text className="text-white font-pmedium">Delete</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={rightSwipe}
        ref={(ref) => {
          if (ref && !rowRefs.get(item.travelId)) {
            rowRefs.set(item.travelId, ref);
          }
        }}
        onSwipeableWillOpen={() => {
          [...rowRefs.entries()].forEach(([key, ref]) => {
            if (key !== item.travelId && ref) ref.close();
          });
        }}
      >
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
              <Text className="text-white text-xs">{renderDaysCount()}</Text>
            </View>
            <Text className="text-white text-xs">
              <Text className="font-psemibold">Starts in </Text>
              {renderDaysUntilStart()}
            </Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default TravelListItem;
