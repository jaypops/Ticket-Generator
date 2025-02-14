import { useState } from "react";

export default function useUpload(setValue) {
  const [avatar, setAvatar] = useState("");
  const [upload, setUpload] = useState(false);

  const uploadCloudinary = async (file) => {
    setUpload(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "jaypops"); 
    formData.append("cloud_name", "djq3ojgnw")

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/djq3ojgnw/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data.secure_url) {
        setAvatar(data.secure_url);
        localStorage.setItem("Photo", data.secure_url);
        setValue("Photo", data.secure_url); 
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUpload(false);
    }
  };

  return { avatar, upload, uploadCloudinary, setAvatar };
}
