import Cookies from "js-cookie";

export const Logout = () => {
  Cookies.remove("token");
  Cookies.remove("firstName");
  Cookies.remove("email");
  Cookies.remove("role");
  Cookies.remove("provider");
  Cookies.remove("roleLoginProvider");
  Cookies.remove("isProvider");
  // signOut();
};
