import TravelList from "@/components/feature/TravelList/TravelList";
import TravelProvider from "@/context/TravelProvider";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const Travels = () => {
  return (
    <TravelProvider>
      <SafeAreaView className="bg-primary h-full">
        <View className="pt-10 pb-[26vh] px-8">
          <Text className="text-2xl font-pbold text-white">Travels</Text>
          <TravelList />
        </View>
      </SafeAreaView>
    </TravelProvider>
  );
};

export default Travels;
