export const adminLogin = async () => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials: "include",
      body: JSON.stringify({
        email: "admin@troffen.com",
        password: "password",
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const adminLogout = async (token) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const paymentList = async (token) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/admin/langganan/list", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        limit: 10000,
        page: 1,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addPayment = async (token, title, userId) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/admin/langganan/add", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      // credentials: "include",
      body: JSON.stringify({
        title: title,
        user_id: userId,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
