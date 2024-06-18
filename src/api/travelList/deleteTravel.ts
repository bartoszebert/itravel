import initializeAppwrite from "../initializeAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

const deleteTravel = async (travelId: string) => {
  const { databases } = initializeAppwrite();
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

export default deleteTravel;
