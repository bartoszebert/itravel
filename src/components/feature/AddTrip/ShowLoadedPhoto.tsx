import useShowLoadedPhoto from "@/hooks/itravel/useShowLoadedPhoto";
import { ActivityIndicator, Image, Text, View } from "react-native";

interface IProps {
  trigger: string;
  onPhotoFetched: (photoUrl: string) => void;
}

const ShowLoadedPhoto = ({ trigger, onPhotoFetched }: IProps) => {
  const { photoUrl, isLoading, error } = useShowLoadedPhoto(
    trigger,
    onPhotoFetched
  );

  if (isLoading)
    return <ActivityIndicator className="p-10" size="large" color="#fff" />;

  if (error) return <Text>Error loading photo</Text>;

  if (!photoUrl) return null;

  return (
    <View className="flex justify-center items-center">
      <Image
        source={{ uri: photoUrl }}
        className="rounded-lg h-[200px] w-full mb-5"
        resizeMode="cover"
      />
    </View>
  );
};

export default ShowLoadedPhoto;
