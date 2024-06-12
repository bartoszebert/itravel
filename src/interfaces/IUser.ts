export interface IUser {
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $id: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  avatar: string;
}