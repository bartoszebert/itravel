import { PhotosWithTotalResults } from "pexels";
import { useCallback, useState } from "react";
import initializePexels from "../initializePexels";

const useGetPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getPhoto = useCallback(async (query: string) => {
    setIsLoading(true);
    const pexelsClient = initializePexels();

    pexelsClient.photos
      .search({ query: query, per_page: 1 })
      .then((res) => {
        const photosWithResults = res as PhotosWithTotalResults;
        setPhotoUrl(photosWithResults.photos[0].src.medium);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError("Failed to fetch the photo.");
      });
  }, []);

  return { getPhoto, photoUrl, isLoading, error };
};

export default useGetPhoto;
