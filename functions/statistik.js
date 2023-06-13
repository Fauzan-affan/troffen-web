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

export const getMonthlyStatistik = async (token, year, status) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/dashboard/statistik/groupbymonth`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        year: year,
        status: status, // Diterima , Ditolak, Selesai, All
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
