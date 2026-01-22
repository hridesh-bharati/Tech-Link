export const uploadToCloudinary = async (file) => {
  if (!file) return null;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "techlink_preset"); 
  formData.append("cloud_name", "dn1etnx2l");       

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dn1etnx2l/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Image upload failed");
  }

  const data = await response.json();

  return data.secure_url;
};
