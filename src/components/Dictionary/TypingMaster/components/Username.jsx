import React, { useState } from "react";

export default function Username({ onSave }) {
  const [name, setName] = useState("");

  const saveUser = () => {
    if (!name) return;
    localStorage.setItem("tm_user", name);
    onSave(name);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Typing Master</h2>
      <input
        className="form-control mt-3"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary mt-3" onClick={saveUser}>
        Next →
      </button>
    </div>
  );
}
