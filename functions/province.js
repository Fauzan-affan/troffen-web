export const loadProvinceFunc = async () => {
  try {
    const res = await fetch("https://api.troffen-api.com/api/master/provinces", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.length > 0) {
      return data;
      // action
    }
  } catch (error) {
    console.log(error);
    if (error.meta.code === 422) {
      console.log(error);
    }
  }
};
