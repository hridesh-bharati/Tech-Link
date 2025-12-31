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

    // First, escape HTML characters
    code = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Function to replace patterns while avoiding already highlighted content
    const safeReplace = (regex, replacement) => {
      return code.replace(regex, (match, ...groups) => {
        // Check if this match is inside any HTML tag
        const position = groups[groups.length - 2]; // Position of the match
        const before = code.substring(0, position);
        const after = code.substring(position);

        // Check if we're inside an HTML tag
        const lastTagOpen = before.lastIndexOf('<');
        const lastTagClose = before.lastIndexOf('>');

        // If we're inside a tag (opened but not closed), don't replace
        if (lastTagOpen > lastTagClose) {
          return match;
        }

        // Apply the replacement
        if (typeof replacement === 'function') {
          return replacement(match, ...groups.slice(0, -2));
        }
        return match.replace(regex, replacement);
      });
    };

    // Handle multi-line comments first (since they can contain //)
    code = safeReplace(
      /\/\*[\s\S]*?\*\//g,
      '<span class="hl-comment">$&</span>'
    );

    // Handle single-line comments
    code = safeReplace(
      /\/\/[^\n]*/g,
      '<span class="hl-comment">$&</span>'
    );

    // Handle strings (they shouldn't be processed for keywords)
    code = safeReplace(
      /"([^"\\]|\\.)*"/g,
      '<span class="hl-string">$&</span>'
    );

    // Handle preprocessor directives
    code = safeReplace(
      /^#\s*[a-zA-Z_][a-zA-Z0-9_]*\b.*/gm,
      '<span class="hl-pre">$&</span>'
    );

    // Handle std:: separately
    code = safeReplace(
      /std::/g,
      '<span class="hl-namespace">std</span>::'
    );

    // Handle numbers
    code = safeReplace(
      /\b(\d+(\.\d+)?(?:[eE][+-]?\d+)?)\b/g,
      '<span class="hl-number">$&</span>'
    );

    // Define keywords to highlight
    const keywords = [
      'int', 'float', 'double', 'char', 'void', 'return', 'if', 'else',
      'for', 'while', 'do', 'break', 'continue', 'switch', 'case', 'default',
      'sizeof', 'typedef', 'struct', 'enum', 'union', 'const', 'static',
      'extern', 'auto', 'register', 'volatile', 'goto',
      // C++ specific
      'class', 'public', 'private', 'protected', 'new', 'delete', 'this',
      'virtual', 'override', 'final', 'template', 'typename', 'namespace',
      'using', 'try', 'catch', 'throw', 'operator', 'friend', 'inline',
      'mutable', 'explicit', 'typeid', 'const_cast', 'dynamic_cast',
      'static_cast', 'reinterpret_cast', 'bool', 'true', 'false',
      'nullptr', 'decltype', 'noexcept', 'thread_local', 'alignas',
      'alignof', 'char16_t', 'char32_t', 'constexpr'
    ];

    // Highlight keywords
    keywords.forEach(keyword => {
      const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'g');
      code = safeReplace(keywordRegex, `<span class="hl-keyword">${keyword}</span>`);
    });

    // Handle std library keywords
    const stdKeywords = [
      'cout', 'cin', 'endl', 'cerr', 'clog', 'string', 'vector', 'map',
      'set', 'list', 'deque', 'queue', 'stack', 'pair', 'tuple', 'array'
    ];

    stdKeywords.forEach(keyword => {
      const stdKeywordRegex = new RegExp(`(std::|\\b)${keyword}\\b`, 'g');
      code = safeReplace(stdKeywordRegex, (match) => {
        if (match.startsWith('std::')) {
          // We already handled std:: above, so just wrap the keyword
          return `std::<span class="hl-keyword">${keyword}</span>`;
        }
        return `<span class="hl-keyword">${keyword}</span>`;
      });
    });

    return code;
  };
  /* ========== SIMPLE COPY FUNCTION ========== */
  const handleCopy = async () => {
    const textToCopy = isEditing ? editedCode : code;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback method
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
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
    setEditedCode(`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
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
                <FaPlay /> {isRunning ? "Running..." : "Run"}
              </button>
              <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? <FaEye /> : <FaEdit />} {isEditing ? "View" : "Edit"}
              </button>
              <button onClick={resetCode} title="Reset to original">
                <FaUndo /> Reset
              </button>
            </>
          )}
          <button
            onClick={handleCopy}
            className={copied ? "copied" : ""}
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? " Copied!" : " Copy"}
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
            style={{
              width: '100%',
              minHeight: '200px',
              fontFamily: 'monospace',
              padding: '15px',
              backgroundColor: '#2d2d2d',
              color: '#fff',
              border: 'none',
              resize: 'vertical',
              borderRadius: '0 0 5px 5px',
              outline: 'none'
            }}
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
          <div className="output-header">
            <strong>Output:</strong>
            <button
              onClick={() => setOutput("")}
              style={{
                background: 'none',
                border: 'none',
                color: '#666',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Clear
            </button>
          </div>
          <pre ref={outputRef}>{output}</pre>
        </div>
      )}

      {/* FOOTER */}
      {executable && (
        <div className="code-box-footer">
          <button onClick={loadExample}>
            <FaMagic /> Load Example
          </button>
          <small style={{ color: '#666', marginLeft: '10px' }}>
            Click "Run" to execute the code
          </small>
        </div>
      )}
    </div>
  );
};

export default CodeBox;