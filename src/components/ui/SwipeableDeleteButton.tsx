import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  handleDelete: () => void;
}

const SwipeableDeleteButton = ({ handleDelete }: Props) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={handleDelete}
    className="bg-red-800 justify-center p-5 ml-1 rounded-lg"
    testID="delete-button"
  >
    <View>
      <Text className="text-white font-pmedium">Delete</Text>
    </View>
  </TouchableOpacity>
);

export default SwipeableDeleteButton;
