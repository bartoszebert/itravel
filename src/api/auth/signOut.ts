import initializeAppwrite from "../initializeAppwrite";

const signOut = async () => {
  const { account } = initializeAppwrite();

  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to sign out");
  }
};

export default signOut;
