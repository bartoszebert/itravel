import { IUser } from "@/interfaces/IUser";
import { Query } from "react-native-appwrite";
import useAppwrite from "../useAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

const useGetTravelList = async (): Promise<any[]> => {
  const { account, databases } = useAppwrite();
  const { databaseId, travelCollectionId } = appwriteConfig;

  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw new Error();

    const travelList = await databases.listDocuments<IUser>(
      databaseId,
      travelCollectionId,
      [Query.equal("owner", currentAccount.$id)]
    );

    return travelList.documents;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get travel list");
  }
};

export default useGetTravelList;
