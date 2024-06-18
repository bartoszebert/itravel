import { useEffect } from "react";
import useGetPhoto from "../useGetPhoto";

const useShowLoadedPhoto = (
  trigger: string,
  onPhotoFetched: (photoUrl: string) => void
) => {
  const { getPhoto, photoUrl, isLoading, error } = useGetPhoto();

  useEffect(() => {
    if (!trigger) return;
    getPhoto(trigger);
  }, [trigger, getPhoto]);

  useEffect(() => {
    if (!photoUrl) return;
    onPhotoFetched(photoUrl);
  }, [photoUrl, onPhotoFetched]);

  return { photoUrl, isLoading, error };
};

export default useShowLoadedPhoto;
