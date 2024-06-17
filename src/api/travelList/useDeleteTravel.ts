import useAppwrite from "../useAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

const useDeleteTravel = async (travelId: string) => {
  const { databases } = useAppwrite();
  const { databaseId, travelCollectionId } = appwriteConfig;

  try {
    const deleteTravel = await databases.deleteDocument(
      databaseId,
      travelCollectionId,
      travelId
    );
    return deleteTravel;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add a travel");
  }
};

export default useDeleteTravel;
