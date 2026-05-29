import { useState } from "react";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = () => {
    if (!question.trim()) return;

    setAnswer(
      "This is a demo AI response for: " + question
    );
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>AI Assistant</h2>

      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "70%",
          padding: "10px"
        }}
      />

      <button
        onClick={askQuestion}
        style={{
          marginLeft: "10px",
          padding: "10px 20px"
        }}
      >
        Ask
      </button>

      {answer && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f5f5f5"
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}