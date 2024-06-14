import CustomButton from "@/components/ui/CustomButton";
import { useTravelContext } from "@/context/TravelProvider";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { travelList } = useTravelContext();

  return (
    <View>
      <FlatList
        data={travelList}
        renderItem={({ item }) => <TripListItem item={item} />}
        keyExtractor={(item) => item.travelId}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-3" />}
        refreshing={false}
        onRefresh={() => {}}
        className="mt-5 min-h-[60vh]"
      />
      <CustomButton
        title="Add new trip"
        handlePress={() => router.push("addTrip")}
        containerStyles="mt-5"
      />
    </View>
  );
};

export default TripList;