import SignInForm from "@/components/feature/SignInForm";
import { images } from "@/constants";
import { Image, ImageBackground, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <View className="bg-primary">
      <ImageBackground source={images.bglogin}>
        <View className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />
        <SafeAreaView className="h-full">
          <ScrollView>
            <View className="w-full justify-around min-h-[85vh] px-10 my-6">
              <View className="w-full items-center">
                <Image
                  source={images.logo}
                  className="w-[200px] h-[100px]"
                  resizeMode="contain"
                />
              </View>
              <View className="w-full items-center">
                <Image
                  source={images.travel}
                  className="w-[100px] h-[100px]"
                  resizeMode="contain"
                />
              </View>
              <SignInForm />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
