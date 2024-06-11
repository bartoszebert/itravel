import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/context/GlobalProvider";
import { signOut } from "@/api/appwrite";
import { router } from "expo-router";
import CustomButton from "@/components/ui/CustomButton";

const Profile = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="pt-20 px-10 justify-between min-h-[60vh]">
        <Text className="text-2xl font-pbold text-white text-center">
          Profile
        </Text>
        <CustomButton
          title="Logout"
          handlePress={logout}
          containerStyles="mt-5"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
