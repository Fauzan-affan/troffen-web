export const submitAjukanKursus = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/dashboard/permintaan`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      // body: JSON.stringify({
      //     "limit":10,
      //     "page":1
      // } ),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
