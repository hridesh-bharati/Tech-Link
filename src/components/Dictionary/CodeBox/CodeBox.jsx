// src/components/Dictionary/CodeBox/CodeBox.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaCopy,
  FaCheck,
  FaPlay,
  FaEdit,
  FaEye,
  FaUndo,
  FaMagic,
} from "react-icons/fa";
import { compileAndRunCode } from "./compilerService";
import "./CodeBox.css";

const CodeBox = ({
  code,
  language = "c",
  title = "Example Code",
  executable = false,
  showLineNumbers = true,
  highlightLines = [],
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCode, setEditedCode] = useState(code);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [hasError, setHasError] = useState(false);

  const textareaRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    setEditedCode(code);
  }, [code]);

  // auto resize textarea
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [editedCode, isEditing]);

  // auto scroll output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  /* ========= SIMPLE SYNTAX HIGHLIGHT ========= */
const highlightCode = (code) => {
  if (!code) return "";

  // 1️⃣ Escape HTML chars first
  code = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 2️⃣ Strings first (to avoid highlighting inside strings)
  code = code.replace(
    /("([^"\\]|\\.)*")/g,
    '<span class="hl-string">$1</span>'
  );

  // 3️⃣ Single line comments
  code = code.replace(/(\/\/[^\n]*)/g, '<span class="hl-comment">$1</span>');

  // 4️⃣ Preprocessor directives
  code = code.replace(
    /(^#\s*include\b.*)/gm,
    '<span class="hl-pre">$1</span>'
  );

  // 5️⃣ Keywords
  code = code.replace(
    /\b(int|float|double|char|void|return|if|else|for|while|do|break|continue|main|printf|scanf)\b/g,
    '<span class="hl-keyword">$1</span>'
  );

  // 6️⃣ Numbers (integers + floats)
  code = code.replace(
    /\b(\d+(\.\d+)?)\b/g,
    '<span class="hl-number">$1</span>'
  );

  return code;
};



  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = editedCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      } else {
        await navigator.clipboard.writeText(editedCode);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      // Optional: Show a more visible feedback
      const copyBtn = event.currentTarget;
      copyBtn.classList.add('copy-success');
      setTimeout(() => copyBtn.classList.remove('copy-success'), 500);

    } catch (error) {
      console.error('Copy failed:', error);
      alert('Failed to copy code. Please select and copy manually.');
    }
  };

  const runCode = async () => {
    if (!executable) return;

    setIsRunning(true);
    setHasError(false);
    setOutput("⏳ Compiling...");

    try {
      const result = await compileAndRunCode(editedCode, language);
      setHasError(result.hasError);
      setOutput(result.output || result.error);
    } catch (e) {
      setHasError(true);
      setOutput("❌ Error while running code");
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setEditedCode(code);
    setOutput("");
    setHasError(false);
    setIsEditing(false);
  };

  const loadExample = () => {
    setEditedCode(`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`);
    setIsEditing(true);
  };

  return (
    <div className={`code-box ${hasError ? "has-error" : ""}`}>
      {/* HEADER */}
      <div className="code-box-header">
        <div className="code-box-title">
          <span className="language-badge">{language.toUpperCase()}</span>
          <span>{title}</span>
        </div>

        <div className="code-box-actions">
          {executable && (
            <>
              <button onClick={runCode} disabled={isRunning}>
                <FaPlay /> Run
              </button>
              <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? <FaEye /> : <FaEdit />}
              </button>
              <button onClick={resetCode}>
                <FaUndo />
              </button>
            </>
          )}
          <button onClick={handleCopy}>
            {copied ? <FaCheck /> : <FaCopy />}
          </button>
        </div>
      </div>

      {/* CODE */}
      <div className="code-box-body">
        {isEditing ? (
          <textarea
            ref={textareaRef}
            className="code-editor"
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
            spellCheck="false"
          />
        ) : (
          <div className="code-display">
            {showLineNumbers && (
              <div className="line-numbers">
                {editedCode.split("\n").map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
            )}
            <pre className="code-content">
              <code dangerouslySetInnerHTML={{ __html: highlightCode(editedCode) }} />
            </pre>

          </div>
        )}
      </div>

      {/* OUTPUT */}
      {executable && output && (
        <div className={`code-box-output ${hasError ? "error" : ""}`}>
          <pre ref={outputRef}>{output}</pre>
        </div>
      )}

      {/* FOOTER */}
      {executable && (
        <div className="code-box-footer">
          <button onClick={loadExample}>
            <FaMagic /> Example
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeBox;
