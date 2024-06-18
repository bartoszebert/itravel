import getCurrentUser from "@/api/auth/getCurrentUser";
import signIn from "@/api/auth/signIn";
import { useGlobalContext } from "@/context/GlobalProvider";
import { ISignInData } from "@/interfaces/ISignInData";
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

const SignInForm = () => {
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
      <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
        Log in:
      </Text>
      <AuthFormField
        title="Email"
        placeholder="Email"
        value={form.email}
        handleChangeText={(e: string) => setForm({ ...form, email: e })}
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
    </KeyboardAvoidingView>
  );
};

export default SignInForm;
