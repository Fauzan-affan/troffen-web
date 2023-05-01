export const getDashboardStudent = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/dashboard/permintaan`, {
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

export const getDashboardTutor = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/dashboard/permintaan`, {
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

export const responCourseReq = async (token, reservId, action) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/dashboard/respon`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        reservation_id: reservId,
        action: action, // option : terima/tolak/selesai
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPesan = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/dashboard/pesan`, {
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

export const getPesanStudent = async (token) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/dashboard/pesan`, {
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

export const getPesanDetailStudent = async (token, reservId) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/dashboard/pesan/detail`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        reservation_id: reservId,
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPesanDetailTutor = async (token, reservId) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/tutor/dashboard/pesan/detail`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        reservation_id: reservId,
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
