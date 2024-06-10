import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Travels = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="pt-20">
        <Text className="text-2xl font-pbold text-white text-center">
          Travels
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Travels;