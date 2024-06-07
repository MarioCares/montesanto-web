import { IMonteUser } from "~/interface/user.interface";

export function getStorage(key: string) {
  return window.localStorage.getItem(key);
}

export function getStorageUser(): IMonteUser | null {
  const user = window.localStorage.getItem("monteUser");
  if (user) {
    return {
      userName: "",
      email: "",
      id: "",
    };
  }

  return null;
}
