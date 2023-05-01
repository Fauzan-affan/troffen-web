export const postUlasan = async (token, reservation_id, rating, ulasan) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/dashboard/create_ulasan`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        ulasan: ulasan,
        rating: rating,
        reservation_id: reservation_id,
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudentUlasan = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/dashboard/ulasan`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
