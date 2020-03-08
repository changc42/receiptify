import React from "react";
import "../css/Landing.css";

export default function Landing() {
  return (
    <div className="Landing">
      <h1 style={{ fontSize: "200px" }}>Receiptify</h1>
      <form>
        <input type="text" placeholder="Search for an item..."></input>
        <i class="fas fa-search"></i>
      </form>
      <p style={{ fontSize: "50px" }}>Scan receipts, Save money</p>
    </div>
  );
}
