export const getStudentWishlist = async (token) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/student/dashboard/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      // body: JSON.stringify({
      //   limit: 10,
      //   page: 1,
      // }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTutorWishlist = async (token) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/tutor/dashboard/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      // body: JSON.stringify({
      //   limit: 10,
      //   page: 1,
      // }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addOrDeleteWishlistStudent = async (token, courseId) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/course/wishlist/${courseId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addOrDeleteWishlistTutor = async (token, courseId) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/course/wishlist/${courseId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
