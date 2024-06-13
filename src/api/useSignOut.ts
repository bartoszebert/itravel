import useAppwrite from "./useAppwrite";

const useSignOut = async () => {
  const { account } = useAppwrite();

  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error("Failed to sign out");
  }
};

export default useSignOut;
