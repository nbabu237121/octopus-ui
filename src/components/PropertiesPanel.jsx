import React from "react";
import "./Properties.css";

export default function PropertiesPanel({ selectedNode }) {
  if (!selectedNode) return <div className="properties-container">Select a node</div>;

  return (
    <div className="properties-container">
      <h3>{selectedNode.data.label}</h3>
      {Object.entries(selectedNode.data).map(([key, value]) => (
        <div key={key} className="property-item">
          <label>{key}</label>
          <input type="text" defaultValue={value} />
        </div>
      ))}
    </div>
  );
}
