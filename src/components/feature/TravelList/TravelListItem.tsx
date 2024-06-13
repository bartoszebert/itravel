import React from "react";
import { Image, Text, View } from "react-native";

interface ITravelListItem {
  item: {
    id: string;
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
  const { id, name, photo, startDate, endDate } = item;

  return (
    <View key={id} className="bg-primary mt-5">
      <Image
        source={{ uri: photo }}
        className="w-full h-[120px] rounded-lg mb-3"
        resizeMode="cover"
      />
      <Text className="text-white">{name}</Text>
      <Text className="text-white">{startDate}</Text>
      <Text className="text-white">{endDate}</Text>
    </View>
  );
};

export default TravelListItem;
