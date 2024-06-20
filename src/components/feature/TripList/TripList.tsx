import CustomButton from "@/components/ui/CustomButton";
import useTripList from "@/hooks/itravel/useTripList";
import { router } from "expo-router";
import { FlatList, View } from "react-native";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { travelList, getTravels, isLoading } = useTripList();

  return (
    <View>
      <FlatList
        data={travelList}
        renderItem={({ item }) => <TripListItem item={item} />}
        keyExtractor={(item) => item.travelId}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-3" />}
        refreshing={isLoading}
        onRefresh={getTravels}
        className="mt-2 h-[65vh]"
      />
      <CustomButton
        title="Add new trip"
        handlePress={() => router.push("addTrip")}
        containerStyles="mt-4 bg-secondary"
        textStyles="text-white"
      />
    </View>
  );
};

export default TripList;
