import { ITravelItem } from "@/interfaces/ITravelItem";
import { Query } from "react-native-appwrite";
import initializeAppwrite from "../initializeAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

const getTravelList = async (): Promise<ITravelItem[]> => {
  const { account, databases } = initializeAppwrite();
  const { databaseId, travelCollectionId } = appwriteConfig;

  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw new Error();

    const travelList = await databases.listDocuments<ITravelItem>(
      databaseId,
      travelCollectionId,
      [Query.equal("owner", currentAccount.$id), Query.orderAsc("startDate")]
    );

    return travelList.documents;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get travel list");
  }
};

export default getTravelList;
