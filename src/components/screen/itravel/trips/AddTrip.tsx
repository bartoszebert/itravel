import useAddTravel from "@/api/travelList/useAddTravel";
import useGetLocations from "@/api/useGetLocations";
import usePexels from "@/api/usePexels";
import CustomButton from "@/components/ui/CustomButton";
import FormField from "@/components/ui/FormField";
import { useGlobalContext } from "@/context/GlobalProvider";
import useDebounce from "@/hooks/useDebounce";
import DatePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { PhotosWithTotalResults } from "pexels";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

const AddTrip = () => {
  const { user } = useGlobalContext();

  const [destination, setDestination] = useState<string>("");
  const [locations, setLocations] = useState<any[]>([]);
  const [form, setForm] = useState({
    destination: "",
    name: "",
    photo: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const debouncedDestination = useDebounce(destination, 500);
  const { refetch, data } = useGetLocations(debouncedDestination);

  const getPhoto = async (query: string) => {
    const pexelsClient = usePexels();

    pexelsClient.photos
      .search({ query: query, per_page: 1 })
      .then((res) => {
        const photosWithResults = res as PhotosWithTotalResults;
        console.log(photosWithResults.photos[0].src.medium);
        setForm((prev) => ({
          ...prev,
          photo: photosWithResults.photos[0].src.medium,
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const submit = async () => {
    if (!form.name || !form.destination || !user) return;
    const query = {
      ...form,
      owner: user.accountId,
    };

    const result = await useAddTravel(query);
    if (!result) {
      console.log("Error");
    } else {
      router.push("/trips");
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

  return (
    <SafeAreaView className="flex-1 bg-primary h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="z-30"
      >
        <ScrollView keyboardShouldPersistTaps="handled">
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
                locations.length !== 0 &&
                locations.map((item) => (
                  <Pressable
                    key={item.place_id}
                    onPress={() => {
                      setForm((prev) => ({
                        ...prev,
                        destination: item.formatted,
                      }));
                      getPhoto(item.country);
                      setLocations([]);
                      Keyboard.dismiss();
                    }}
                    className="rounded-xl w-full bg-primary-800 mt-1 z-50"
                  >
                    <View className="items-start py-3 px-5">
                      <Text className="text-white font-psemibold">
                        {item.address_line1}
                      </Text>
                      <Text className="text-white">{item.address_line2}</Text>
                    </View>
                  </Pressable>
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
                <View className="flex-row items-center  justify-between mt-4">
                  <Text className="text-white font-psemibold">Start Date:</Text>
                  <DatePicker
                    mode="date"
                    value={form.startDate}
                    onChange={(e, selectedDate) => {
                      if (selectedDate && form.endDate < selectedDate) {
                        setForm((prev) => ({
                          ...prev,
                          endDate: selectedDate,
                          startDate: selectedDate,
                        }));
                      } else {
                        setForm((prev) => ({
                          ...prev,
                          startDate: selectedDate || prev.startDate,
                        }));
                      }
                    }}
                  />
                </View>
                <View className="flex-row items-center justify-between mt-4">
                  <Text className="text-white font-psemibold">End Date:</Text>
                  <DatePicker
                    mode="date"
                    value={form.endDate}
                    onChange={(e, selectedDate) => {
                      if (selectedDate && form.startDate > selectedDate) {
                        setForm((prev) => ({
                          ...prev,
                          startDate: selectedDate,
                          endDate: selectedDate,
                        }));
                      } else {
                        setForm((prev) => ({
                          ...prev,
                          endDate: selectedDate || prev.endDate,
                        }));
                      }
                    }}
                  />
                </View>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddTrip;
