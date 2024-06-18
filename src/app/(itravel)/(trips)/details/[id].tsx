import { useTravelContext } from "@/context/TravelProvider";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const TripItemPage = () => {
  const { id } = useLocalSearchParams();
  const { travelList } = useTravelContext();
  const [travelData, setTravelData] = useState(null);

  useEffect(() => {
    console.log(travelList);
    const currentTravel = travelList.find((travel) => travel.$id === id);
    setTravelData(currentTravel);
  }, []);

  useEffect(() => {
    console.log(travelData);
  }, [travelData]);

  return (
    <View className="bg-primary flex-1 justify-center items-center">
      <Text className="text-white">{id}</Text>
    </View>
  );
};

export default TripItemPage;
