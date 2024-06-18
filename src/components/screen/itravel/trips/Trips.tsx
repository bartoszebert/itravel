import TripList from "@/components/feature/TripList/TripList";
import { SafeAreaView, Text, View } from "react-native";

const Trips = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="pt-10 pb-[26vh] px-8">
        <Text className="text-2xl font-pbold text-white">Travels</Text>
        <TripList />
      </View>
    </SafeAreaView>
  );
};

export default Trips;
