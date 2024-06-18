import useGetCurrentUser from "@/api/auth/useGetCurrentUser";
import { IUser } from "@/interfaces/IUser";
import { useCallback, useEffect, useState } from "react";

const useGlobalState = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateUserStatus = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await useGetCurrentUser();
      if (res) {
        setIsLogged(true);
        setUser(res);
      } else {
        setIsLogged(false);
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    updateUserStatus();
  }, [updateUserStatus]);

  return { isLogged, setIsLogged, user, setUser, isLoading };
};
export default useGlobalState;
