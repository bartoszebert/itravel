import EditProfileForm from "@/components/feature/EditProfileForm";
import CustomButton from "@/components/ui/CustomButton";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="pt-20 px-10">
            <Text className="text-white text-2xl font-psemibold mb-5">
              Edit your profile:
            </Text>
            <EditProfileForm />
            <CustomButton
              title="Cancel"
              handlePress={() => router.back()}
              containerStyles="mt-3 w-full bg-white"
              textStyles="text-primary"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
