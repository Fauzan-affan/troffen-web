import Cookies from "js-cookie";

export const submitPersonalInfo = async (namaDepan, namaBelakang, namaLengkap, tempatLahir, birthDate, alamatLengkap, fotoProfil, gender, noHP, email, password, userStatus, selectedKotaId) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/student/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials: "include",
      body: JSON.stringify({
        first_name: namaDepan,
        last_name: namaBelakang,
        full_name: namaLengkap,
        birth_place: tempatLahir,
        birth_date: birthDate,
        full_address: alamatLengkap,
        photo: fotoProfil,
        gender: gender,
        phone: noHP,
        email: email,
        password: password,
        password_confirmation: password,
        user_status: userStatus,
        id_area: selectedKotaId,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const submitEducation = async (token, eduSchool, eduDegree, startDate, endDate) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/user/education", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      // credentials: "include",
      body: JSON.stringify({
        education_year: endDate,
        education_school: eduSchool,
        education_degree: eduDegree,
        education_start_date: startDate,
        education_end_date: endDate,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const submitWork = async (token, userId, companyName, workTitle, startWork, endWork, workDesc) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/user/work", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      // credentials: "include",
      body: JSON.stringify({
        work_title: workTitle,
        work_employment_type: workTitle,
        work_company_name: companyName,
        work_location: "Jakarta",
        work_industry: "IT",
        work_description: workDesc,
        work_start_date: startWork,
        work_end_date: endWork,
        user_id: userId,
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetail = async (token) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/user/profile", {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerProvider = async (access_token) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/student/provider/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials: "include",
      body: JSON.stringify({
        provider: Cookies.get("provider"),
        access_provider_token: access_token,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const reqCoursesList = async (token) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/student/course/search", {
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

export const reqCourseDetail = async (id) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/course/search/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${Cookies.get("token")}` },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const courseReview = async (id) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/public/course/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${Cookies.get("token")}` },
      body: JSON.stringify({
        course_id: id,
        // "limit":10,
        // "page":1,
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

export const addOrRemoveStudentWishlist = async (token, id) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/course/wishlist/${id}`, {
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

export const submitAjukanKursus = async (token, courseId, reason, reservation_payment_va = "CIMB") => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/student/course/reservation`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        course_id: courseId,
        reason: reason,
        reservation_payment_va: reservation_payment_va,
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
