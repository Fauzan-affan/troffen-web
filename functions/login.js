import Cookies from "js-cookie";

export const loginProvider = async (access_token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/${Cookies.get("roleLoginProvider") === 1 || Cookies.get("roleLoginProvider") === undefined ? "student" : "tutor"}/provider/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials: "include",
      body: JSON.stringify({
        provider: Cookies.get("provider"),
        access_provider_token: access_token,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
