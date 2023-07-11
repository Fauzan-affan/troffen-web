export const uploadImage = async (formData) => {
  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/db4qplcj9/image/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formData,
      }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
