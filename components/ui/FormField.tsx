import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

interface Props {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: any;
  keyboardType?: any;
}

const FormField = ({
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
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-none w-full h-12 px-4 bg-white opacity-60 rounded-full focus:opacity-100 items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {/* <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
