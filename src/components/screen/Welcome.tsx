import CustomButton from "@/components/ui/CustomButton";
import { images } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { LinearGradient } from "expo-linear-gradient";
import { Redirect, router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { isLoading, isLogged } = useGlobalContext();

  if (!isLoading && isLogged) return <Redirect href="/home" />;

  return (
    <View className="bg-secondary">
      <LinearGradient
        className="absolute top-0 left-0 w-full h-full"
        colors={["transparent", "rgba(255,255,255,0.3)"]}
      />
      <SafeAreaView className=" h-full">
        <ScrollView>
          <View className="w-full justify-around items-center px-8 min-h-[85vh]">
            <Image
              source={images.logo}
              className="w-[200px] h-[100px]"
              resizeMode="contain"
            />
            <Image
              source={images.travel}
              className="w-[100px] h-[100px]"
              resizeMode="contain"
            />
            <View>
              <Text className="font-pbold text-3xl color-white">
                Let's explore the world together!
              </Text>
              <Text className="font-pregular text-sm color-white mt-3">
                Plan your perfect trip together. Coordinate with friends, vote
                on destinations, and create shared itineraries effortlessly.
              </Text>
              <CustomButton
                title="Get Started"
                handlePress={() => router.push("/sign-in")}
                containerStyles="mt-8"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
