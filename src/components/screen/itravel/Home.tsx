import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="pt-20 px-10">
        <Text className="text-2xl font-pbold text-white text-center">Home</Text>
        <Text className="text-white text-center mt-5">
          Welcome to the Home page. It's the place, where you will find some
          sumup of your travels, and summary of your TravelMates shared trips.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
