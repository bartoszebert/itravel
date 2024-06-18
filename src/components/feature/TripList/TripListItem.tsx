import useDeleteTravel from "@/api/travelList/useDeleteTravel";
import SwipeableDeleteItem from "@/components/ui/SwipeableDeleteItem";
import { useTravelContext } from "@/context/TravelProvider";
import { daysBetweenDates } from "@/utils/daysBetweenDates";
import { daysUntilDate } from "@/utils/daysUntilDate";
import { parseDate } from "@/utils/parseDate";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface ITravelListItem {
  item: {
    $id: string;
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
}

let rowRefs = new Map();

const TravelListItem = ({ item }: ITravelListItem) => {
  const { name, photo, startDate, endDate, travelId, $id } = item;
  const { getTravels } = useTravelContext();

  const renderDaysCount = () => {
    const days = daysBetweenDates(startDate, endDate);
    return days > 1 ? `${days} days` : `${days} day`;
  };

  const renderDaysUntilStart = () => {
    const days = daysUntilDate(startDate);
    return days > 1 ? `${days} days` : `${days} day`;
  };

  const deleteItem = async () => {
    useDeleteTravel($id);
    getTravels();
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => (
          <SwipeableDeleteItem handleDelete={deleteItem} />
        )}
        ref={(ref) => {
          if (ref && !rowRefs.get(travelId)) {
            rowRefs.set(travelId, ref);
          }
        }}
        onSwipeableWillOpen={() => {
          [...rowRefs.entries()].forEach(([key, ref]) => {
            if (key !== travelId && ref) ref.close();
          });
        }}
      >
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
                <Text className="text-white text-xs">{renderDaysCount()}</Text>
              </View>
              <Text className="text-white text-xs">
                <Text className="font-psemibold">Starts in </Text>
                {renderDaysUntilStart()}
              </Text>
            </View>
          </View>
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default TravelListItem;
