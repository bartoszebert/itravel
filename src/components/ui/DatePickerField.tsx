import { Text, View } from "react-native";
import CustomDatePicker from "./CustomDatePicker";

interface IProps {
  label: string;
  date: Date;
  onSetDate: (date: Date | undefined) => void;
}

const DatePickerField = ({ label, date, onSetDate }: IProps) => (
  <View className="flex-row items-center justify-between mt-4">
    <Text className="text-white font-psemibold">{label}</Text>
    <CustomDatePicker date={date} setDate={onSetDate} />
  </View>
);

export default DatePickerField;
