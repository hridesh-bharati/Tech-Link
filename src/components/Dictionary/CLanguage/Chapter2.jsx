// src/components/Dictionary/CLanguage/Chapter2.jsx
import React from 'react';
import CodeBox from '../CodeBox/CodeBox';
import './Chapter2.css';

export default function Chapter2() {
  return (
    <div className="chapter-content container-fluid px-3 pb-5">

      {/* Chapter Header */}
      <div className="chapter-header my-4">
        <h1 className="h2 fw-bold">📗 Chapter 2: Getting Started with C</h1>
        <p className="lead text-muted">Set up your C environment, compile programs, and practice your first exercises.</p>
      </div>

      {/* Section 1: Installation */}
      <div className="section-block mb-5">
        <div className="d-flex align-items-center mb-3">
          <div className="icon-circle me-3" style={{ backgroundColor: 'var(--info-light)' }}>
            <i className="bi bi-download" style={{ color: 'var(--info)' }}></i>
          </div>
          <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--info)' }}>1️⃣ Installation Guide</h2>
        </div>

        <div className="row g-3">
          {[
            { os: 'Windows', cmd: 'Download MinGW or MSYS2', desc: 'Install GCC compiler' },
            { os: 'Linux', cmd: 'sudo apt install gcc', desc: 'Ubuntu/Debian' },
            { os: 'macOS', cmd: 'xcode-select --install', desc: 'Install Xcode CLI tools' },
            { os: 'Online', cmd: 'OnlineGDB.com', desc: 'Compiler in browser' }
          ].map((item, idx) => (
            <div key={idx} className="col-md-6">
              <div className="card shadow-sm installation-card p-3 h-100">
                <h5 className="fw-bold mb-2">{item.os}</h5>
                <CodeBox 
                  code={item.cmd} 
                  language="bash" 
                  showCopy={true} 
                  showExpand={false} 
                  executable={false} // No run button for installation commands
                />
                <p className="small text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Compilation Process */}
      <div className="section-block mb-5">
        <div className="d-flex align-items-center mb-3">
          <div className="icon-circle me-3" style={{ backgroundColor: 'var(--success-light)' }}>
            <i className="bi bi-terminal-fill" style={{ color: 'var(--success)' }}></i>
          </div>
          <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--success)' }}>2️⃣ Compilation Process</h2>
        </div>

        <div className="row g-3">
          {[
            { step: 1, title: 'Source Code', desc: 'Write code in .c file' },
            { step: 2, title: 'Preprocessor', desc: 'Handles #include and macros' },
            { step: 3, title: 'Compiler', desc: 'Converts .c to assembly (.s)' },
            { step: 4, title: 'Assembler', desc: 'Assembly to object file (.o)' },
            { step: 5, title: 'Linker', desc: 'Combines object files into executable' }
          ].map((item, idx) => (
            <div key={idx} className="col-md-6">
              <div className="card shadow-sm step-card p-3 h-100">
                <strong>Step {item.step}:</strong> {item.title}
                <p className="small text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <CodeBox
          code={`# Compile C program
gcc program.c -o program

# Run program
./program

# Output:
Hello, World!`}
          title="Compilation Example"
          language="bash"
          executable={false} // shell commands, no run button
        />
      </div>

      {/* Section 3: First Program Exercise */}
      <div className="section-block mb-5">
        <div className="d-flex align-items-center mb-3">
          <div className="icon-circle me-3" style={{ backgroundColor: 'var(--warning-light)' }}>
            <i className="bi bi-lightbulb-fill" style={{ color: 'var(--warning)' }}></i>
          </div>
          <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--warning)' }}>3️⃣ Practice Exercise</h2>
        </div>

        <p>Create a program that prints a framed message:</p>
        <CodeBox
          code={`int main() {
    printf("********************\\n");
    printf("*                  *\\n");
    printf("*  I Love C!       *\\n");
    printf("*                  *\\n");
    printf("********************\\n");
    return 0;
}`}
          title="Sample C Program"
          language="c"
          executable={true} // Run button shown
        />
        <div className="alert alert-info mt-2">
          <strong>Hint:</strong> Use multiple printf() statements to draw the frame.
        </div>

        <CodeBox
          code={`********************\n*                  *\n*  I Love C!       *\n*                  *\n********************`}
          title="Expected Output"
          language="text"
          executable={false} // output only, no run
        />
      </div>

      {/* Section 4: Tips & Best Practices */}
      <div className="section-block mb-5">
        <div className="d-flex align-items-center mb-3">
          <div className="icon-circle me-3" style={{ backgroundColor: 'var(--danger-light)' }}>
            <i className="bi bi-stars" style={{ color: 'var(--danger)' }}></i>
          </div>
          <h2 className="h3 fw-bold mb-0" style={{ color: 'var(--danger)' }}>💡 Tips & Best Practices</h2>
        </div>

        <ul className="tips-list">
          <li>Write and test small programs to build confidence.</li>
          <li>Always check for compilation errors and warnings.</li>
          <li>Use meaningful variable names for readability.</li>
          <li>Comment your code for clarity and maintenance.</li>
          <li>Experiment with printf formatting and escape sequences.</li>
        </ul>
      </div>
    </div>
  );
}
