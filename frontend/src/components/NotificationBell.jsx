import { useState } from "react";

export default function NotificationBell() {

  const [show, setShow] = useState(false);

  const notifications = [
    "Document uploaded successfully",
    "Bulk upload completed"
  ];

  return (
    <div style={{ position: "relative" }}>

      <button
        onClick={() => setShow(!show)}
        style={{
          fontSize: "24px",
          border: "none",
          background: "none",
          cursor: "pointer"
        }}
      >
        🔔
      </button>

      {show && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "35px",
            width: "280px",
            background: "white",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }}
        >
          {notifications.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}