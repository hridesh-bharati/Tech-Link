// Practice.jsx
import React, { useState } from "react";
import TypingMasterGame from "../Game/TypingMasterGame";
import "./Practice.css";

export default function Practice() {
  const [mode, setMode] = useState("practice");
  
  return (
    <div className="practice-container">
      <div className="practice-header">
        <h1>Typing Practice</h1>
        <p className="subtitle">Choose your practice mode and start improving your typing skills</p>
      </div>
      
      <div className="mode-selector">
        <button 
          className={`mode-btn ${mode === "practice" ? "active" : ""}`}
          onClick={() => setMode("practice")}
        >
          🎯 Practice Mode
          <span>Type the given text accurately</span>
        </button>
        
        <button 
          className={`mode-btn ${mode === "time" ? "active" : ""}`}
          onClick={() => setMode("time")}
        >
          ⏱️ Time Trial
          <span>Race against the clock</span>
        </button>
        
        <button 
          className={`mode-btn ${mode === "words" ? "active" : ""}`}
          onClick={() => setMode("words")}
        >
          📝 Word Count
          <span>Complete word targets</span>
        </button>
      </div>
      
      <div className="game-wrapper">
        <TypingMasterGame initialMode={mode} />
      </div>
      
      <div className="practice-info">
        <div className="info-card">
          <h3>📊 Track Progress</h3>
          <p>Monitor your WPM, accuracy, and errors over time</p>
        </div>
        
        <div className="info-card">
          <h3>🎮 Multiple Modes</h3>
          <p>Practice, Time Trial, and Word Count challenges</p>
        </div>
        
        <div className="info-card">
          <h3>📈 Difficulty Levels</h3>
          <p>Easy, Medium, and Hard texts to match your skill</p>
        </div>
        
        <div className="info-card">
          <h3>💾 History</h3>
          <p>Review your last 10 attempts and track improvement</p>
        </div>
      </div>
    </div>
  );
}