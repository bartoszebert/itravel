import { View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface Props {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: any;
  keyboardType?: any;
}

const AuthFormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`${otherStyles}`}>
      <View className="border-none w-full h-12 px-4 bg-white opacity-60 rounded-full focus:opacity-100 items-center flex-row">
        <Image
          source={title === "Password" ? icons.password : icons.profile}
          className="w-4 h-4 mr-3"
          resizeMode="contain"
        />
        <TextInput
          className="flex-1 text-primary font-pregular text-base"
          placeholder={placeholder}
          placeholderTextColor="#292929"
          keyboardType={keyboardType}
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && value && (
          <TouchableOpacity
            className="py-10"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthFormField;