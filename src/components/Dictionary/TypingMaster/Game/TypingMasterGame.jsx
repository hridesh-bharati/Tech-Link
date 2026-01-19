import React, { useState, useEffect, useRef, useCallback } from "react";
import "./TypingMasterGame.css";

const TEXTS = {
  easy: [
    "The quick brown fox jumps over the lazy dog. Simple sentences help beginners.",
    "Practice makes perfect. Every day typing improves your speed and accuracy.",
    "Start slow, focus on accuracy first, then gradually increase your speed.",
  ],
  medium: [
    "Programming is the process of creating a set of instructions that tell a computer how to perform a task. It requires logical thinking and attention to detail.",
    "Touch typing is a method of typing without looking at the keyboard. This skill increases productivity and reduces strain on your eyes and neck.",
    "Regular practice with varied texts helps develop muscle memory, allowing you to type faster and with fewer errors over time.",
  ],
  hard: [
    "The juxtaposition of quantum mechanics and classical physics presents a fascinating paradox that continues to challenge contemporary theoretical physicists worldwide.",
    "Cryptocurrency, a digital or virtual currency secured by cryptography, operates on decentralized networks based on blockchain technology, fundamentally disrupting traditional financial paradigms.",
    "Pneumonoultramicroscopicsilicovolcanoconiosis, an obscure term ostensibly referring to a lung disease, often appears in typing tests to challenge even the most proficient typists.",
  ],
};

const TIMES = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min

export default function TypingMasterGame() {
  // Game states
  const [mode, setMode] = useState("practice"); // practice, time, words
  const [difficulty, setDifficulty] = useState("medium");
  const [timeLimit, setTimeLimit] = useState(60); // seconds
  const [wordLimit, setWordLimit] = useState(50);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [startTime, setStartTime] = useState(null);
  const [stats, setStats] = useState({
    wpm: 0,
    accuracy: 100,
    correctChars: 0,
    totalChars: 0,
    errors: 0,
    rawWpm: 0,
  });
  const [history, setHistory] = useState([]);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [theme, setTheme] = useState("light"); // light, dark, blue

  const textRef = useRef(null);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Initialize text
  useEffect(() => {
    generateText();
  }, [difficulty, mode, wordLimit]);

  // Timer logic
  useEffect(() => {
    if (isActive && timeLeft > 0 && mode === "time") {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            finishGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      finishGame();
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, timeLeft, mode]);

  // Calculate real-time stats
  useEffect(() => {
    if (input.length > 0 && startTime) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
      const words = input.trim().split(/\s+/).length;
      const rawWpm = Math.round(words / timeElapsed);
      
      // Calculate accuracy
      const correctChars = input
        .split("")
        .filter((c, i) => c === text[i]).length;
      const totalChars = input.length;
      const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
      const errors = totalChars - correctChars;

      // Check word limit completion
      if (mode === "words" && words >= wordLimit) {
        finishGame();
      }

      setStats({
        wpm: rawWpm,
        accuracy,
        correctChars,
        totalChars,
        errors,
        rawWpm,
      });
    }
  }, [input, startTime, text, mode, wordLimit]);

  const generateText = useCallback(() => {
    if (mode === "words") {
      const sentences = TEXTS[difficulty];
      let generatedText = "";
      let wordCount = 0;
      
      while (wordCount < wordLimit) {
        const sentence = sentences[Math.floor(Math.random() * sentences.length)];
        generatedText += (generatedText ? " " : "") + sentence;
        wordCount = generatedText.split(/\s+/).length;
      }
      
      // Trim to exact word count
      const words = generatedText.split(/\s+/).slice(0, wordLimit);
      setText(words.join(" "));
    } else {
      const sentences = TEXTS[difficulty];
      const randomIndex = Math.floor(Math.random() * sentences.length);
      setText(sentences[randomIndex]);
    }
    
    resetGame();
  }, [difficulty, mode, wordLimit]);

  const handleChange = (e) => {
    if (!isActive && e.target.value.length === 1) {
      setIsActive(true);
      setStartTime(Date.now());
    }

    if (!isFinished) {
      setInput(e.target.value);
      
      // Check for completion in practice mode
      if (mode === "practice" && e.target.value === text) {
        finishGame();
      }
    }
  };

  const finishGame = () => {
    setIsActive(false);
    setIsFinished(true);
    clearInterval(timerRef.current);
    
    // Save to history
    const finalStats = {
      ...stats,
      date: new Date().toISOString(),
      mode,
      difficulty,
      timeLimit: mode === "time" ? timeLimit : null,
      wordLimit: mode === "words" ? wordLimit : null,
    };
    
    setHistory(prev => [finalStats, ...prev.slice(0, 9)]); // Keep last 10
  };

  const resetGame = () => {
    setInput("");
    setIsActive(false);
    setIsFinished(false);
    setTimeLeft(timeLimit);
    setStartTime(null);
    setStats({
      wpm: 0,
      accuracy: 100,
      correctChars: 0,
      totalChars: 0,
      errors: 0,
      rawWpm: 0,
    });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const restartGame = () => {
    resetGame();
    if (mode === "practice" || mode === "words") {
      generateText();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

// Add to the component's useEffect for keyboard shortcuts
useEffect(() => {
  const handleKeyPress = (e) => {
    // Quick restart with Ctrl + R
    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault();
      restartGame();
    }
    
    // Pause/Resume with Space
    if (e.key === ' ' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (isActive) {
        setIsActive(false);
      } else if (input.length > 0) {
        setIsActive(true);
      }
    }
    
    // Focus input with any character key when not focused
    if (
      e.key.length === 1 && 
      !e.ctrlKey && 
      !e.altKey && 
      !e.metaKey &&
      document.activeElement !== inputRef.current
    ) {
      e.preventDefault();
      inputRef.current?.focus();
      setInput(prev => prev + e.key);
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [isActive, input]);

// Add accessibility features
const handleKeyDown = (e) => {
  if (e.key === "Escape") {
    restartGame();
  }
  if (e.ctrlKey && e.key === "r") {
    e.preventDefault();
    restartGame();
  }
  // Tab navigation within textarea
  if (e.key === "Tab" && !e.shiftKey) {
    e.preventDefault();
    const textarea = e.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    setInput(
      input.substring(0, start) +
      "\t" +
      input.substring(end)
    );
    
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }, 0);
  }
};

  // Calculate progress
  const progress = mode === "practice" 
    ? (input.length / text.length) * 100
    : mode === "time"
    ? ((timeLimit - timeLeft) / timeLimit) * 100
    : (input.trim().split(/\s+/).length / wordLimit) * 100;

  return (
    <div className={`typing-game-container ${theme}`}>
      <div className="game-header">
        <h2>Typing Master Pro</h2>
        <div className="theme-selector">
          <button 
            className={theme === "light" ? "active" : ""}
            onClick={() => setTheme("light")}
          >
            🌞
          </button>
          <button 
            className={theme === "dark" ? "active" : ""}
            onClick={() => setTheme("dark")}
          >
            🌙
          </button>
          <button 
            className={theme === "blue" ? "active" : ""}
            onClick={() => setTheme("blue")}
          >
            🔵
          </button>
        </div>
      </div>

      <div className="game-controls">
        <div className="control-group">
          <label>Mode:</label>
          <select 
            value={mode} 
            onChange={(e) => {
              setMode(e.target.value);
              resetGame();
            }}
            disabled={isActive}
          >
            <option value="practice">Practice</option>
            <option value="time">Time Trial</option>
            <option value="words">Word Count</option>
          </select>
        </div>

        <div className="control-group">
          <label>Difficulty:</label>
          <select 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
            disabled={isActive}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {mode === "time" && (
          <div className="control-group">
            <label>Time:</label>
            <select 
              value={timeLimit} 
              onChange={(e) => {
                setTimeLimit(Number(e.target.value));
                setTimeLeft(Number(e.target.value));
              }}
              disabled={isActive}
            >
              {TIMES.map(t => (
                <option key={t} value={t}>
                  {t < 60 ? `${t}s` : `${t/60}min`}
                </option>
              ))}
            </select>
          </div>
        )}

        {mode === "words" && (
          <div className="control-group">
            <label>Words:</label>
            <select 
              value={wordLimit} 
              onChange={(e) => setWordLimit(Number(e.target.value))}
              disabled={isActive}
            >
              <option value={25}>25 words</option>
              <option value={50}>50 words</option>
              <option value={100}>100 words</option>
              <option value={200}>200 words</option>
            </select>
          </div>
        )}

        <button 
          className="new-text-btn" 
          onClick={generateText}
          disabled={isActive}
        >
          New Text
        </button>

        <button 
          className="keyboard-toggle"
          onClick={() => setShowKeyboard(!showKeyboard)}
        >
          {showKeyboard ? "Hide Keyboard" : "Show Keyboard"}
        </button>
      </div>

      {/* Real-time Stats */}
      <div className="live-stats">
        <div className="stat-box">
          <div className="stat-label">WPM</div>
          <div className="stat-value">{stats.wpm}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Accuracy</div>
          <div className="stat-value">{stats.accuracy}%</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Errors</div>
          <div className="stat-value">{stats.errors}</div>
        </div>
        {mode === "time" && (
          <div className="stat-box">
            <div className="stat-label">Time</div>
            <div className="stat-value">{formatTime(timeLeft)}</div>
          </div>
        )}
        {mode === "words" && (
          <div className="stat-box">
            <div className="stat-label">Words</div>
            <div className="stat-value">
              {input.trim().split(/\s+/).filter(w => w).length}/{wordLimit}
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Text Display */}
      <div className="typing-text" ref={textRef}>
        {text.split("").map((char, idx) => {
          let className = "";
          if (idx < input.length) {
            if (char === input[idx]) {
              className = "correct";
            } else {
              className = "incorrect";
            }
          } else if (idx === input.length && isActive) {
            className = "current";
          }
          return (
            <span key={idx} className={className}>
              {char === " " ? "␣" : char}
            </span>
          );
        })}
      </div>

      {/* Input Area */}
      <textarea
        ref={inputRef}
        className="typing-input"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Start typing here... (Press ESC to restart)"
        rows={3}
        disabled={isFinished}
        autoFocus
      />

      {/* Controls */}
      <div className="action-buttons">
        <button 
          className="restart-btn"
          onClick={restartGame}
        >
          {isActive ? "Restart (ESC)" : "Start"}
        </button>
        
        {isActive && (
          <button 
            className="finish-btn"
            onClick={finishGame}
          >
            Finish Early
          </button>
        )}
      </div>

      {/* Virtual Keyboard */}
      {showKeyboard && (
        <div className="virtual-keyboard">
          <div className="keyboard-row">
            {'qwertyuiop'.split('').map(key => (
              <kbd key={key}>{key}</kbd>
            ))}
          </div>
          <div className="keyboard-row">
            {'asdfghjkl'.split('').map(key => (
              <kbd key={key}>{key}</kbd>
            ))}
          </div>
          <div className="keyboard-row">
            {'zxcvbnm'.split('').map(key => (
              <kbd key={key}>{key}</kbd>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {isFinished && (
        <div className="results-panel">
          <h3>🏆 Test Completed!</h3>
          <div className="final-stats">
            <div className="final-stat">
              <h4>Speed</h4>
              <p className="highlight">{stats.wpm} WPM</p>
            </div>
            <div className="final-stat">
              <h4>Accuracy</h4>
              <p className="highlight">{stats.accuracy}%</p>
            </div>
            <div className="final-stat">
              <h4>Errors</h4>
              <p>{stats.errors}</p>
            </div>
            <div className="final-stat">
              <h4>Characters</h4>
              <p>{stats.correctChars}/{stats.totalChars}</p>
            </div>
          </div>
          
          <div className="result-actions">
            <button onClick={restartGame}>Try Again</button>
            <button onClick={generateText}>New Text</button>
            <button onClick={() => navigator.clipboard.writeText(`${stats.wpm} WPM | ${stats.accuracy}% accuracy`)}>
              Share Results
            </button>
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="history-panel">
          <h4>Recent Tests</h4>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Mode</th>
                <th>WPM</th>
                <th>Accuracy</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {history.map((test, idx) => (
                <tr key={idx}>
                  <td>{new Date(test.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                  <td>{test.mode}</td>
                  <td className={test.wpm > 60 ? "good" : test.wpm > 40 ? "average" : "poor"}>
                    {test.wpm}
                  </td>
                  <td className={test.accuracy > 95 ? "good" : test.accuracy > 90 ? "average" : "poor"}>
                    {test.accuracy}%
                  </td>
                  <td>{test.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tips */}
      <div className="tips-panel">
        <h4>💡 Tips</h4>
        <ul>
          <li>Focus on accuracy first, speed will follow</li>
          <li>Use proper finger placement (home row keys)</li>
          <li>Don't look at the keyboard while typing</li>
          <li>Practice regularly for best results</li>
          <li>Press ESC to restart anytime</li>
        </ul>
      </div>
    </div>
  );
}