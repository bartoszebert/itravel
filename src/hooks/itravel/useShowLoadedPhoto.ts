import useGetPhoto from "@/api/pexels/useGetPhoto";
import { useEffect } from "react";

const useShowLoadedPhoto = (
  trigger: string,
  onPhotoFetched: (photoUrl: string) => void
) => {
  const { getPhoto, photoUrl, isLoading, error } = useGetPhoto();

  useEffect(() => {
    if (!trigger) return;
    getPhoto(trigger);
  }, [trigger]);

  useEffect(() => {
    if (!photoUrl) return;
    onPhotoFetched(photoUrl);
  }, [photoUrl]);

  return { photoUrl, isLoading, error };
};

export default useShowLoadedPhoto;