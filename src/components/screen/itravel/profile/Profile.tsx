import useSignOut from "@/api/auth/useSignOut";
import CustomButton from "@/components/ui/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserDetails from "../../../feature/UserDetails";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

  const logout = async () => {
    await useSignOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="pt-20 px-10 justify-between min-h-[75vh]">
          <Text className="text-2xl font-pbold text-white text-center">
            Your profile
          </Text>
          <UserDetails user={user} />
          <View>
            <CustomButton
              title="Edit Profile"
              handlePress={() => router.push("/editProfile")}
              containerStyles="mt-5"
            />
            <CustomButton
              title="Logout"
              handlePress={logout}
              containerStyles="mt-5"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
