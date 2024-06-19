import { KeyboardType, TextInput, View } from "react-native";

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
          editable={!disabled}
        />
      </View>
    </View>
  );
};

export default FormField;
