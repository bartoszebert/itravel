import useGetPhoto from "@/api/pexels/useGetPhoto";
import useAddTravel from "@/api/travelList/useAddTravel";
import useGetLocations from "@/api/useGetLocations";
import CustomButton from "@/components/ui/CustomButton";
import DatePickerField from "@/components/ui/DatePickerField";
import FormField from "@/components/ui/FormField";
import { useGlobalContext } from "@/context/GlobalProvider";
import useDebounce from "@/hooks/useDebounce";
import { IAddTripForm } from "@/interfaces/IAddTripForm";
import { defaultTrip } from "@/utils/defaultTrip";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Keyboard, Text, View } from "react-native";
import LocationListItem from "../../ui/LocationListItem";

const AddTripForm = () => {
  const { user } = useGlobalContext();

  const [destination, setDestination] = useState<string>("");
  const [locations, setLocations] = useState<any[]>([]);
  const [form, setForm] = useState<IAddTripForm>(defaultTrip);

  const debouncedDestination = useDebounce(destination, 500);

  const { refetch, data } = useGetLocations(debouncedDestination);
  const { getPhoto, photoUrl } = useGetPhoto();

  const handleSetStartDate = (date: Date | undefined) => {
    setForm((prev) => {
      const newStartDate = date || prev.startDate;
      return {
        ...prev,
        startDate: newStartDate,
        endDate: prev.endDate < newStartDate ? newStartDate : prev.endDate,
      };
    });
  };

  const handleSetEndDate = (date: Date | undefined) => {
    setForm((prev) => {
      const newEndDate = date || prev.endDate;
      return {
        ...prev,
        endDate: newEndDate,
        startDate: prev.startDate > newEndDate ? newEndDate : prev.startDate,
      };
    });
  };

  const submit = async () => {
    if (!form.name || !form.destination || !user) return;

    const query = { ...form, owner: user.accountId };
    const result = await useAddTravel(query);

    if (result) {
      router.push("/trips");
    } else {
      console.error("Failed to add the trip.");
    }
  };

  useEffect(() => {
    setLocations([]);
    refetch(debouncedDestination);
  }, [debouncedDestination]);

  useEffect(() => {
    if (!data) return;
    setLocations(data);
  }, [data]);

  useEffect(() => {
    if (!photoUrl) return;
    setForm((prev) => ({
      ...prev,
      photo: photoUrl,
    }));
  }, [photoUrl]);

  return (
    <View className="pt-20 px-10 h-full justify-start">
      <Text className="text-white text-2xl font-psemibold mb-5 text-center">
        Add New Trip
      </Text>

      {form.photo && (
        <View className="flex justify-center items-center">
          <Image
            source={{ uri: form.photo }}
            className="rounded-lg h-[200px] w-full mb-5"
            resizeMode="cover"
          />
        </View>
      )}

      <FormField
        title="destination"
        placeholder="Search destination"
        value={destination}
        handleChangeText={(e: string) => setDestination(e)}
      />

      <View className="flex justify-center items-center">
        {destination &&
          locations.map((item) => (
            <LocationListItem
              key={item.place_id}
              item={item}
              onSelect={() => {
                setForm((prev) => ({
                  ...prev,
                  destination: item.formatted,
                }));
                getPhoto(`${item.country} ${item.city}`);
                setLocations([]);
                Keyboard.dismiss();
              }}
            />
          ))}
      </View>

      {form.destination && (
        <>
          <FormField
            title="name"
            placeholder="Enter trip name"
            otherStyles="mt-2"
            value={form.name}
            handleChangeText={(e: string) =>
              setForm((prev) => ({ ...prev, name: e }))
            }
          />
          <DatePickerField
            label="Start Date"
            date={form.startDate}
            onSetDate={handleSetStartDate}
          />
          <DatePickerField
            label="End Date"
            date={form.endDate}
            onSetDate={handleSetEndDate}
          />
        </>
      )}

      <CustomButton
        title="Add Trip"
        handlePress={submit}
        containerStyles="mt-5 bg-secondary mb-2"
        textStyles="text-white"
      />
      <CustomButton
        title="Cancel"
        handlePress={() => router.back()}
        containerStyles="mb-5"
      />
    </View>
  );
};

export default AddTripForm;
