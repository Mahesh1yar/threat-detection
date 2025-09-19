import React from "react";

const FileUpload = ({ onFileSelected }) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <div
        style={{
          border: "2px dashed #aaa",
          borderRadius: "8px",
          padding: "3rem",
        }}
      >
        <div style={{ fontSize: "3rem", color: "#999" }}>☁️</div>
        <p style={{ marginTop: "1rem" }}>
          <label style={{ color: "#0f66bd", fontWeight: "bold", cursor: "pointer" }}>
            Upload a file
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  onFileSelected && onFileSelected(e.target.files[0]);
                }
              }}
            />
          </label>
          <span style={{ marginLeft: "0.5rem", color: "#666" }}>or drag and drop</span>
        </p>
        <p style={{ fontSize: "0.8rem", color: "#888" }}>MP3, WAV up to 10MB</p>
      </div>
    </div>
  );
};

export default FileUpload;
