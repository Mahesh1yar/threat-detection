import React from "react";

export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Security</h2>
      <button onClick={() => setPage("speech")}>Speech Analysis</button>
      <button onClick={() => setPage("threat")}>Threat Analysis</button>
    </div>
  );
}
