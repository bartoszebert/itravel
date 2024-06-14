import { IUser } from "@/interfaces/IUser";
import { ID } from "react-native-appwrite";
import useAppwrite from "../useAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

const useAddTravel = async (data: any): Promise<IUser | null> => {
  const { databases } = useAppwrite();
  const { databaseId, travelCollectionId } = appwriteConfig;

  try {
    const newTravel = await databases.createDocument<IUser>(
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

export default useAddTravel;
