import AddTripForm from "@/components/feature/AddTrip/AddTripForm";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";

const AddTrip = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="z-30"
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <AddTripForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddTrip;
