import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const AddTravel = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="bg-primary h-full">
        <View className="pt-20 px-10">
          <Text className="text-white text-2xl font-psemibold mb-5 text-center">
            Add New Travel
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddTravel;
