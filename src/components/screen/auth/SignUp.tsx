import SignUpForm from "@/components/feature/SignUpForm";
import { images } from "@/constants";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

const SignUp = () => {
  return (
    <View className="bg-primary">
      <ImageBackground source={images.bgregister}>
        <View className="absolute top-0 left-0 w-full h-full bg-black opacity-20" />
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
              <SignUpForm />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignUp;
