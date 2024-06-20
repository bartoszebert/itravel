import { KeyboardType, TextInput, View } from "react-native";

interface Props {
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: KeyboardType;
  disabled?: boolean;
}

const FormField = ({
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
        className={`border-none w-full h-12 px-4 bg-white rounded-full items-center flex-row ${
          disabled ? "opacity-30" : "opacity-80"
        }`}
      >
        <TextInput
          className="flex-1 text-primary font-pregular text-base opacity-50 focus:opacity-100"
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
