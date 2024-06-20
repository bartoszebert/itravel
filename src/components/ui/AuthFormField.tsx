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
}

const AuthFormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isPasswordField = title === "Password";

  return (
    <View className={`${otherStyles}`}>
      <View className="border-none w-full h-12 px-4 bg-white opacity-70 rounded-full items-center flex-row">
        <Image
          source={isPasswordField ? icons.password : icons.profile}
          className="w-4 h-4 mr-3"
          resizeMode="contain"
          testID="password-icon"
        />
        <TextInput
          className={`flex-1 text-black-100 font-pregular opacity-50 focus:opacity-100 ${
            !isPasswordField && "text-base"
          }`}
          placeholder={placeholder}
          placeholderTextColor="#292929"
          keyboardType={keyboardType}
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={isPasswordField && !showPassword}
          autoCapitalize="none"
        />
        {isPasswordField && value && (
          <TouchableOpacity
            className="py-10"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
              testID="eye-icon"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthFormField;
