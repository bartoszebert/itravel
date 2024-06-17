import { PhotosWithTotalResults } from "pexels";
import { useState } from "react";
import usePexels from "../usePexels";

const useGetPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState<string>("");

  const getPhoto = async (query: string) => {
    const pexelsClient = usePexels();

    pexelsClient.photos
      .search({ query: query, per_page: 1 })
      .then((res) => {
        const photosWithResults = res as PhotosWithTotalResults;
        setPhotoUrl(photosWithResults.photos[0].src.medium);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return { getPhoto, photoUrl };
};

export default useGetPhoto;
