import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>Analysis Progress</h3>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          {progress === 0 ? "Waiting for input" : `${progress}%`}
        </p>
      </div>
      <div style={{ background: "#ddd", borderRadius: "10px", height: "10px", marginTop: "0.5rem" }}>
        <div
          style={{
            width: `${progress}%`,
            background: "#0f66bd",
            height: "10px",
            borderRadius: "10px",
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
