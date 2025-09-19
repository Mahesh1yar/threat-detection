import React from "react";

const AnalyzeButton = ({ onClick }) => {
  return (
    <div style={{ marginTop: "2rem", textAlign: "right" }}>
      <button
        onClick={onClick}
        style={{
          background: "#0f66bd",
          color: "white",
          padding: "0.75rem 2rem",
          borderRadius: "8px",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Analyze
      </button>
    </div>
  );
};

export default AnalyzeButton;
