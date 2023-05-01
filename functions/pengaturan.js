export const changePassStudent = async (token, oldpassword, newpassword) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/dashboard/update_password`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        oldpassword: oldpassword,
        newpassword: newpassword,
      }),
    });

    // if (!res.ok) throw new Error("Request failed.");
    if (res.status === 404) console.log(res);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changePassTutor = async (token, oldpassword, newpassword) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/dashboard/update_password`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        oldpassword: oldpassword,
        newpassword: newpassword,
      }),
    });

    // if (!res.ok) throw new Error("Request failed.");
    if (res.status === 404) console.log(res);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
