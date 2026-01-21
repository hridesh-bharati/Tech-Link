export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "techlink_preset"); 

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dn1etnx2l/image/upload",
    { method: "POST", body: formData }
  );

  if (!res.ok) throw new Error("Image upload failed");
  const data = await res.json();
  return data.secure_url;
};
