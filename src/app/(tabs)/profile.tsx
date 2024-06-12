import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/context/GlobalProvider";
import { signOut } from "@/api/appwrite";
import { router } from "expo-router";
import CustomButton from "@/components/ui/CustomButton";
import UserDetails from "@/components/feature/UserDetails";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="pt-20 px-10 justify-between min-h-[75vh]">
          <Text className="text-2xl font-pbold text-white text-center">
            Your profile
          </Text>
          <UserDetails user={user} />
          <View>
            <CustomButton
              title="Edit Profile"
              handlePress={() => router.push("/editProfile")}
              containerStyles="mt-5"
            />
            <CustomButton
              title="Logout"
              handlePress={logout}
              containerStyles="mt-5"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
