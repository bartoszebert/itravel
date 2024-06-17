import useDeleteTravel from "@/api/travelList/useDeleteTravel";
import useGetTravelList from "@/api/travelList/useGetTravelList";
import CustomButton from "@/components/ui/CustomButton";
import { useTravelContext } from "@/context/TravelProvider";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import TripListItem from "./TripListItem";

const TripList = () => {
  const { travelList, setTravelList } = useTravelContext();

  const refetchTravels = async () => {
    try {
      const res = await useGetTravelList();
      setTravelList(res);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id: string) => {
    useDeleteTravel(id);
    refetchTravels();
  };

  useEffect(() => {
    refetchTravels();
  }, []);

  return (
    <View>
      <FlatList
        data={travelList}
        renderItem={({ item }) => (
          <TripListItem item={item} handleDelete={() => deleteItem(item.$id)} />
        )}
        keyExtractor={(item) => item.travelId}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-3" />}
        refreshing={false}
        onRefresh={refetchTravels}
        className="mt-5 min-h-[60vh]"
      />
      <CustomButton
        title="Add new trip"
        handlePress={() => router.push("addTrip")}
        containerStyles="mt-5"
      />
    </View>
  );
};

export default TripList;
