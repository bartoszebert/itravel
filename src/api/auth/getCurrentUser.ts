import { IUser } from "@/interfaces/IUser";
import { Query } from "react-native-appwrite";
import initializeAppwrite from "../initializeAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

const getCurrentUser = async (): Promise<IUser | null> => {
  const { account, databases } = initializeAppwrite();
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
    console.log(error);
    throw new Error("Failed to get user");
  }
};

export default getCurrentUser;
