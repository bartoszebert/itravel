import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TravelMates = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="pt-20">
        <Text className="text-2xl font-pbold text-white text-center">
          TravelMates
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TravelMates;