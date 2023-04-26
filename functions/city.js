export const loadCityFunc = async (id) => {
  try {
    const res = await fetch(`https://api.troffen-api.com/api/master/cities/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.cities.length > 0) {
      return data.cities;
      // action
    }
  } catch (error) {
    console.log(error);
  }
};
