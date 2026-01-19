import React from "react";
import { 
  Cpu, Database, Zap, Clock, HardDrive, 
  MemoryStick, Server, Layers, Settings,
  Activity, Shield, Battery, RefreshCw,
  ArrowUpDown, FileStack, TrendingUp
} from "lucide-react";

export default function MemoryChapter() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Header */}
      <div className="position-relative bg-primary text-white overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
        }}></div>
        <div className="container py-5 position-relative">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="text-center py-4">
                <div className="d-flex justify-content-center mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center bg-white bg-opacity-10 border border-white border-opacity-20"
                    style={{ width: '80px', height: '80px', backdropFilter: 'blur(10px)' }}>
                    <Database size={40} className="text-white" />
                  </div>
                </div>
                <h1 className="display-5 fw-bold mb-3">
                  🧠 Computer Memory - Complete Guide
                </h1>
                <p className="lead mb-4 opacity-75">
                  Understanding Primary & Secondary Memory - RAM, ROM, Cache
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <span className="badge bg-white bg-opacity-10 px-3 py-2 border-0" style={{ backdropFilter: 'blur(10px)' }}>
                    <MemoryStick size={16} className="me-2" />
                    Primary Memory
                  </span>
                  <span className="badge bg-white bg-opacity-10 px-3 py-2 border-0" style={{ backdropFilter: 'blur(10px)' }}>
                    <HardDrive size={16} className="me-2" />
                    Secondary Memory
                  </span>
                  <span className="badge bg-white bg-opacity-10 px-3 py-2 border-0" style={{ backdropFilter: 'blur(10px)' }}>
                    <Zap size={16} className="me-2" />
                    Cache Memory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {/* Memory Definition */}
            <div className="card border-0 shadow-sm mb-5">
              <div className="card-body p-4 p-md-5">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary"
                      style={{ width: '120px', height: '120px' }}>
                      <Database size={48} />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h2 className="fw-bold mb-3">What is Computer Memory?</h2>
                    <p className="lead mb-4">
                      <strong>Computer Memory</strong> is the electronic storage space where data and instructions are stored for processing by the CPU. It acts as the brain's short-term and long-term memory for the computer system.
                    </p>
                    <div className="alert alert-primary">
                      <h5 className="alert-heading"><Zap className="me-2" />Key Role</h5>
                      <p className="mb-0">
                        <strong>Memory CPU aur storage ke beech bridge ka kaam karta hai.</strong> 
                        It temporarily holds data that the CPU needs for immediate processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Memory Hierarchy */}
            <div className="mb-5">
              <h2 className="fw-bold mb-4">📊 Memory Hierarchy</h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="memory-hierarchy">
                    <div className="d-flex flex-column align-items-center mb-4">
                      {/* CPU */}
                      <div className="hierarchy-level text-center mb-3">
                        <div className="level-box bg-primary text-white p-3 rounded-3 mb-2">
                          <Cpu size={24} className="mb-2" />
                          <div className="fw-bold">CPU</div>
                          <small>Fastest</small>
                        </div>
                        <div className="arrow-down"></div>
                      </div>
                      
                      {/* Register & Cache */}
                      <div className="d-flex justify-content-center gap-4 mb-3">
                        <div className="hierarchy-level text-center">
                          <div className="level-box bg-info bg-opacity-10 text-info p-3 rounded-3 mb-2">
                            <Activity size={20} className="mb-2" />
                            <div className="fw-bold">Registers</div>
                            <small>1-2 ns</small>
                          </div>
                          <div className="arrow-down"></div>
                        </div>
                        <div className="hierarchy-level text-center">
                          <div className="level-box bg-warning bg-opacity-10 text-warning p-3 rounded-3 mb-2">
                            <Zap size={20} className="mb-2" />
                            <div className="fw-bold">Cache</div>
                            <small>2-10 ns</small>
                          </div>
                          <div className="arrow-down"></div>
                        </div>
                      </div>
                      
                      {/* RAM */}
                      <div className="hierarchy-level text-center mb-3">
                        <div className="level-box bg-success bg-opacity-10 text-success p-3 rounded-3 mb-2">
                          <MemoryStick size={20} className="mb-2" />
                          <div className="fw-bold">RAM</div>
                          <small>10-100 ns</small>
                        </div>
                        <div className="arrow-down"></div>
                      </div>
                      
                      {/* Secondary Storage */}
                      <div className="hierarchy-level text-center">
                        <div className="level-box bg-secondary bg-opacity-10 text-secondary p-3 rounded-3">
                          <HardDrive size={20} className="mb-2" />
                          <div className="fw-bold">Secondary Storage</div>
                          <small>5-20 ms</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-muted mb-0">
                    <small>Speed decreases ↓ | Capacity increases ↑ | Cost per bit decreases ↓</small>
                  </p>
                </div>
              </div>
            </div>

            {/* Primary vs Secondary Memory */}
            <div className="mb-5">
              <h2 className="fw-bold mb-4">⚖️ Primary vs Secondary Memory</h2>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 border-start border-primary border-3">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 text-primary p-2 me-3">
                          <MemoryStick size={24} />
                        </div>
                        <h3 className="fw-bold mb-0 text-primary">Primary Memory</h3>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Also called:</strong> Main Memory / Internal Memory
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Volatile:</strong> Data lost when power off
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Speed:</strong> Very fast (nanoseconds)
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Capacity:</strong> Limited (GBs)
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Cost:</strong> Expensive per MB
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Examples:</strong> RAM, ROM, Cache
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 border-start border-secondary border-3">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="rounded-circle bg-secondary bg-opacity-10 text-secondary p-2 me-3">
                          <HardDrive size={24} />
                        </div>
                        <h3 className="fw-bold mb-0 text-secondary">Secondary Memory</h3>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Also called:</strong> Auxiliary Memory / External Memory
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Non-volatile:</strong> Data retained when power off
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Speed:</strong> Slow (milliseconds)
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Capacity:</strong> Large (TBs)
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Cost:</strong> Cheap per MB
                        </li>
                        <li className="list-group-item bg-transparent px-0">
                          <strong>Examples:</strong> HDD, SSD, USB, CD/DVD
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RAM Detailed Section */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="rounded-circle bg-success bg-opacity-10 text-success p-3">
                  <MemoryStick size={28} />
                </div>
                <div>
                  <h2 className="fw-bold mb-1">💾 RAM (Random Access Memory)</h2>
                  <p className="text-muted mb-0">The computer's working memory</p>
                </div>
              </div>

              <div className="row g-4">
                {/* Definition */}
                <div className="col-12">
                  <div className="card border-0 shadow-sm border-start border-success border-3">
                    <div className="card-body p-4">
                      <h4 className="fw-bold text-success mb-3">📝 Definition</h4>
                      <p>
                        <strong>RAM (Random Access Memory)</strong> is volatile primary memory that stores data and instructions 
                        temporarily while the computer is running. It allows <strong>read and write operations</strong> and provides 
                        fast access to the CPU.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How RAM Works */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3"><Settings className="me-2" /> How RAM Works</h5>
                      <div className="mb-3">
                        <h6>1. Data Loading</h6>
                        <p className="small mb-2">When you open a program, it loads from storage into RAM</p>
                      </div>
                      <div className="mb-3">
                        <h6>2. CPU Access</h6>
                        <p className="small mb-2">CPU reads data from RAM for processing</p>
                      </div>
                      <div className="mb-3">
                        <h6>3. Temporary Storage</h6>
                        <p className="small mb-2">RAM holds active programs and data</p>
                      </div>
                      <div>
                        <h6>4. Volatile Nature</h6>
                        <p className="small mb-0">Data erased when computer turns off</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Types of RAM */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3"><Layers className="me-2" /> Types of RAM</h5>
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>SRAM</strong>
                            <div className="small text-muted">Static RAM - Cache Memory</div>
                          </div>
                          <span className="badge bg-info">Fastest</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>DRAM</strong>
                            <div className="small text-muted">Dynamic RAM - Main Memory</div>
                          </div>
                          <span className="badge bg-primary">Common</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>SDRAM</strong>
                            <div className="small text-muted">Synchronous DRAM</div>
                          </div>
                          <span className="badge bg-success">Modern</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>DDR</strong>
                            <div className="small text-muted">Double Data Rate</div>
                          </div>
                          <span className="badge bg-warning">Current</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advantages & Disadvantages */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 border-success">
                    <div className="card-header bg-success bg-opacity-10 border-0">
                      <h5 className="fw-bold mb-0 text-success">✅ Advantages</h5>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li>Very fast access speed</li>
                        <li>Direct CPU access</li>
                        <li>Essential for multitasking</li>
                        <li>Improves system performance</li>
                        <li>Read/Write capability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 border-danger">
                    <div className="card-header bg-danger bg-opacity-10 border-0">
                      <h5 className="fw-bold mb-0 text-danger">❌ Disadvantages</h5>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li>Volatile (loses data when power off)</li>
                        <li>Limited capacity</li>
                        <li>Expensive compared to storage</li>
                        <li>Requires constant power refresh</li>
                        <li>Physical space constraints</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Exam Points */}
                <div className="col-12">
                  <div className="card border-0 shadow-sm bg-warning bg-opacity-10">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3">📝 Important Exam Points</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <ul>
                            <li>RAM is <strong>volatile memory</strong></li>
                            <li>Measured in <strong>GB (Gigabytes)</strong></li>
                            <li>Speed measured in <strong>MHz</strong></li>
                            <li>DDR4 is current standard</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li>More RAM = Better multitasking</li>
                            <li>Minimum 8GB recommended today</li>
                            <li>RAM speed affects gaming/editing</li>
                            <li>Dual-channel improves performance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROM Detailed Section */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="rounded-circle bg-primary bg-opacity-10 text-primary p-3">
                  <Shield size={28} />
                </div>
                <div>
                  <h2 className="fw-bold mb-1">🛡️ ROM (Read Only Memory)</h2>
                  <p className="text-muted mb-0">Permanent firmware storage</p>
                </div>
              </div>

              <div className="row g-4">
                {/* Definition */}
                <div className="col-12">
                  <div className="card border-0 shadow-sm border-start border-primary border-3">
                    <div className="card-body p-4">
                      <h4 className="fw-bold text-primary mb-3">📝 Definition</h4>
                      <p>
                        <strong>ROM (Read Only Memory)</strong> is non-volatile primary memory that stores permanent data and 
                        instructions. It contains firmware that <strong>cannot be modified</strong> during normal computer 
                        operation and is essential for booting up the system.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How ROM Works */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3"><Settings className="me-2" /> How ROM Works</h5>
                      <div className="mb-3">
                        <h6>1. Manufacturing</h6>
                        <p className="small mb-2">Data is written during manufacturing process</p>
                      </div>
                      <div className="mb-3">
                        <h6>2. Boot Process</h6>
                        <p className="small mb-2">ROM contains BIOS/UEFI for startup</p>
                      </div>
                      <div className="mb-3">
                        <h6>3. Read-Only</h6>
                        <p className="small mb-2">CPU can only read from ROM</p>
                      </div>
                      <div>
                        <h6>4. Permanent Storage</h6>
                        <p className="small mb-0">Data remains even without power</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Types of ROM */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3"><Layers className="me-2" /> Types of ROM</h5>
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>MASK ROM</strong>
                            <div className="small text-muted">Factory programmed, cannot change</div>
                          </div>
                          <span className="badge bg-secondary">Oldest</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>PROM</strong>
                            <div className="small text-muted">Programmable ROM - one time</div>
                          </div>
                          <span className="badge bg-primary">Basic</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>EPROM</strong>
                            <div className="small text-muted">Erasable PROM with UV light</div>
                          </div>
                          <span className="badge bg-info">Reusable</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>EEPROM</strong>
                            <div className="small text-muted">Electrically Erasable PROM</div>
                          </div>
                          <span className="badge bg-success">Modern</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advantages & Disadvantages */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 border-primary">
                    <div className="card-header bg-primary bg-opacity-10 border-0">
                      <h5 className="fw-bold mb-0 text-primary">✅ Advantages</h5>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li>Non-volatile (permanent storage)</li>
                        <li>Cannot be accidentally modified</li>
                        <li>Essential for boot process</li>
                        <li>More reliable than RAM</li>
                        <li>Contains critical system data</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 border-danger">
                    <div className="card-header bg-danger bg-opacity-10 border-0">
                      <h5 className="fw-bold mb-0 text-danger">❌ Disadvantages</h5>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li>Read-only (cannot write data)</li>
                        <li>Slower than RAM</li>
                        <li>Limited capacity</li>
                        <li>Difficult to update</li>
                        <li>Expensive to manufacture</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Exam Points */}
                <div className="col-12">
                  <div className="card border-0 shadow-sm bg-primary bg-opacity-10">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3">📝 Important Exam Points</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <ul>
                            <li>ROM is <strong>non-volatile memory</strong></li>
                            <li>Contains <strong>BIOS/UEFI firmware</strong></li>
                            <li>Data is <strong>permanent</strong></li>
                            <li>Essential for <strong>boot process</strong></li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li>Types: PROM, EPROM, EEPROM</li>
                            <li>EEPROM = Electrically Erasable</li>
                            <li>Modern computers use UEFI not BIOS</li>
                            <li>ROM size typically 4-16 MB</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cache Memory Detailed Section */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="rounded-circle bg-warning bg-opacity-10 text-warning p-3">
                  <Zap size={28} />
                </div>
                <div>
                  <h2 className="fw-bold mb-1">⚡ Cache Memory</h2>
                  <p className="text-muted mb-0">Ultra-fast CPU memory</p>
                </div>
              </div>

              <div className="row g-4">
                {/* Definition */}
                <div className="col-12">
                  <div className="card border-0 shadow-sm border-start border-warning border-3">
                    <div className="card-body p-4">
                      <h4 className="fw-bold text-warning mb-3">📝 Definition</h4>
                      <p>
                        <strong>Cache Memory</strong> is a small, extremely fast type of volatile memory located 
                        inside or very close to the CPU. It stores <strong>frequently accessed data</strong> and 
                        instructions to reduce the time needed to access data from main memory (RAM).
                      </p>
                    </div>
                  </div>
                </div>

                {/* How Cache Works */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3"><Settings className="me-2" /> How Cache Works</h5>
                      <div className="mb-3">
                        <h6>1. CPU Request</h6>
                        <p className="small mb-2">CPU needs data from main memory</p>
                      </div>
                      <div className="mb-3">
                        <h6>2. Cache Check</h6>
                        <p className="small mb-2">First check if data is in cache</p>
                      </div>
                      <div className="mb-3">
                        <h6>3. Cache Hit/Miss</h6>
                        <p className="small mb-2">If found (hit) - fast access; If not (miss) - get from RAM</p>
                      </div>
                      <div>
                        <h6>4. Store in Cache</h6>
                        <p className="small mb-0">Frequently used data stored in cache</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cache Levels */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3"><Layers className="me-2" /> Cache Levels</h5>
                      <div className="d-flex flex-column gap-2">
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>L1 Cache</strong>
                            <div className="small text-muted">Inside CPU core (32-64 KB)</div>
                          </div>
                          <span className="badge bg-danger">Fastest</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>L2 Cache</strong>
                            <div className="small text-muted">Per core (256 KB - 1 MB)</div>
                          </div>
                          <span className="badge bg-warning">Fast</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>L3 Cache</strong>
                            <div className="small text-muted">Shared between cores (8-32 MB)</div>
                          </div>
                          <span className="badge bg-primary">Slower</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                          <div>
                            <strong>L4 Cache</strong>
                            <div className="small text-muted">eDRAM, some processors only</div>
                          </div>
                          <span className="badge bg-secondary">Rare</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advantages & Disadvantages */}
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 border-warning">
                    <div className="card-header bg-warning bg-opacity-10 border-0">
                      <h5 className="fw-bold mb-0 text-warning">✅ Advantages</h5>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li>Extremely fast access time</li>
                        <li>Reduces CPU idle time</li>
                        <li>Improves overall system performance</li>
                        <li>Reduces traffic to main memory</li>
                        <li>Essential for modern CPUs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 border-danger">
                    <div className="card-header bg-danger bg-opacity-10 border-0">
                      <h5 className="fw-bold mb-0 text-danger">❌ Disadvantages</h5>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li>Very expensive per MB</li>
                        <li>Limited capacity</li>
                        <li>Complex to implement</li>
                        <li>Consumes more power</li>
                        <li>Cache coherency issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Exam Points */}
                <div className="col-12">
                  <div className="card border-0 shadow-sm bg-warning bg-opacity-10">
                    <div className="card-body p-4">
                      <h5 className="fw-bold mb-3">📝 Important Exam Points</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <ul>
                            <li>Cache is <strong>SRAM</strong> (Static RAM)</li>
                            <li>Located <strong>inside CPU</strong></li>
                            <li>Speed measured in <strong>picoseconds</strong></li>
                            <li>L1 fastest but smallest</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li>Cache hit vs cache miss</li>
                            <li>More cache = better performance</li>
                            <li>Modern CPUs have 3 cache levels</li>
                            <li>Cache size affects gaming/editing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Memory Comparison Table */}
            <div className="mb-5">
              <h2 className="fw-bold mb-4">📊 Memory Comparison Table</h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Feature</th>
                          <th className="text-success">RAM</th>
                          <th className="text-primary">ROM</th>
                          <th className="text-warning">Cache</th>
                          <th className="text-secondary">HDD/SSD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Full Form</strong></td>
                          <td>Random Access Memory</td>
                          <td>Read Only Memory</td>
                          <td>Cache Memory</td>
                          <td>Hard Disk/Solid State</td>
                        </tr>
                        <tr>
                          <td><strong>Volatility</strong></td>
                          <td><span className="badge bg-danger">Volatile</span></td>
                          <td><span className="badge bg-success">Non-volatile</span></td>
                          <td><span className="badge bg-danger">Volatile</span></td>
                          <td><span className="badge bg-success">Non-volatile</span></td>
                        </tr>
                        <tr>
                          <td><strong>Speed</strong></td>
                          <td>Fast (10-100 ns)</td>
                          <td>Slow</td>
                          <td>Very Fast (1-10 ns)</td>
                          <td>Very Slow (5-20 ms)</td>
                        </tr>
                        <tr>
                          <td><strong>Capacity</strong></td>
                          <td>4-64 GB</td>
                          <td>4-16 MB</td>
                          <td>KB-MB</td>
                          <td>GB-TB</td>
                        </tr>
                        <tr>
                          <td><strong>Cost</strong></td>
                          <td>Expensive</td>
                          <td>Moderate</td>
                          <td>Very Expensive</td>
                          <td>Cheap</td>
                        </tr>
                        <tr>
                          <td><strong>Purpose</strong></td>
                          <td>Temporary data storage</td>
                          <td>Firmware storage</td>
                          <td>CPU data buffer</td>
                          <td>Permanent storage</td>
                        </tr>
                        <tr>
                          <td><strong>Access</strong></td>
                          <td>Read/Write</td>
                          <td>Read Only</td>
                          <td>Read/Write</td>
                          <td>Read/Write</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Working in PC */}
            <div className="mb-5">
              <h2 className="fw-bold mb-4">⚙️ How Memory Works in a Computer</h2>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div className="text-center">
                        <div className="rounded-circle bg-info bg-opacity-10 text-info d-inline-flex align-items-center justify-content-center mb-3"
                          style={{ width: '80px', height: '80px' }}>
                          <ArrowUpDown size={32} />
                        </div>
                        <h5>Data Flow Process</h5>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <ol className="mb-0">
                        <li className="mb-2">
                          <strong>Boot Process:</strong> ROM (BIOS/UEFI) starts computer and loads OS from storage into RAM
                        </li>
                        <li className="mb-2">
                          <strong>Program Execution:</strong> When you open a program, it loads from storage (HDD/SSD) into RAM
                        </li>
                        <li className="mb-2">
                          <strong>CPU Processing:</strong> CPU accesses data from RAM via cache for faster processing
                        </li>
                        <li className="mb-2">
                          <strong>Temporary Storage:</strong> RAM holds active programs and data being processed
                        </li>
                        <li className="mb-2">
                          <strong>Save Operation:</strong> When you save a file, data moves from RAM to permanent storage
                        </li>
                        <li>
                          <strong>Shutdown:</strong> RAM clears, ROM retains firmware, storage keeps all files
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Revision */}
            <div className="card border-0 shadow-sm bg-light">
              <div className="card-body p-4">
                <h2 className="fw-bold mb-3">📖 Quick Revision Points</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h5 className="text-success">RAM</h5>
                      <ul className="small mb-0">
                        <li>Volatile memory</li>
                        <li>Read/Write capability</li>
                        <li>Temporary storage</li>
                        <li>Measured in GB</li>
                        <li>Essential for multitasking</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h5 className="text-primary">ROM</h5>
                      <ul className="small mb-0">
                        <li>Non-volatile memory</li>
                        <li>Read Only</li>
                        <li>Contains BIOS/UEFI</li>
                        <li>Permanent storage</li>
                        <li>Essential for booting</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h5 className="text-warning">Cache</h5>
                      <ul className="small mb-0">
                        <li>Fastest memory</li>
                        <li>Inside CPU</li>
                        <li>L1, L2, L3 levels</li>
                        <li>Reduces CPU wait time</li>
                        <li>Uses SRAM technology</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h5 className="text-secondary">Storage</h5>
                      <ul className="small mb-0">
                        <li>Non-volatile</li>
                        <li>High capacity</li>
                        <li>Slow speed</li>
                        <li>Permanent data storage</li>
                        <li>HDD, SSD, USB, etc.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-dark text-white py-4">
        <div className="container">
          <div className="text-center">
            <p className="mb-0">🧠 Computer Memory Chapter | Complete Guide | Ready for Exams</p>
            <small className="text-white-50">Primary & Secondary Memory | RAM | ROM | Cache</small>
          </div>
        </div>
      </div>

      <style>{`
        .memory-hierarchy .level-box {
          width: 120px;
          transition: all 0.3s ease;
        }
        .memory-hierarchy .level-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .arrow-down {
          width: 2px;
          height: 20px;
          background-color: var(--bs-primary);
          margin: 0 auto;
        }
        .card {
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-2px);
        }
        .table th {
          font-weight: 600;
          border-bottom: 2px solid #dee2e6;
        }
        .table td {
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
}