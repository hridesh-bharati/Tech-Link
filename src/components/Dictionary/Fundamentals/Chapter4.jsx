import React from "react";
import { Cpu, CircuitBoard, Gauge, Zap, Cpu as CpuIcon, Activity, Settings, Layers, Code, Binary, Server, Terminal } from "lucide-react";

export default function Chapter4() {
  const sections = [
    {
      id: 1,
      title: "⚙️ Central Processing Unit (CPU)",
      icon: <Cpu size={28} />,
      color: "var(--primary)",
      bgColor: "rgba(0, 168, 132, 0.1)",
      content: (
        <div>
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <div className="p-4 rounded-3" style={{
                background: 'var(--gradient-primary)',
                color: 'white'
              }}>
                <h3 className="fw-bold mb-3">Brain of the Computer</h3>
                <p className="mb-0">
                  The CPU is the primary component that executes instructions and processes data in a computer system.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="/img/fundamental/mp.jpg"
                alt="CPU"
                className="img-fluid rounded-3 shadow"
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 rounded-3 h-100" style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--primary)' }}>
                  <Zap size={20} className="me-2" />
                  Key Functions
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <span className="badge rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--primary)',
                      color: 'white'
                    }}>1</span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Fetch:</strong> Gets instructions from memory
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <span className="badge rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--primary)',
                      color: 'white'
                    }}>2</span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Decode:</strong> Interprets instructions
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start gap-2">
                    <span className="badge rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--primary)',
                      color: 'white'
                    }}>3</span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Execute:</strong> Performs calculations/operations
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <span className="badge rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--primary)',
                      color: 'white'
                    }}>4</span>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Write Back:</strong> Stores results in memory
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 rounded-3 h-100" style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>
                  <Activity size={20} className="me-2" />
                  Performance Metrics
                </h5>
                <div className="row g-2">
                  <div className="col-6">
                    <div className="p-3 rounded-2" style={{ backgroundColor: 'rgba(0, 168, 132, 0.05)' }}>
                      <div className="fw-bold" style={{ color: 'var(--primary)', fontSize: 'var(--text-sm)' }}>Clock Speed</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>2-5 GHz</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-2" style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)' }}>
                      <div className="fw-bold" style={{ color: 'var(--primary-blue)', fontSize: 'var(--text-sm)' }}>Cores</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>2-64 cores</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-2" style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}>
                      <div className="fw-bold" style={{ color: 'var(--success)', fontSize: 'var(--text-sm)' }}>Cache</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>4-128 MB</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-2" style={{ backgroundColor: 'rgba(124, 58, 237, 0.05)' }}>
                      <div className="fw-bold" style={{ color: 'var(--secondary)', fontSize: 'var(--text-sm)' }}>TDP</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>35-280W</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-3" style={{
            backgroundColor: 'var(--bg-secondary)',
            borderLeft: '4px solid var(--warning)'
          }}>
            <h5 className="fw-bold mb-3" style={{ color: 'var(--warning)' }}>
              <Settings size={20} className="me-2" />
              CPU Architecture
            </h5>
            <p style={{ color: 'var(--text-secondary)' }}>
              Modern CPUs follow <strong>Von Neumann architecture</strong> with separate storage and processing units.
              They use <strong>pipelining</strong> to execute multiple instructions simultaneously and
              <strong>superscalar execution</strong> for parallel processing.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "🧮 Arithmetic Logic Unit (ALU)",
      icon: <CircuitBoard size={28} />,
      color: "var(--success)",
      bgColor: "rgba(16, 185, 129, 0.1)",
      content: (
        <div>
          <div className="row">
            <div className="col-lg-8">
              <h4 className="fw-bold mb-3" style={{ color: 'var(--success)' }}>
                Mathematical & Logical Operations Center
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                The ALU is the digital circuit within the CPU that performs arithmetic and bitwise logical operations on integer binary numbers.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/ALU_block.gif"
                alt="ALU Diagram"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <div className="p-4 rounded-3 h-100" style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}>
                <h6 className="fw-bold mb-3" style={{ color: 'var(--success)' }}>
                  📊 Arithmetic Operations
                </h6>
                <div className="row g-2">
                  {[
                    { op: "Addition (+)", desc: "Adds two numbers", icon: "➕" },
                    { op: "Subtraction (-)", desc: "Subtracts one number from another", icon: "➖" },
                    { op: "Multiplication (×)", desc: "Multiplies two numbers", icon: "✖️" },
                    { op: "Division (÷)", desc: "Divides one number by another", icon: "➗" },
                    { op: "Increment (++)", desc: "Adds 1 to a number", icon: "⬆️" },
                    { op: "Decrement (--)", desc: "Subtracts 1 from a number", icon: "⬇️" }
                  ].map((item, idx) => (
                    <div key={idx} className="col-6">
                      <div className="p-2 rounded-2" style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.05)',
                        border: '1px solid rgba(16, 185, 129, 0.1)'
                      }}>
                        <div className="d-flex align-items-center gap-2">
                          <span>{item.icon}</span>
                          <div>
                            <div className="fw-bold" style={{ color: 'var(--success)', fontSize: 'var(--text-xs)' }}>{item.op}</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 rounded-3 h-100" style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}>
                <h6 className="fw-bold mb-3" style={{ color: 'var(--info)' }}>
                  🔢 Logical Operations
                </h6>
                <div className="row g-2">
                  {[
                    { op: "AND (∧)", desc: "Both inputs must be true", truth: "1 ∧ 1 = 1" },
                    { op: "OR (∨)", desc: "At least one input true", truth: "0 ∨ 1 = 1" },
                    { op: "NOT (¬)", desc: "Inverts the input", truth: "¬1 = 0" },
                    { op: "XOR (⊕)", desc: "Exclusive OR", truth: "1 ⊕ 1 = 0" },
                    { op: "NAND", desc: "NOT AND", truth: "1 NAND 1 = 0" },
                    { op: "NOR", desc: "NOT OR", truth: "1 NOR 0 = 0" }
                  ].map((item, idx) => (
                    <div key={idx} className="col-6">
                      <div className="p-2 rounded-2" style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.05)',
                        border: '1px solid rgba(59, 130, 246, 0.1)'
                      }}>
                        <div>
                          <div className="fw-bold" style={{ color: 'var(--info)', fontSize: 'var(--text-xs)' }}>{item.op}</div>
                          <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>{item.desc}</div>
                          <div className="text-muted" style={{ fontSize: 'var(--text-xs)' }}>{item.truth}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-3" style={{
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <h6 className="fw-bold mb-2" style={{ color: 'var(--success)' }}>
              ⚡ ALU Components
            </h6>
            <div className="row g-3">
              <div className="col-md-3">
                <div className="text-center p-3">
                  <div className="fw-bold mb-1" style={{ color: 'var(--success)' }}>Arithmetic Unit</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Performs math operations</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center p-3">
                  <div className="fw-bold mb-1" style={{ color: 'var(--success)' }}>Logic Unit</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Handles logical operations</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center p-3">
                  <div className="fw-bold mb-1" style={{ color: 'var(--success)' }}>Accumulator</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Stores intermediate results</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center p-3">
                  <div className="fw-bold mb-1" style={{ color: 'var(--success)' }}>Status Register</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Stores flags (carry, zero, etc.)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "🎮 Control Unit (CU)",
      icon: <Gauge size={28} />,
      color: "var(--primary-blue)",
      bgColor: "rgba(37, 99, 235, 0.1)",
      content: (
        <div>
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h4 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>
                Traffic Controller of CPU
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                The Control Unit directs the operation of the processor. It tells the computer's memory, ALU, and input/output devices how to respond to program instructions.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/img/fundamental/aucu.png"
                alt="Control Unit"
                className="img-fluid rounded-3"
                style={{ maxHeight: '200px', objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 rounded-3 h-100" style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>
                  🎯 Primary Functions
                </h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3 d-flex align-items-start gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'var(--primary-blue)',
                      color: 'white'
                    }}>
                      <Layers size={18} />
                    </div>
                    <div>
                      <h6 style={{ color: 'var(--text-primary)' }}>Instruction Fetching</h6>
                      <p className="mb-0" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                        Retrieves instructions from main memory
                      </p>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'var(--primary-blue)',
                      color: 'white'
                    }}>
                      <Code size={18} />
                    </div>
                    <div>
                      <h6 style={{ color: 'var(--text-primary)' }}>Instruction Decoding</h6>
                      <p className="mb-0" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                        Interprets what the instruction means
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'var(--primary-blue)',
                      color: 'white'
                    }}>
                      <Settings size={18} />
                    </div>
                    <div>
                      <h6 style={{ color: 'var(--text-primary)' }}>Execution Control</h6>
                      <p className="mb-0" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                        Sends control signals to other units
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 rounded-3 h-100" style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--warning)' }}>
                  🔄 Control Signals
                </h5>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                        <th style={{ color: 'var(--warning)', fontSize: 'var(--text-sm)' }}>Signal Type</th>
                        <th style={{ color: 'var(--warning)', fontSize: 'var(--text-sm)' }}>Purpose</th>
                        <th style={{ color: 'var(--warning)', fontSize: 'var(--text-sm)' }}>Destination</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Memory Read</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Read data from memory</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>RAM</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Memory Write</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Write data to memory</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>RAM</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>ALU Operation</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Select ALU function</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>ALU</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Register Enable</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Enable register read/write</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Registers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-3" style={{
            backgroundColor: 'rgba(37, 99, 235, 0.05)',
            borderLeft: '4px solid var(--primary-blue)'
          }}>
            <h6 className="fw-bold mb-2" style={{ color: 'var(--primary-blue)' }}>
              🏗️ CU Architecture Types
            </h6>
            <div className="row">
              <div className="col-md-6">
                <div className="p-3 mb-3 rounded-2" style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}>
                  <h6 style={{ color: 'var(--primary-blue)' }}>Hardwired Control Unit</h6>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Uses fixed logic circuits. Fast but inflexible. Used in RISC processors.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 mb-3 rounded-2" style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}>
                  <h6 style={{ color: 'var(--secondary)' }}>Microprogrammed Control Unit</h6>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Uses microcode stored in ROM. Slower but flexible. Used in CISC processors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "💾 Registers",
      icon: <Binary size={28} />,
      color: "var(--secondary)",
      bgColor: "rgba(124, 58, 237, 0.1)",
      content: (
        <div>
          <div className="row mb-4">
            <div className="col-lg-8">
              <h4 className="fw-bold mb-3" style={{ color: 'var(--secondary)' }}>
                CPU's Ultra-Fast Memory
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Registers are small, high-speed storage locations within the CPU that hold data, instructions, and addresses during processing. They are the fastest memory in a computer system.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="/img/fundamental/registere.jpg"
                alt="CPU Registers"
                className="img-fluid rounded-3"
                style={{ maxHeight: '200px', objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-8">
              <div className="p-4 rounded-3" style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--secondary)' }}>
                  📋 Types of Registers
                </h5>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}>
                        <th style={{ color: 'var(--secondary)', fontSize: 'var(--text-sm)' }}>Register</th>
                        <th style={{ color: 'var(--secondary)', fontSize: 'var(--text-sm)' }}>Size (bits)</th>
                        <th style={{ color: 'var(--secondary)', fontSize: 'var(--text-sm)' }}>Purpose</th>
                        <th style={{ color: 'var(--secondary)', fontSize: 'var(--text-sm)' }}>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Accumulator (ACC)</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>32/64</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Stores ALU results</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>EAX (x86)</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Program Counter (PC)</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>32/64</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Next instruction address</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>RIP (x64)</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Instruction Register (IR)</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>32/64</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Holds current instruction</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>-</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Memory Address (MAR)</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>32/64</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Memory address to access</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>-</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Memory Buffer (MBR)</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>32/64</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Data to/from memory</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>-</td>
                      </tr>
                      <tr>
                        <td style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Status Register</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>8/16</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Flags (carry, zero, etc.)</td>
                        <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>FLAGS (x86)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-3 h-100" style={{
                backgroundColor: 'rgba(124, 58, 237, 0.05)',
                border: '1px solid rgba(124, 58, 237, 0.2)'
              }}>
                <h5 className="fw-bold mb-3" style={{ color: 'var(--secondary)' }}>
                  ⚡ Register Characteristics
                </h5>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--secondary)',
                      color: 'white',
                      fontSize: 'var(--text-xs)'
                    }}>1</div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Fastest Memory</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>Access in 1 clock cycle</div>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--secondary)',
                      color: 'white',
                      fontSize: 'var(--text-xs)'
                    }}>2</div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Limited Capacity</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>Few bytes to kilobytes</div>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-start gap-2">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--secondary)',
                      color: 'white',
                      fontSize: 'var(--text-xs)'
                    }}>3</div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Directly Accessible</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>By CPU only</div>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--secondary)',
                      color: 'white',
                      fontSize: 'var(--text-xs)'
                    }}>4</div>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>Volatile</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>Lose data when power off</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              🔄 Register Operations
            </h5>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="p-3 rounded-3 text-center" style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}>
                  <div className="fw-bold mb-2" style={{ color: 'var(--primary)', fontSize: 'var(--text-lg)' }}>LOAD</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Copy data from memory to register
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 rounded-3 text-center" style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}>
                  <div className="fw-bold mb-2" style={{ color: 'var(--success)', fontSize: 'var(--text-lg)' }}>STORE</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Copy data from register to memory
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 rounded-3 text-center" style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}>
                  <div className="fw-bold mb-2" style={{ color: 'var(--secondary)', fontSize: 'var(--text-lg)' }}>MOVE</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Copy data between registers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-vh-100" style={{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)'
    }}>
      {/* Hero Header */}
      <div className="position-relative" style={{
        background: 'var(--gradient-dark)',
        overflow: 'hidden'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(0, 168, 132, 0.15) 0%, transparent 50%)'
        }}></div>
        <div className="container-fluid py-5 position-relative">
          <div className="row justify-content-center w-100 m-0 p-0">
            <div className="col-12 col-lg-10">
              <div className="text-center text-white py-4">
                <div className="d-flex justify-content-center mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <CpuIcon size={40} className="text-white" />
                  </div>
                </div>
                <h1 className="display-5 fw-bold mb-3" style={{ fontSize: 'var(--text-4xl)' }}>
                  ⚙️ Chapter 4: CPU Architecture
                </h1>
                <p className="lead mb-4" style={{
                  fontSize: 'var(--text-lg)',
                  opacity: 0.9
                }}>
                  Complete guide to Central Processing Unit components, operations, and architecture
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <span className="badge px-3 py-2" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Server size={16} className="me-2" />
                    4 Main Components
                  </span>
                  <span className="badge px-3 py-2" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Terminal size={16} className="me-2" />
                    50+ Operations
                  </span>
                  <span className="badge px-3 py-2" style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Zap size={16} className="me-2" />
                    Technical Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5">
        <div className="row container-fluid justify-content-center w-100 p-0 m-0">
          <div className="col-12 col-lg-10">
            {/* CPU Overview */}
            <div className="card border-0 mb-5" style={{
              borderRadius: 'var(--border-radius-lg)',
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="fw-bold mb-4" style={{
                  color: 'var(--text-primary)',
                  fontSize: 'var(--text-2xl)'
                }}>
                  🚀 CPU Fundamentals
                </h3>
                <div className="row">
                  <div className="col-md-6">
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--text-lg)',
                      lineHeight: '1.7'
                    }}>
                      The <strong style={{ color: 'var(--primary)' }}>Central Processing Unit (CPU)</strong> is the electronic circuitry within a computer that carries out the instructions of a computer program by performing basic arithmetic, logical, control, and input/output operations.
                    </p>
                    <div className="mt-4">
                      <h5 style={{ color: 'var(--primary-blue)', marginBottom: 'var(--space-3)' }}>
                        Key Features:
                      </h5>
                      <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--space-4)' }}>
                        <li>Executes program instructions</li>
                        <li>Performs arithmetic and logical operations</li>
                        <li>Controls data flow between components</li>
                        <li>Manages memory access</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 rounded-3" style={{
                      background: 'linear-gradient(135deg, rgba(0, 168, 132, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
                      border: '1px solid var(--border-color)'
                    }}>
                      <h5 style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)' }}>
                        🏆 CPU Performance Factors
                      </h5>
                      <div className="row g-2">
                        <div className="col-6">
                          <div className="p-2 rounded-2" style={{ background: 'var(--bg-card)' }}>
                            <div className="fw-bold" style={{ color: 'var(--primary)', fontSize: 'var(--text-sm)' }}>Clock Speed</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>Operations per second</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-2 rounded-2" style={{ background: 'var(--bg-card)' }}>
                            <div className="fw-bold" style={{ color: 'var(--success)', fontSize: 'var(--text-sm)' }}>Core Count</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>Parallel processing</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-2 rounded-2" style={{ background: 'var(--bg-card)' }}>
                            <div className="fw-bold" style={{ color: 'var(--primary-blue)', fontSize: 'var(--text-sm)' }}>Cache Size</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>Fast memory access</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-2 rounded-2" style={{ background: 'var(--bg-card)' }}>
                            <div className="fw-bold" style={{ color: 'var(--secondary)', fontSize: 'var(--text-sm)' }}>Architecture</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)' }}>Instruction efficiency</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Sections */}
            {sections.map((section, index) => (
              <div key={section.id} className="card border-0 mb-5" style={{
                borderRadius: 'var(--border-radius-lg)',
                backgroundColor: 'var(--bg-card)',
                boxShadow: 'var(--shadow-md)',
                borderLeft: `4px solid ${section.color}`,
                transition: 'var(--transition-base)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}>
                <div className="card-header border-0 p-4" style={{
                  backgroundColor: section.bgColor,
                  borderTopLeftRadius: 'var(--border-radius-lg)',
                  borderTopRightRadius: 'var(--border-radius-lg)'
                }}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                      width: '56px',
                      height: '56px',
                      background: section.color,
                      color: 'white'
                    }}>
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="fw-bold mb-1" style={{
                        color: section.color,
                        fontSize: 'var(--text-xl)'
                      }}>
                        {section.title}
                      </h3>
                      <p className="mb-0" style={{
                        color: 'var(--text-muted)',
                        fontSize: 'var(--text-sm)'
                      }}>
                        Section {index + 1} of {sections.length}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 p-md-5">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Summary */}
            <div className="card border-0" style={{
              borderRadius: 'var(--border-radius-lg)',
              background: 'var(--gradient-light)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="card-body p-4 p-md-5 text-center">
                <h3 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  🎯 CPU Summary
                </h3>
                <p className="mb-4" style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-lg)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  The CPU is a complex integration of the <strong style={{ color: 'var(--primary)' }}>Control Unit</strong>,
                  <strong style={{ color: 'var(--success)' }}> Arithmetic Logic Unit</strong>, and
                  <strong style={{ color: 'var(--secondary)' }}> Registers</strong> working together to execute instructions
                  at incredible speeds.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(0, 168, 132, 0.1)',
                    border: '1px solid rgba(0, 168, 132, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--primary)' }}>Fetch-Decode-Execute Cycle</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Basic CPU operation</div>
                  </div>
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(37, 99, 235, 0.1)',
                    border: '1px solid rgba(37, 99, 235, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Pipelining</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Parallel instruction processing</div>
                  </div>
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--success)' }}>Superscalar</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Multiple instructions per cycle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}