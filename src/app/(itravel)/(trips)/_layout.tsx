import TravelProvider from "@/context/TravelProvider";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <TravelProvider>
      <Stack>
        <Stack.Screen name="trips" options={{ headerShown: false }} />
        <Stack.Screen name="addTrip" options={{ headerShown: false }} />
        <Stack.Screen name="editTrip" options={{ headerShown: false }} />
        <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
      </Stack>
    </TravelProvider>
  );
};

export default ProfileLayout;
