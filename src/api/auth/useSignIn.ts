import useAppwrite from "../useAppwrite";

const useSignIn = async (email: string, password: string) => {
  const { account } = useAppwrite();

  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to sign in");
  }
};

export default useSignIn;
