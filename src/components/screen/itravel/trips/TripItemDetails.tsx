import { useTravelContext } from "@/context/TravelProvider";
import { ITravelItem } from "@/interfaces/ITravelItem";
import { parseDate } from "@/utils/parseDate";
import { renderDaysCount } from "@/utils/renderDaysCount";
import { renderDaysUntilStart } from "@/utils/renderDaysUntilStart";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const TripItemDetails = () => {
  const { id } = useLocalSearchParams();
  const { travelList } = useTravelContext();
  const [travelData, setTravelData] = useState<ITravelItem | undefined>();

  useEffect(() => {
    const currentTravel = travelList.find((travel) => travel.$id === id);
    setTravelData(currentTravel);
  }, [id, travelList]);

  if (!travelData) return null;

  return (
    <ScrollView className="bg-primary flex-1">
      <View className="flex items-center">
        <Image
          source={{ uri: travelData.photo }}
          className="w-full h-[300px]"
          resizeMode="cover"
        />
      </View>

      <View className="p-8">
        <Text className="text-white text-2xl font-psemibold">
          {travelData.name}
        </Text>
        <Text className="text-white text-lg font-plight">
          {travelData.destination}
        </Text>
        <View className="mt-2">
          <Text className="text-white font-psemibold my-2">Trip dates: </Text>
          <Text className="text-white">
            {parseDate(travelData.startDate)} - {parseDate(travelData.endDate)}
          </Text>
          <Text className="text-white">
            ({renderDaysCount(travelData.startDate, travelData.endDate)})
          </Text>
          <Text className="text-white mt-4">
            Starts in {renderDaysUntilStart(travelData.startDate)}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TripItemDetails;
