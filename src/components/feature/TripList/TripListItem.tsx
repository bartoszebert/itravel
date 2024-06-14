import { daysBetweenDates } from "@/utils/daysBetweenDates";
import { daysUntilDate } from "@/utils/daysUntilDate";
import { parseDate } from "@/utils/parseDate";
import React from "react";
import { Image, Text, View } from "react-native";

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
}

const TravelListItem = ({ item }: ITravelListItem) => {
  const { name, photo, startDate, endDate } = item;

  const renderDaysCount = () => {
    const days = daysBetweenDates(startDate, endDate);
    return days > 1 ? `${days} days` : `${days} day`;
  };

  const renderDaysUntilStart = () => {
    const days = daysUntilDate(startDate);
    return days > 1 ? `${days} days` : `${days} day`;
  };

  return (
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
  );
};

export default TravelListItem;
