import CustomButton from "@/components/ui/CustomButton";
import DatePickerField from "@/components/ui/DatePickerField";
import FormField from "@/components/ui/FormField";
import useAddTripForm from "@/hooks/itravel/useAddTripForm";
import { router } from "expo-router";
import { Text, View } from "react-native";
import LocationListItem from "../../ui/LocationListItem";
import ShowLoadedPhoto from "./ShowLoadedPhoto";

const AddTripForm = () => {
  const {
    destination,
    setDestination,
    locations,
    form,
    setForm,
    handleSetPhoto,
    handleSetStartDate,
    handleSetEndDate,
    handleSelectLocation,
    submit,
  } = useAddTripForm();

  return (
    <View className="pt-20 px-10 h-full justify-start">
      <Text className="text-white text-2xl font-psemibold mb-5 text-center">
        Add New Trip
      </Text>

      <ShowLoadedPhoto
        trigger={form.destination}
        onPhotoFetched={handleSetPhoto}
      />

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
              onSelect={() => handleSelectLocation(item)}
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