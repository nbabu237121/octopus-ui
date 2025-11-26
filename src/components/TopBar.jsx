import React from "react";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="logo">🐙 Octopus</div>
      <div className="top-actions">
        <button>Projects</button>
        <button>Deployments</button>
        <div className="profile">User</div>
      </div>
    </div>
  );
}
