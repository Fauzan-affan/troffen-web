import Cookies from "js-cookie";

export const Logout = async () => {
  Cookies.remove("token");
  Cookies.remove("userId");
  Cookies.remove("adminToken");
  Cookies.remove("firstName");
  Cookies.remove("email");
  Cookies.remove("role");
  Cookies.remove("adminRole");
  Cookies.remove("provider");
  Cookies.remove("roleLoginProvider");
  Cookies.remove("isProvider");
  // signOut();
};
