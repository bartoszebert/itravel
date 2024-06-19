import { parseDate } from "@/utils/parseDate";
import DatePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Keyboard, Modal, Pressable, Text, View } from "react-native";
import CustomButton from "./CustomButton";

interface Props {
  date: Date;
  setDate: (date: Date | undefined) => void;
}

const CustomDatePicker = ({ date, setDate }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Pressable
        className="bg-primary-800 px-4 py-1 rounded-lg"
        onPress={() => {
          setShow(true);
          Keyboard.dismiss();
        }}
        testID="custom-date-picker-pressable"
      >
        <Text className="text-white text-lg ">
          {parseDate(date.toString())}
        </Text>
      </Pressable>
      <Modal
        visible={show}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShow(false)}
        testID="custom-date-picker-modal"
      >
        <View className="bg-[#000000dd] w-full h-full p-5">
          <View className="bg-primary-900 mt-10 px-5 pb-5 rounded-2xl">
            <DatePicker
              style={{ minHeight: 350 }}
              mode="date"
              display="inline"
              value={date}
              onChange={(e, selectedDate) => setDate(selectedDate)}
              testID="custom-date-picker"
            />
            <CustomButton
              title="OK"
              handlePress={() => setShow(false)}
              containerStyles="bg-secondary"
              textStyles="text-white"
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CustomDatePicker;
