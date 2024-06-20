import { Text, View } from "react-native";
import CustomDatePicker from "./CustomDatePicker";

interface Props {
  label: string;
  date: Date;
  onSetDate: (date: Date | undefined) => void;
}

const DatePickerField = ({ label, date, onSetDate }: Props) => (
  <View className="flex-row items-center justify-between mt-4">
    <Text
      className="text-primary-100 font-psemibold"
      testID="date-picker-label"
    >
      {label}
    </Text>
    <CustomDatePicker date={date} setDate={onSetDate} />
  </View>
);

export default DatePickerField;
