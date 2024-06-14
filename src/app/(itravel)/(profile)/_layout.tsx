import { Stack } from "expo-router";
import React from "react";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="editProfile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProfileLayout;
