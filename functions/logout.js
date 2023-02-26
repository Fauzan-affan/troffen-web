import { signOut } from "next-auth/react";
import Cookies from "js-cookie";

export const Logout = () => {
  Cookies.remove("token");
  Cookies.remove("firstName");
  Cookies.remove("email");
  Cookies.remove("role");
  signOut();
};
