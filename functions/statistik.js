export const getStatistik = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/dashboard/statistik`, {
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
