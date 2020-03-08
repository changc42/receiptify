import React from "react";
import "../css/AboutUs.css";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <h1 style={{ fontSize: "50px" }}>About us</h1>
      <div style={{ fontSize: "30px" }}>
        <p>
          <strong>Caleb Chang:</strong>Queens College. Web developer
        </p>
        <p>
          <strong>Lucy Lin:</strong>Fordham University. Database
        </p>
        <p>
          <strong>Lin Ye:</strong>NYU. Machine Learning and image
          recognition(OCR)
        </p>
        <p>
          <strong>ZhenZhu (Kevin):</strong>Rutgers University. Windows
          application developer
        </p>
      </div>
    </div>
  );
}
