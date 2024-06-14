import { createClient } from "pexels";

const usePexels = () => {
  const client = createClient(String(process.env.EXPO_PUBLIC_PEXELS_API_KEY));

  return client;
};

export default usePexels;
