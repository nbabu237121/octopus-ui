import React from "react";
import "./Palette.css";

const components = [
  { id: "kafka", label: "Kafka Consumer" },
  { id: "log", label: "Log Processor" },
  { id: "file", label: "File Writer" },
  { id: "http", label: "HTTP Request" },
];

export default function ComponentPalette() {
  return (
    <div className="palette-container">
      <h3>Components</h3>
      {components.map(c => (
        <div key={c.id} className="palette-item" draggable>
          {c.label}
        </div>
      ))}
    </div>
  );
}
