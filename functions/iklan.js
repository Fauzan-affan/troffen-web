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

export const onOffIklan = async (token, course_id, status) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/dashboard/course/setactive`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        course_id: course_id,
        is_active: status, // on/off
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
