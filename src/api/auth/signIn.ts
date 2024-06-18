import initializeAppwrite from "../initializeAppwrite";

const signIn = async (email: string, password: string) => {
  const { account } = initializeAppwrite();

  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to sign in");
  }
};

export default signIn;
