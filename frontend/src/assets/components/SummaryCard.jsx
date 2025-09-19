import React from "react";

const SummaryCard = ({ title, value }) => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ec1313", borderRadius: "8px" }}>
      <p>{title}</p>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</h3>
    </div>
  );
};

export default SummaryCard;
