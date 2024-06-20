import TripStart from "@/components/ui/TripStart";
import { useTripContext } from "@/context/TripProvider";
import { ITripItem } from "@/interfaces/ITripItem";
import { parseDate } from "@/utils/parseDate";
import { renderDaysCount } from "@/utils/renderDaysCount";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const TripItemDetails = () => {
  const { id } = useLocalSearchParams();
  const { travelList } = useTripContext();
  const [travelData, setTravelData] = useState<ITripItem | undefined>();

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
        <Text className="text-primary-100 text-2xl font-psemibold">
          {travelData.name}
        </Text>
        <Text className="text-primary-100 text-lg font-plight">
          {travelData.destination}
        </Text>
        <View className="mt-2">
          <Text className="text-primary-100 font-psemibold my-2">
            Trip dates:{" "}
          </Text>
          <Text className="text-primary-100">
            {parseDate(travelData.startDate)} - {parseDate(travelData.endDate)}
          </Text>
          <Text className="text-primary-100">
            ({renderDaysCount(travelData.startDate, travelData.endDate)})
          </Text>
          <TripStart startDate={travelData.startDate} />
        </View>
      </View>
    </ScrollView>
  );
};

export default TripItemDetails;
