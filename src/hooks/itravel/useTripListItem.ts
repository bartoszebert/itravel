import useDeleteTravel from "@/api/travelList/useDeleteTravel";
import { useTravelContext } from "@/context/TravelProvider";
import { ITravelItem } from "@/interfaces/ITravelItem";

const useTripListItem = (item: ITravelItem) => {
  const { getTravels } = useTravelContext();
  const { $id } = item;

  const deleteItem = async () => {
    await useDeleteTravel($id);
    getTravels();
  };

  return { deleteItem };
};

export default useTripListItem;
