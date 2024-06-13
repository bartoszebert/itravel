import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ITravelState {
  travelList: any[];
  isLoading: boolean;
}

const defaultTravelState: ITravelState = {
  travelList: [],
  isLoading: true,
};

const TravelContext = createContext<ITravelState>(defaultTravelState);
export const useTravelContext = () => useContext(TravelContext);

interface Props {
  children: ReactNode;
}

const tempTravelList = [
  {
    id: "1",
    startDate: "2024-12-12",
    endDate: "2024-12-20",
    name: "Trip to Paris",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    destination: "Paris",
    photo:
      "https://img.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_188544-24134.jpg?t=st=1718287169~exp=1718290769~hmac=c4ddcdcd6d23a6dc9cd3f4b623d6fe57cfd55036c54819b2dba88d577cd3d5d0&w=500",
    budget: 1000,
    owner: "1",
    // Journal (notes)
    // TravelMates
  },
  {
    id: "2",
    startDate: "2024-12-12",
    endDate: "2024-12-20",
    name: "Trip to London",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    destination: "London",
    photo:
      "https://img.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_188544-24134.jpg?t=st=1718287169~exp=1718290769~hmac=c4ddcdcd6d23a6dc9cd3f4b623d6fe57cfd55036c54819b2dba88d577cd3d5d0&w=500",
    budget: 1000,
    owner: "1",
    // Journal (notes)
    // TravelMates
  },
  {
    id: "3",
    startDate: "2024-12-12",
    endDate: "2024-12-20",
    name: "Trip to Paris",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    destination: "Paris",
    photo:
      "https://img.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_188544-24134.jpg?t=st=1718287169~exp=1718290769~hmac=c4ddcdcd6d23a6dc9cd3f4b623d6fe57cfd55036c54819b2dba88d577cd3d5d0&w=500",
    budget: 1000,
    owner: "1",
    // Journal (notes)
    // TravelMates
  },
  {
    id: "4",
    startDate: "2024-12-12",
    endDate: "2024-12-20",
    name: "Trip to London",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    destination: "London",
    photo:
      "https://img.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_188544-24134.jpg?t=st=1718287169~exp=1718290769~hmac=c4ddcdcd6d23a6dc9cd3f4b623d6fe57cfd55036c54819b2dba88d577cd3d5d0&w=500",
    budget: 1000,
    owner: "1",
    // Journal (notes)
    // TravelMates
  },
  {
    id: "5",
    startDate: "2024-12-12",
    endDate: "2024-12-20",
    name: "Trip to Paris",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    destination: "Paris",
    photo:
      "https://img.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_188544-24134.jpg?t=st=1718287169~exp=1718290769~hmac=c4ddcdcd6d23a6dc9cd3f4b623d6fe57cfd55036c54819b2dba88d577cd3d5d0&w=500",
    budget: 1000,
    owner: "1",
    // Journal (notes)
    // TravelMates
  },
  {
    id: "6",
    startDate: "2024-12-12",
    endDate: "2024-12-20",
    name: "Trip to London",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    destination: "London",
    photo:
      "https://img.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_188544-24134.jpg?t=st=1718287169~exp=1718290769~hmac=c4ddcdcd6d23a6dc9cd3f4b623d6fe57cfd55036c54819b2dba88d577cd3d5d0&w=500",
    budget: 1000,
    owner: "1",
    // Journal (notes)
    // TravelMates
  },
  {
    id: "7",
    startDate: "2024-12-12",
    endDate: "2024-12-20",
    name: "Trip to Paris",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    destination: "Paris",
    photo:
      "https://img.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_188544-24134.jpg?t=st=1718287169~exp=1718290769~hmac=c4ddcdcd6d23a6dc9cd3f4b623d6fe57cfd55036c54819b2dba88d577cd3d5d0&w=500",
    budget: 1000,
    owner: "1",
    // Journal (notes)
    // TravelMates
  },
  {
    id: "8",
    startDate: "2024-12-12",
    endDate: "2024-12-20",
    name: "Trip to London",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    destination: "London",
    photo:
      "https://img.freepik.com/free-photo/sunset-illuminates-famous-city-skyline-romantic-view-generated-by-ai_188544-24134.jpg?t=st=1718287169~exp=1718290769~hmac=c4ddcdcd6d23a6dc9cd3f4b623d6fe57cfd55036c54819b2dba88d577cd3d5d0&w=500",
    budget: 1000,
    owner: "1",
    // Journal (notes)
    // TravelMates
  },
];

const TravelProvider = ({ children }: Props) => {
  const [travelList, setTravelList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const updateTravels = async () => {
      setIsLoading(true);
      try {
        // const res = await useGetCurrentUser();
        setTravelList(tempTravelList);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    updateTravels();
  }, []);

  return (
    <TravelContext.Provider value={{ travelList, isLoading }}>
      {children}
    </TravelContext.Provider>
  );
};

export default TravelProvider;
