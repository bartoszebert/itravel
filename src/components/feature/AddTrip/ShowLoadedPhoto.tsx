import useGetPhoto from "@/api/pexels/useGetPhoto";
import { useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

interface IProps {
  trigger: string;
  onPhotoFetched: (photoUrl: string) => void;
}

const ShowLoadedPhoto = ({ trigger, onPhotoFetched }: IProps) => {
  const { getPhoto, photoUrl, isLoading, error } = useGetPhoto();

  useEffect(() => {
    if (!trigger) return;
    getPhoto(trigger);
  }, [trigger]);

  useEffect(() => {
    if (!photoUrl) return;
    onPhotoFetched(photoUrl);
  }, [photoUrl]);

  if (isLoading) {
    return <ActivityIndicator className="p-10" size="large" color="#fff" />;
  }

  if (error) {
    return <Text>Error loading photo</Text>;
  }

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
