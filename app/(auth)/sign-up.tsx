import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormField";
import CustomButton from "@/components/ui/CustomButton";
import { Link } from "expo-router";
import { images } from "@/constants";

interface ISignInData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [form, setForm] = useState<ISignInData>({ email: "", password: "" });

  return (
    <View className="bg-primary">
      <ImageBackground source={images.background}>
        <View className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />
        <SafeAreaView className="h-full">
          <ScrollView>
            <View className="w-full justify-center min-h-[85vh] px-4 my-6">
              <View className="w-full items-center">
                <Image
                  source={images.logo}
                  className="w-[200px] h-[100px]"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                Sign up:
              </Text>
              <FormField
                title="Email"
                value={form.email}
                handleChangeText={(e: string) => setForm({ ...form, email: e })}
                otherStyles="mt-7"
                keyboardType="email-address"
              />
              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e: string) =>
                  setForm({ ...form, password: e })
                }
                otherStyles="mt-7"
              />
              <CustomButton
                title="Sign up"
                handlePress={() => console.log(form)}
                containerStyles="mt-7"
              />
              <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">
                  You already have an account?{" "}
                </Text>
                <Link
                  href="/sign-in"
                  className="text-lg font-psemibold text-secondary-200"
                >
                  Log In
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignIn;