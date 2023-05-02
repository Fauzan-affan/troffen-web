export const reqCourseList = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/courselist`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        orderby: "asc",
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
