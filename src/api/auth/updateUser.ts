import { IUser } from "@/interfaces/IUser";
import initializeAppwrite from "../initializeAppwrite";
import { appwriteConfig } from "../utils/appwriteConfig";

interface IUpdateUserProps {
  id: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
}

const updateUser = async ({
  id,
  firstname,
  lastname,
}: IUpdateUserProps): Promise<IUser | null> => {
  const { databases } = initializeAppwrite();
  const { databaseId, userCollectionId } = appwriteConfig;

  try {
    const updatedUser = await databases.updateDocument<IUser>(
      databaseId,
      userCollectionId,
      id,
      {
        firstname,
        lastname,
      }
    );

    return updatedUser;
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
};

export default updateUser;
