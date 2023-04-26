import Cookies from "js-cookie";

export const submitPersonalInfo = async (namaDepan, namaBelakang, namaLengkap, tempatLahir, birthDate, alamatLengkap, fotoProfil, gender, noHP, email, password, userStatus, selectedKotaId) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/tutor/register", {
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

export const submitCourse = async (token, courseCategory, courseTitle, courseHashtag, courseDescription, coursePrice, courseArea, isOnline) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/tutor/course", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      // credentials: "include",
      body: JSON.stringify({
        course_category: courseCategory,
        course_title: courseTitle,
        course_hashtag: courseHashtag,
        course_description: courseDescription,
        course_detail: courseDescription,
        course_price: coursePrice,
        course_area: courseArea,
        is_online: isOnline === 1 ? true : false,
      }),
    });

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const submitCertificate = async (token, certificationTitle, certificationOrganization, certificationCredentialId, certificationCredentialUrl, certificationDescription, certificationStartDate, certificationEndDate) => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/user/certification", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      // credentials: "include",
      body: JSON.stringify({
        certification_title: certificationTitle,
        certification_organization: certificationOrganization,
        certification_credential_id: certificationCredentialId,
        certification_credential_url: certificationCredentialUrl,
        certification_description: certificationDescription,
        certification_start_date: certificationStartDate,
        certification_end_date: certificationEndDate,
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
