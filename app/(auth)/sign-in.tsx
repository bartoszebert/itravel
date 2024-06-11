import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/ui/FormField";
import CustomButton from "@/components/ui/CustomButton";
import { Link, router } from "expo-router";
import { images } from "@/constants";
import { getCurrentUser, signIn } from "@/api/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

interface ISignInData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [form, setForm] = useState<ISignInData>({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setIsLogged } = useGlobalContext();

  const submit = async () => {
    if (!form.email || !form.password)
      Alert.alert("Error", "Please fill in all fields");
    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="bg-primary">
      <ImageBackground source={images.bglogin}>
        <View className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />
        <SafeAreaView className="h-full">
          <ScrollView>
            <View className="w-full justify-around min-h-[85vh] px-10 my-6">
              <View className="w-full items-center">
                <Image
                  source={images.logo}
                  className="w-[200px] h-[100px]"
                  resizeMode="contain"
                />
                <Image
                  source={images.travel}
                  className="w-[100px] h-[100px] mt-10"
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                  Log in:
                </Text>
                <FormField
                  title="Email"
                  placeholder="Email"
                  value={form.email}
                  handleChangeText={(e: string) =>
                    setForm({ ...form, email: e })
                  }
                  otherStyles="mt-3"
                  keyboardType="email-address"
                />
                <FormField
                  title="Password"
                  placeholder="Password"
                  value={form.password}
                  handleChangeText={(e: string) =>
                    setForm({ ...form, password: e })
                  }
                  otherStyles="mt-3"
                />
                <CustomButton
                  title="Log in"
                  handlePress={submit}
                  containerStyles="mt-5 bg-secondary"
                  textStyles="text-white"
                  isLoading={isSubmitting}
                />
                <View className="justify-center pt-5 flex-row gap-2">
                  <Text className="text-sm text-gray-100 font-pregular">
                    Don't have an account?
                  </Text>
                  <Link
                    href="/sign-up"
                    className="text-sm font-psemibold text-secondary-200"
                  >
                    Sign Up
                  </Link>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
