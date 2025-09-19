import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import AnalyzeButton from "../components/AnalyzeButton";

const SpeechAnalysis = ({ onAnalyzeComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textInput, setTextInput] = useState("");
  const [listening, setListening] = useState(false);

  // Setup speech recognition
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
  }

  const startListening = () => {
    if (!recognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Recognized speech:", transcript);
      setTextInput((prev) => prev + " " + transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  const handleAnalyze = async () => {
    try {
      // Progress simulation
      let prog = 0;
      const interval = setInterval(() => {
        prog += 20;
        setProgress(prog);
        if (prog >= 100) clearInterval(interval);
      }, 300);

      // Call backend API
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textInput }),
      });
      const data = await response.json();
      console.log("Raw model result: ", data);

      const transformed = {
        details: [
          {
            timestamp: new Date().toISOString(),
            content: data.result.sequence,
            threat_level: data.result.labels[0],
          },
        ],
      };

      // Pass result to parent
      onAnalyzeComplete(transformed);

      // Clear input if needed
      setTextInput("");
    } catch (err) {
      console.error("Error analyzing text:", err);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter or dictate your text..."
          style={{ flex: 1, minHeight: "100px", marginRight: "10px" }}
        />
        <button
          onClick={startListening}
          style={{
            background: listening ? "red" : "#0f66bd",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          title="Click to speak"
        >
          🎤
        </button>
      </div>

      <AnalyzeButton onClick={handleAnalyze} />
      <ProgressBar progress={progress} />
    </div>
  );
};

export default SpeechAnalysis;
