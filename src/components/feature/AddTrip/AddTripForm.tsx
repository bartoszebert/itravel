import CustomButton from "@/components/ui/CustomButton";
import FormField from "@/components/ui/FormField";
import useAddTripForm from "@/hooks/itravel/useAddTripForm";
import { router } from "expo-router";
import { Text, View } from "react-native";
import LocationList from "./LocationList";
import ShowLoadedPhoto from "./ShowLoadedPhoto";
import TripDetailsForm from "./TripDetailsForm";

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
      <Text className="text-primary-100 text-2xl font-psemibold mb-5 text-center">
        Add New Trip
      </Text>

      <ShowLoadedPhoto
        trigger={form.destination}
        onPhotoFetched={handleSetPhoto}
      />

      <FormField
        placeholder="Search destination"
        value={destination}
        handleChangeText={(e: string) => setDestination(e)}
      />

      {destination && (
        <LocationList
          locations={locations}
          handleSelectLocation={handleSelectLocation}
        />
      )}

      {form.destination && (
        <TripDetailsForm
          form={form}
          setForm={setForm}
          handleSetStartDate={handleSetStartDate}
          handleSetEndDate={handleSetEndDate}
        />
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
        containerStyles="mb-5 bg-primary-700"
        textStyles="text-primary-100"
      />
    </View>
  );
};

export default AddTripForm;
