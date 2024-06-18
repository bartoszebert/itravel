import { icons } from "@/constants";
import { useState } from "react";
import {
  Image,
  KeyboardType,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardType;
  disabled?: boolean;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  disabled,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`${otherStyles}`}>
      <View
        className={`border-none w-full h-12 px-4 bg-white opacity-60 rounded-full focus:opacity-100 items-center flex-row ${
          disabled ? "opacity-30" : ""
        }`}
      >
        <TextInput
          className="flex-1 text-primary font-pregular text-base"
          placeholder={placeholder}
          placeholderTextColor="#292929"
          keyboardType={keyboardType}
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          editable={!disabled}
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

export default FormField;
