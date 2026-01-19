import React, { useEffect, useState } from "react";
import { texts } from "./textData";
import Result from "../components/Result";

export default function TypingGame({ user, mode, timeLimit }) {
  const baseText = texts[mode] || "";
  const [input, setInput] = useState("");
  const [time, setTime] = useState(timeLimit);
  const [errors, setErrors] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (time === 0) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time]);

  const handleType = (e) => {
    if (done) return;
    const val = e.target.value;
    const i = val.length - 1;

    if (val[i] !== baseText[i % baseText.length]) {
      setErrors(errors + 1);
    }
    setInput(val);
  };

  if (done)
    return (
      <Result
        input={input}
        errors={errors}
        time={timeLimit}
        user={user}
      />
    );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <strong>{user}</strong>
        <strong>⏱ {time}s</strong>
      </div>

      <div className="border p-3 mt-3">
        {baseText.split("").map((c, i) => {
          let cls = "";
          if (i < input.length)
            cls = input[i] === c ? "text-success" : "text-danger";
          return (
            <span key={i} className={cls}>
              {c}
            </span>
          );
        })}
      </div>

      <textarea
        className="form-control mt-3"
        rows="4"
        value={input}
        onChange={handleType}
        autoFocus
      />
    </div>
  );
}
