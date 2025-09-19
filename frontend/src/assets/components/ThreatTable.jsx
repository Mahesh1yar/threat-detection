import React from "react";

const ThreatTable = ({ details = [] }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ec1313",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead style={{ background: "#ffe5e5" }}>
          <tr>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>Timestamp</th>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>Content</th>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>Threat Level</th>
            <th style={{ padding: "0.75rem", textAlign: "left" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {details.length === 0 && (
            <tr>
              <td colSpan={4} style={{ padding: "1rem", textAlign: "center" }}>
                No details available.
              </td>
            </tr>
          )}

          {details.map((d, idx) => {
            let actionText = "No action required";
            let actionColor = "#555";

            if (d.threat_level === "Threat") {
              actionText = "Notify to Soldier & Commander";
              actionColor = "#ec1313";
            } else if (d.threat_level === "Sensitive Info") {
              actionText = "Notify to Soldier";
              actionColor = "#e6a700";
            }

            return (
              <tr key={idx} style={{ borderTop: "1px solid #ddd" }}>
                <td style={{ padding: "0.75rem" }}>
                  {d.timestamp
                    ? new Date(d.timestamp).toLocaleString()
                    : "-"}
                </td>
                <td style={{ padding: "0.75rem" }}>{d.content}</td>
                <td
                  style={{
                    padding: "0.75rem",
                    color:
                      d.threat_level === "Threat"
                        ? "#ec1313"
                        : d.threat_level === "Sensitive Info"
                        ? "#e6a700"
                        : "#2aa12a",
                    fontWeight: "bold",
                  }}
                >
                  {d.threat_level}
                </td>
                <td style={{ padding: "0.75rem", fontWeight: "bold", color: actionColor }}>
                  {actionText}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatTable;
