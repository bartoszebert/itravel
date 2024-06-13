import CustomButton from "@/components/ui/CustomButton";
import { useTravelContext } from "@/context/TravelProvider";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import TravelListItem from "./TravelListItem";

const TravelList = () => {
  const { travelList } = useTravelContext();

  return (
    <View>
      <FlatList
        data={travelList}
        renderItem={({ item }) => <TravelListItem item={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      <CustomButton
        title="Add new travel"
        handlePress={() => router.push("addTravel")}
        containerStyles="mt-5"
      />
    </View>
  );
};

export default TravelList;
