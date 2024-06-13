import { Account, Avatars, Client, Databases } from "react-native-appwrite";
import { appwriteConfig } from "./utils/appwriteConfig";

const useAppwrite = () => {
  const { endpoint, platform, projectId } = appwriteConfig;

  const client = new Client();
  client.setEndpoint(endpoint).setProject(projectId).setPlatform(platform);

  const account = new Account(client);
  const avatars = new Avatars(client);
  const databases = new Databases(client);

  return { account, avatars, databases };
};

export default useAppwrite;
