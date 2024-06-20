import TripProvider from "@/context/TripProvider";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <TripProvider>
      <Stack>
        <Stack.Screen name="trips" options={{ headerShown: false }} />
        <Stack.Screen name="addTrip" options={{ headerShown: false }} />
        <Stack.Screen name="editTrip" options={{ headerShown: false }} />
        <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
      </Stack>
    </TripProvider>
  );
};

export default ProfileLayout;
