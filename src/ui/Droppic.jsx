/* eslint-disable react/prop-types */
import "./Droppic.css";
import { FiDownloadCloud } from "react-icons/fi";
import useUpload from "../hooks/upload";

export default function Droppic({ setValue }) {
  const { avatar, upload, uploadCloudinary } = useUpload(setValue);

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) uploadCloudinary(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
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
              className="file-input"
              onChange={handleFileChange}
            />
            <label htmlFor="profile-photo" className="upload-label">
              <div className="upload-icon">
                <FiDownloadCloud />
              </div>
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
