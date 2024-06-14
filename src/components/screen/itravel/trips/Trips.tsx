import TripList from "@/components/feature/TripList/TripList";
import TravelProvider from "@/context/TravelProvider";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const Trips = () => {
  return (
    <TravelProvider>
      <SafeAreaView className="bg-primary h-full">
        <View className="pt-10 pb-[26vh] px-8">
          <Text className="text-2xl font-pbold text-white">Travels</Text>
          <TripList />
        </View>
      </SafeAreaView>
    </TravelProvider>
  );
};

export default Trips;
