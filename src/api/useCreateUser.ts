import { IUser } from "@/interfaces/IUser";
import { ID } from "react-native-appwrite";
import useAppwrite from "./useAppwrite";
import signIn from "./useSignIn";
import { appwriteConfig } from "./utils/appwriteConfig";

const useCreateUser = async (
  email: string,
  password: string,
  username: string
): Promise<IUser | null> => {
  const { account, avatars, databases } = useAppwrite();
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
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

export default useCreateUser;
