import createUser from "@/api/auth/createUser";
import { useGlobalContext } from "@/context/GlobalProvider";
import { ISignUpData } from "@/interfaces/ISignUpData";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import AuthFormField from "../ui/AuthFormField";
import CustomButton from "../ui/CustomButton";

const SignUpForm = () => {
  const [form, setForm] = useState<ISignUpData>({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
      console.log(error);
      Alert.alert("Error", "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text className="text-2xl text-white mt-10 font-psemibold">Sign up:</Text>
      <AuthFormField
        title="Username"
        placeholder="Username"
        value={form.username}
        handleChangeText={(e: string) => setForm({ ...form, username: e })}
        otherStyles="mt-7"
      />
      <AuthFormField
        title="Email"
        value={form.email}
        handleChangeText={(e: string) => setForm({ ...form, email: e })}
        placeholder="Email"
        otherStyles="mt-3"
        keyboardType="email-address"
      />
      <AuthFormField
        title="Password"
        placeholder="Password"
        value={form.password}
        handleChangeText={(e: string) => setForm({ ...form, password: e })}
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
  );
};

export default SignUpForm;
