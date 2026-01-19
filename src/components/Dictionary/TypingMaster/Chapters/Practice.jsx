import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

import Username from "../components/Username";
import ModeSelector from "../components/ModeSelector";
import TypingGame from "../Game/TypingGame";

export default function TypingMaster() {
  const [user, setUser] = useState(localStorage.getItem("tm_user"));
  const [mode, setMode] = useState(null);
  const [time, setTime] = useState(120);

  if (!user) return <Username onSave={setUser} />;

  if (!mode)
    return <ModeSelector setMode={setMode} time={time} setTime={setTime} />;

  return <TypingGame user={user} mode={mode} timeLimit={time} />;
}
