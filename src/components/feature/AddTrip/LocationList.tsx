import LocationListItem from "@/components/ui/LocationListItem";
import { ILocation } from "@/interfaces/ILocation";
import { View } from "react-native";

interface Props {
  locations: ILocation[];
  handleSelectLocation: (item: ILocation) => void;
}

const LocationList = ({ locations, handleSelectLocation }: Props) => {
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
