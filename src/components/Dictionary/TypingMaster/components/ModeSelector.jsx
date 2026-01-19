import React from "react";

export default function ModeSelector({ setMode, time, setTime }) {
  return (
    <div className="container mt-4">
      <h4>Select Time</h4>
      <select
        className="form-select w-25 mb-3"
        value={time}
        onChange={(e) => setTime(+e.target.value)}
      >
        <option value={60}>1 Minute</option>
        <option value={120}>2 Minutes</option>
        <option value={300}>5 Minutes</option>
      </select>

      <h4>Select Typing Mode</h4>

      <div className="list-group">
        <button className="list-group-item" onClick={() => setMode("numbers")}>
          A → Numbers (1 2 3)
        </button>
        <button className="list-group-item" onClick={() => setMode("alphabets")}>
          B → Alphabets (a b c)
        </button>
        <button className="list-group-item" onClick={() => setMode("paragraph")}>
          C → Paragraph
        </button>
        <button className="list-group-item" onClick={() => setMode("bubble")}>
          D → Bubble Typing
        </button>
      </div>
    </div>
  );
}
