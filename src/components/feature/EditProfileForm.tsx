import { updateUser } from "@/api/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import { IUserForm } from "@/interfaces/IUserForm";
import { editProfileFormFields } from "@/utils/editProfileFormFields";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, View } from "react-native";
import CustomButton from "../ui/CustomButton";
import FormField from "../ui/FormField";

const EditProfileForm = () => {
  const { user, setUser } = useGlobalContext();

  const [form, setForm] = useState<IUserForm>({
    username: user?.username || "",
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
  });

  const submit = async () => {
    if (!user?.$id) return;

    const data = { id: user.$id, ...form };
    const newUserData = await updateUser(data);
    if (!newUserData) {
      Alert.alert("Error", "Something went wrong.");
    } else {
      setUser(newUserData);
      router.push("/profile");
    }
  };

  if (!user) return null;

  return (
    <View className="items-center">
      <Image
        className="w-24 h-24 rounded-full mx-auto mb-5"
        source={{ uri: user.avatar }}
        resizeMode="contain"
      />

      {editProfileFormFields.map(({ title, placeholder, isDisabled }) => (
        <FormField
          key={title}
          title={title}
          placeholder={placeholder}
          value={form[title]}
          handleChangeText={(e) =>
            setForm((prev) => ({ ...prev, [title]: e.trim() }))
          }
          disabled={isDisabled}
          otherStyles="mt-3 w-full"
        />
      ))}

      <CustomButton
        title="Update"
        handlePress={submit}
        containerStyles="mt-5 w-full bg-secondary"
        textStyles="text-white"
      />

      <CustomButton
        title="Cancel"
        handlePress={() => router.push("/profile")}
        containerStyles="mt-3 w-full bg-white"
        textStyles="text-primary"
      />
    </View>
  );
};

export default EditProfileForm;
