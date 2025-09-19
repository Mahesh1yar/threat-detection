import React, { useState } from "react";
import SpeechAnalysis from "./assets/pages/SpeechAnalysis";
import ThreatTable from "./assets/components/ThreatTable";

function App() {
  const [allResults, setAllResults] = useState([]); // store multiple results

  return (
    <div style={{ flex: 1, padding: "2rem" }}>
      <SpeechAnalysis
        onAnalyzeComplete={(result) => {
          console.log("Adding new result:", result);
          setAllResults((prev) => [...prev, ...result.details]); // append new details
        }}
      />

      {/* Single table showing all analysis */}
      <div style={{ marginTop: "2rem" }}>
        {allResults.length === 0 ? (
          <p>No analysis available yet.</p>
        ) : (
          <>
            <h2>Analysis Results</h2>
            <ThreatTable details={allResults} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
