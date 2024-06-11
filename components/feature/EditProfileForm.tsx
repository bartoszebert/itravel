import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { IUser } from "@/interfaces/IUser";
import FormField from "../ui/FormField";
import { IUserForm } from "@/interfaces/IUserForm";
import { editProfileFormFields } from "@/utils/editProfileFormFields";
import CustomButton from "../ui/CustomButton";
import { router } from "expo-router";

interface IProps {
  user: IUser | null;
}

const EditProfileForm = ({ user }: IProps) => {
  const [form, setForm] = useState<IUserForm>({
    username: user?.username || "",
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
  });

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
        handlePress={() => console.log(form)}
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
