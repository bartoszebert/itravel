import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthFormField from "@/components/ui/AuthFormField";
import CustomButton from "@/components/ui/CustomButton";
import { Link, router } from "expo-router";
import { images } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { createUser } from "@/api/appwrite";

interface ISignUpData {
  username: string;
  email: string;
  password: string;
}

const SignIn = () => {
  const [form, setForm] = useState<ISignUpData>({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setUser, setIsLogged } = useGlobalContext();

  const submit = async () => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
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
      <ImageBackground source={images.bgregister}>
        <View className="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
        <SafeAreaView className="h-full">
          <ScrollView>
            <View className="w-full justify-around min-h-[85vh] px-10 my-6">
              <View className="w-full items-center">
                <Image
                  source={images.logo}
                  className="w-[200px] h-[100px]"
                  resizeMode="contain"
                />
              </View>
              <View className="w-full items-center">
                <Image
                  source={images.travel}
                  className="w-[100px] h-[100px]"
                  resizeMode="contain"
                />
              </View>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
                  Sign up:
                </Text>
                <AuthFormField
                  title="Username"
                  placeholder="Username"
                  value={form.username}
                  handleChangeText={(e: string) =>
                    setForm({ ...form, username: e })
                  }
                  otherStyles="mt-7"
                />
                <AuthFormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e: string) =>
                    setForm({ ...form, email: e })
                  }
                  placeholder="Email"
                  otherStyles="mt-3"
                  keyboardType="email-address"
                />
                <AuthFormField
                  title="Password"
                  placeholder="Password"
                  value={form.password}
                  handleChangeText={(e: string) =>
                    setForm({ ...form, password: e })
                  }
                  otherStyles="mt-3"
                />
                <CustomButton
                  title="Sign up"
                  handlePress={submit}
                  containerStyles="mt-5 bg-secondary"
                  textStyles="text-white"
                  isLoading={isSubmitting}
                />
                <View className="justify-center pt-5 flex-row gap-2">
                  <Text className="text-sm text-gray-100 font-pregular">
                    You already have an account?
                  </Text>
                  <Link
                    href="/sign-in"
                    className="text-sm font-psemibold text-secondary-200"
                  >
                    Log In
                  </Link>
                </View>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
