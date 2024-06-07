import { useEffect, useState } from "react";
import { IMonteUser } from "~/interface/user.interface";
import { getStorageUser } from "~/utils/localStorage";

export default function useMonteUser() {
  const [user, setUser] = useState<IMonteUser | null>(null);

  useEffect(() => {
    setUser(getStorageUser());
  }, []);

  return user;
}
