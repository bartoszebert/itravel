export interface ITripItem {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  travelId: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  destination: string;
  photo: string;
  budget: number;
  owner: string;
}
