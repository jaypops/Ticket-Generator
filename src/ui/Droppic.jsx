import { useForm } from "react-hook-form";
import "./Droppic.css";
import useUpload from "../hooks/upload";

export default function Droppic() {
  const { setValue } = useForm();
  const { avatar, upload, uploadCloudinary } = useUpload(setValue);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadCloudinary(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      uploadCloudinary(file);
    }
  };

  return (
    <div className="upload-section">
      <div
        className="upload-area"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {avatar ? (
          <img src={avatar} alt="Preview" className="preview-image" />
        ) : (
          <>
            <input
              type="file"
              id="profile-photo"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
            <label htmlFor="profile-photo" className="upload-label">
              <div className="upload-icon"></div>
              {upload ? (
                <p>Uploading...</p>
              ) : (
                <p>Drag & drop or click to upload</p>
              )}
            </label>
          </>
        )}
      </div>
    </div>
  );
}
