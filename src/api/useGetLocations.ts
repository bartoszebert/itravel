import { useEffect, useState } from "react";

const API_KEY = "6085d9196a8c4c18a3e0e5ede7818633";

const useGetLocations = (search: string) => {
  const [data, setData] = useState<any[]>([]);

  const getLocations = async (search: string) => {
    if (!search) return;
    try {
      const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&format=json&apiKey=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data.results);
      console.log(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLocations(search);
  }, []);

  return { refetch: getLocations, data };
};

export default useGetLocations;
