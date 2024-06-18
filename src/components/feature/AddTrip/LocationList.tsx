import LocationListItem from "@/components/ui/LocationListItem";
import React from "react";
import { View } from "react-native";

interface IProps {
  locations: any[];
  handleSelectLocation: (item: any) => void;
}

const LocationList = ({ locations, handleSelectLocation }: IProps) => {
  return (
    <View className="flex justify-center items-center">
      {locations.map((item) => (
        <LocationListItem
          key={item.place_id}
          item={item}
          onSelect={() => handleSelectLocation(item)}
        />
      ))}
    </View>
  );
};

export default LocationList;
