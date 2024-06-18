import { createClient } from "pexels";

const initializePexels = () => {
  const client = createClient(String(process.env.EXPO_PUBLIC_PEXELS_API_KEY));

  return client;
};

export default initializePexels;
