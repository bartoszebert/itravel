import { IUser } from "@/interfaces/IUser";
import { Query } from "react-native-appwrite";
import useAppwrite from "../useAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

const useGetCurrentUser = async (): Promise<IUser | null> => {
  const { account, databases } = useAppwrite();
  const { databaseId, userCollectionId } = appwriteConfig;

  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw new Error();

    const currentUser = await databases.listDocuments<IUser>(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw new Error();

    return currentUser.documents[0];
  } catch (error) {
    throw new Error("Failed to get user");
  }
};

export default useGetCurrentUser;
