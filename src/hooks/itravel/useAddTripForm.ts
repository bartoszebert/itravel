import useGetLocations from "@/api/getLocations";
import addTravel from "@/api/travelList/addTravel";
import { useGlobalContext } from "@/context/GlobalProvider";
import { IAddTripForm } from "@/interfaces/IAddTripForm";
import { ILocation } from "@/interfaces/ILocation";
import { defaultTrip } from "@/utils/defaultTrip";
import { router } from "expo-router";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Keyboard } from "react-native";
import useDebounce from "../useDebounce";

interface Props {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
  locations: ILocation[];
  form: IAddTripForm;
  setForm: Dispatch<SetStateAction<IAddTripForm>>;
  handleSetPhoto: (photoUrl: string) => void;
  handleSetStartDate: (date: Date | undefined) => void;
  handleSetEndDate: (date: Date | undefined) => void;
  handleSelectLocation: (item: ILocation) => void;
  submit: () => void;
}

const useAddTripForm = (): Props => {
  const { user } = useGlobalContext();

  const [destination, setDestination] = useState<string>("");
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [form, setForm] = useState<IAddTripForm>(defaultTrip);

  const debouncedDestination = useDebounce(destination, 500);

  const { refetch, data } = useGetLocations(debouncedDestination);

  const handleSelectLocation = (item: ILocation) => {
    setForm((prev) => ({
      ...prev,
      destination: item.formatted,
    }));
    setLocations([]);
    Keyboard.dismiss();
  };

  const handleSetPhoto = useCallback((photoUrl: string) => {
    setForm((prev) => ({
      ...prev,
      photo: photoUrl,
    }));
  }, []);

  const handleSetStartDate = (date: Date | undefined) => {
    setForm((prev) => {
      const newStartDate = date || prev.startDate;
      return {
        ...prev,
        startDate: newStartDate,
        endDate: prev.endDate < newStartDate ? newStartDate : prev.endDate,
      };
    });
  };

  const handleSetEndDate = (date: Date | undefined) => {
    setForm((prev) => {
      const newEndDate = date || prev.endDate;
      return {
        ...prev,
        endDate: newEndDate,
        startDate: prev.startDate > newEndDate ? newEndDate : prev.startDate,
      };
    });
  };

  const submit = async () => {
    if (!form.name || !form.destination || !user) return;

    const query = { ...form, owner: user.accountId };
    const result = await addTravel(query);

    if (result) {
      router.push("/trips");
    } else {
      console.error("Failed to add the trip.");
    }
  };

  useEffect(() => {
    setLocations([]);
    refetch(debouncedDestination);
  }, [debouncedDestination, refetch]);

  useEffect(() => {
    if (!data) return;
    setLocations(data);
  }, [data]);

  return {
    destination,
    setDestination,
    locations,
    form,
    setForm,
    handleSetPhoto,
    handleSetStartDate,
    handleSetEndDate,
    handleSelectLocation,
    submit,
  };
};

export default useAddTripForm;
