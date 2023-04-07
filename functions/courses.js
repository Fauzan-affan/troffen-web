export const loadCourses = async (title, area, page) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/public/course/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials: "include",
      body: JSON.stringify({
        course_title: title,
        course_area: area,
        limit: 6,
        page: page,
        orderby: "desc",
      }),
    });
    const data = await res.json();
    if (data.meta.code === 200) {
      // action
      return data;
    }
  } catch (error) {
    console.log(error);
    if (error.meta.code === 422) {
      console.log(error);
    }
  }
};
