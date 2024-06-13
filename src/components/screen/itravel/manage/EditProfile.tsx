import { useGlobalContext } from "@/context/GlobalProvider";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EditProfileForm from "../../../feature/EditProfileForm";

const EditProfile = () => {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="pt-20 px-10">
          <Text className="text-white text-2xl font-psemibold mb-5">
            Edit your profile:
          </Text>
          <EditProfileForm user={user} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
