export const getProfile = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/user/profile`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (token, obj) => {
  // console.log(obj);
  try {
    const res = await fetch(`https://api.troffen-api.com/api/user/profile`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(obj),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateEducation = async (token, obj) => {
  // console.log(obj);
  try {
    const res = await fetch(`https://api.troffen-api.com/api/user/education`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(obj),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
