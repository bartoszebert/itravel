export const appwriteConfig = {
  endpoint: String(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT),
  platform: String(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM),
  projectId: String(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID),
  databaseId: String(process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID),
  userCollectionId: String(process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID),
  storageId: String(process.env.EXPO_PUBLIC_APPWRITE_STORAGE_ID),
};
