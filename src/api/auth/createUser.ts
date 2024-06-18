import { IUser } from "@/interfaces/IUser";
import { ID } from "react-native-appwrite";
import initializeAppwrite from "../initializeAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";
import signIn from "./signIn";

const createUser = async (
  email: string,
  password: string,
  username: string
): Promise<IUser | null> => {
  const { account, avatars, databases } = initializeAppwrite();
  const { databaseId, userCollectionId } = appwriteConfig;

  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error("Failed to create user");

    const avatarUrl = avatars.getInitials(username);
    const newUser = await databases.createDocument<IUser>(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        username,
        email,
        avatar: avatarUrl,
        accountId: newAccount.$id,
      }
    );

    await signIn(email, password);

    return newUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default createUser;
