import { ITravelItem } from "@/interfaces/ITravelItem";
import { ID } from "react-native-appwrite";
import initializeAppwrite from "../initializeAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

interface Props {
  owner: string;
  destination: string;
  name: string;
  photo: string;
  startDate: Date;
  endDate: Date;
}

const addTravel = async (data: Props): Promise<ITravelItem | null> => {
  const { databases } = initializeAppwrite();
  const { databaseId, travelCollectionId } = appwriteConfig;

  try {
    const newTravel = await databases.createDocument<ITravelItem>(
      databaseId,
      travelCollectionId,
      ID.unique(),
      {
        travelId: ID.unique(),
        ...data,
      }
    );

    return newTravel;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add a travel");
  }
};

export default addTravel;
