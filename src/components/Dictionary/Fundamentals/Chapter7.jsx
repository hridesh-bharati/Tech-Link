import React from "react";
import { 
  Monitor, Cpu, Layers, Shield, Settings, 
  Terminal, Smartphone, Database, Lock, 
  Cloud, Server, File, Users, Zap, Globe,
  MousePointer, Keyboard, Touchpad, Mouse, Eye, Command
} from "lucide-react";

export default function Chapter7() {
  const operatingSystems = [
    {
      name: "Windows",
      icon: <Monitor size={28} />,
      developer: "Microsoft",
      firstRelease: "1985",
      latestVersion: "Windows 11",
      kernelType: "Hybrid (Windows NT)",
      uiType: "Graphical (GUI)",
      description: "Most popular desktop OS with user-friendly interface",
      color: "var(--primary-blue)",
      features: ["GUI Interface", "DirectX Support", "Windows Store", "Cortana", "Windows Defender"]
    },
    {
      name: "Linux",
      icon: <Terminal size={28} />,
      developer: "Linus Torvalds & Community",
      firstRelease: "1991",
      latestVersion: "Kernel 6.x",
      kernelType: "Monolithic (Linux)",
      uiType: "CLI/GUI (Multiple DEs)",
      description: "Open-source, secure, and highly customizable OS",
      color: "var(--warning)",
      features: ["Open Source", "Terminal-based", "Package Managers", "Security", "Customization"]
    },
    {
      name: "macOS",
      icon: <Cpu size={28} />,
      developer: "Apple Inc.",
      firstRelease: "2001",
      latestVersion: "macOS Sonoma",
      kernelType: "Hybrid (XNU)",
      uiType: "Graphical (Aqua)",
      description: "Apple's proprietary OS known for stability and design",
      color: "var(--info)",
      features: ["Unix-based", "Metal API", "Continuity", "Time Machine", "Gatekeeper"]
    },
    {
      name: "Android",
      icon: <Smartphone size={28} />,
      developer: "Google & Open Handset Alliance",
      firstRelease: "2008",
      latestVersion: "Android 14",
      kernelType: "Monolithic (Linux)",
      uiType: "Touch-based GUI",
      description: "Most popular mobile OS based on Linux kernel",
      color: "var(--success)",
      features: ["Touch Interface", "Google Play", "Custom ROMs", "Widgets", "Multitasking"]
    },
    {
      name: "iOS",
      icon: <Smartphone size={28} />,
      developer: "Apple Inc.",
      firstRelease: "2007",
      latestVersion: "iOS 17",
      kernelType: "Hybrid (XNU)",
      uiType: "Touch-based GUI",
      description: "Apple's mobile OS for iPhone, iPad, and iPod Touch",
      color: "var(--secondary)",
      features: ["App Store", "Face ID", "iCloud", "Siri", "Security"]
    },
    {
      name: "Chrome OS",
      icon: <Globe size={28} />,
      developer: "Google",
      firstRelease: "2011",
      latestVersion: "ChromeOS 119",
      kernelType: "Monolithic (Linux)",
      uiType: "Web-based GUI",
      description: "Cloud-based OS running primarily web applications",
      color: "var(--danger)",
      features: ["Cloud-based", "Android Apps", "Fast Boot", "Security", "Google Integration"]
    }
  ];

  const osFunctions = [
    {
      title: "Process Management",
      icon: <Settings size={24} />,
      description: "Manages CPU allocation and execution of processes",
      details: "Scheduling, synchronization, deadlock handling",
      color: "var(--primary)"
    },
    {
      title: "Memory Management",
      icon: <Database size={24} />,
      description: "Controls and coordinates computer memory",
      details: "Allocation, paging, virtual memory, swapping",
      color: "var(--primary-blue)"
    },
    {
      title: "File Management",
      icon: <File size={24} />,
      description: "Manages file creation, deletion, and organization",
      details: "Directory structure, access control, storage",
      color: "var(--success)"
    },
    {
      title: "Device Management",
      icon: <Monitor size={24} />,
      description: "Controls all input/output devices",
      details: "Drivers, buffering, spooling, interrupts",
      color: "var(--warning)"
    },
    {
      title: "Security",
      icon: <Shield size={24} />,
      description: "Protects system and user data",
      details: "Authentication, encryption, firewalls, permissions",
      color: "var(--danger)"
    },
    {
      title: "User Interface",
      icon: <Users size={24} />,
      description: "Provides interface between user and hardware",
      details: "CLI, GUI, touch interface, voice commands",
      color: "var(--info)"
    }
  ];

  const osTypes = [
    {
      type: "Batch OS",
      description: "Processes jobs in batches without user interaction",
      examples: ["IBM OS/360", "UNIVAC EXEC"],
      useCase: "Payroll, bank statements",
      color: "var(--primary)"
    },
    {
      type: "Time-Sharing OS",
      description: "Allows multiple users to share computer resources",
      examples: ["UNIX", "Multics"],
      useCase: "Servers, mainframes",
      color: "var(--primary-blue)"
    },
    {
      type: "Distributed OS",
      description: "Manages group of independent computers as single system",
      examples: ["LOCUS", "Amoeba"],
      useCase: "Cloud computing, clusters",
      color: "var(--success)"
    },
    {
      type: "Network OS",
      description: "Provides capabilities to serve requests over network",
      examples: ["Windows Server", "Linux Server"],
      useCase: "File sharing, printers",
      color: "var(--warning)"
    },
    {
      type: "Real-Time OS",
      description: "Processes data as it comes in without buffer delays",
      examples: ["VxWorks", "QNX"],
      useCase: "Robotics, medical devices",
      color: "var(--danger)"
    },
    {
      type: "Mobile OS",
      description: "Designed specifically for mobile devices",
      examples: ["Android", "iOS"],
      useCase: "Smartphones, tablets",
      color: "var(--secondary)"
    }
  ];

  const kernelTypes = [
    {
      name: "Monolithic Kernel",
      description: "All OS services in kernel space",
      advantages: ["Fast performance", "Simple design"],
      disadvantages: ["Less secure", "Large size"],
      examples: ["Linux", "UNIX"],
      color: "var(--primary)"
    },
    {
      name: "Microkernel",
      description: "Minimal kernel with services in user space",
      advantages: ["More secure", "Modular"],
      disadvantages: ["Slower", "Complex design"],
      examples: ["Mach", "Minix"],
      color: "var(--success)"
    },
    {
      name: "Hybrid Kernel",
      description: "Combination of monolithic and microkernel",
      advantages: ["Balanced performance", "Flexible"],
      disadvantages: ["Complex", "Large memory"],
      examples: ["Windows NT", "macOS XNU"],
      color: "var(--primary-blue)"
    }
  ];

  // NEW: User Interface Types Section
  const interfaceTypes = [
    {
      name: "Graphical User Interface (GUI)",
      icon: <MousePointer size={28} />,
      description: "Visual interface using windows, icons, menus, and pointers",
      interaction: "Mouse, touchpad, touchscreen",
      characteristics: ["Visual elements", "Intuitive", "Resource intensive", "Easy to learn"],
      examples: ["Windows Desktop", "macOS Finder", "GNOME Desktop"],
      color: "var(--primary-blue)",
      advantages: [
        "User-friendly and intuitive",
        "No need to memorize commands",
        "Visual feedback",
        "Suitable for beginners"
      ],
      disadvantages: [
        "Requires more system resources",
        "Limited automation capabilities",
        "Can be slower for experts"
      ]
    },
    {
      name: "Command Line Interface (CLI)",
      icon: <Terminal size={28} />,
      description: "Text-based interface where users type commands",
      interaction: "Keyboard only",
      characteristics: ["Text commands", "Scriptable", "Lightweight", "Powerful"],
      examples: ["Linux Terminal", "Windows Command Prompt", "PowerShell"],
      color: "var(--warning)",
      advantages: [
        "Fast execution for experts",
        "Powerful scripting capabilities",
        "Low resource usage",
        "Remote access friendly"
      ],
      disadvantages: [
        "Steep learning curve",
        "No visual feedback",
        "Need to memorize commands",
        "Prone to typing errors"
      ]
    },
    {
      name: "Touch Interface",
      icon: <Touchpad size={28} />,
      description: "Direct manipulation through touch gestures",
      interaction: "Touchscreen, gestures",
      characteristics: ["Direct manipulation", "Gesture-based", "Mobile optimized", "Intuitive"],
      examples: ["iOS", "Android", "Windows Touch"],
      color: "var(--success)",
      advantages: [
        "Very intuitive and natural",
        "No additional hardware needed",
        "Portable and mobile-friendly",
        "Gesture controls"
      ],
      disadvantages: [
        "Limited precision",
        "Fingerprints on screen",
        "Can cause fatigue",
        "Limited for complex tasks"
      ]
    },
    {
      name: "Voice Interface",
      icon: <Command size={28} />,
      description: "Voice-controlled interface using speech recognition",
      interaction: "Voice commands",
      characteristics: ["Hands-free", "Accessible", "AI-powered", "Natural language"],
      examples: ["Siri", "Cortana", "Google Assistant", "Alexa"],
      color: "var(--info)",
      advantages: [
        "Hands-free operation",
        "Accessible for disabled users",
        "Natural interaction",
        "Fast for simple tasks"
      ],
      disadvantages: [
        "Privacy concerns",
        "Accuracy issues",
        "Background noise interference",
        "Limited command recognition"
      ]
    }
  ];

  const interfaceComparison = [
    {
      aspect: "Ease of Learning",
      gui: { rating: 5, text: "Very Easy" },
      cli: { rating: 2, text: "Difficult" },
      touch: { rating: 4, text: "Easy" },
      voice: { rating: 3, text: "Moderate" }
    },
    {
      aspect: "Resource Usage",
      gui: { rating: 1, text: "High" },
      cli: { rating: 5, text: "Very Low" },
      touch: { rating: 2, text: "Medium" },
      voice: { rating: 3, text: "Medium" }
    },
    {
      aspect: "Speed for Experts",
      gui: { rating: 3, text: "Moderate" },
      cli: { rating: 5, text: "Very Fast" },
      touch: { rating: 3, text: "Moderate" },
      voice: { rating: 2, text: "Slow" }
    },
    {
      aspect: "Automation Potential",
      gui: { rating: 2, text: "Limited" },
      cli: { rating: 5, text: "Excellent" },
      touch: { rating: 1, text: "Poor" },
      voice: { rating: 3, text: "Moderate" }
    },
    {
      aspect: "Accessibility",
      gui: { rating: 3, text: "Moderate" },
      cli: { rating: 1, text: "Poor" },
      touch: { rating: 4, text: "Good" },
      voice: { rating: 5, text: "Excellent" }
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
          background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
        }}></div>
        <div className="container py-5 position-relative">
          <div className="row justify-content-center">
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
                    <Layers size={40} className="text-white" />
                  </div>
                </div>
                <h1 className="display-5 fw-bold mb-3" style={{ fontSize: 'var(--text-4xl)' }}>
                  🪟 Chapter 7: Operating System
                </h1>
                <p className="lead mb-4" style={{ 
                  fontSize: 'var(--text-lg)',
                  opacity: 0.9 
                }}>
                  Complete guide to Operating Systems - The bridge between users and hardware
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Server size={16} className="me-2" />
                    6 Major OS
                  </span>
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Settings size={16} className="me-2" />
                    6 Core Functions
                  </span>
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <MousePointer size={16} className="me-2" />
                    4 Interface Types
                  </span>
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Cpu size={16} className="me-2" />
                    3 Kernel Types
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
            {/* OS Overview */}
            <div className="card border-0 mb-5" style={{
              borderRadius: 'var(--border-radius-lg)',
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="card-body p-4 p-md-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src="/assets/fundamentals/os.png"
                      alt="Operating System"
                      className="img-fluid rounded-3"
                      style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="fw-bold mb-3" style={{ 
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-2xl)'
                    }}>
                      What is an Operating System?
                    </h3>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--text-lg)',
                      lineHeight: '1.7'
                    }}>
                      An <strong style={{ color: 'var(--primary)' }}>Operating System (OS)</strong> is system software that acts as an interface between computer hardware and the user. It manages computer hardware, software resources, and provides common services for computer programs.
                    </p>
                    
                    <div className="mt-4 p-4 rounded-3" style={{
                      backgroundColor: 'rgba(0, 168, 132, 0.05)',
                      borderLeft: '4px solid var(--primary)'
                    }}>
                      <h5 style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)' }}>
                        <Shield size={20} className="me-2" />
                        Key Role
                      </h5>
                      <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                        <strong>Operating System user aur hardware ke beech bridge hota hai.</strong> 
                        It manages resources, provides security, and enables communication between hardware and software.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Interface Types Section */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--info)',
                  color: 'white'
                }}>
                  <MousePointer size={28} />
                </div>
                <div>
                  <h2 className="fw-bold mb-1" style={{ 
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-2xl)'
                  }}>
                    👥 User Interface (GUI/CUI)
                  </h2>
                  <p className="mb-0" style={{ 
                    color: 'var(--text-muted)',
                    fontSize: 'var(--text-sm)'
                  }}>
                    Different ways users interact with operating systems
                  </p>
                </div>
              </div>

              {/* Interface Types Cards */}
              <div className="row g-4 mb-5">
                {interfaceTypes.map((interfaceType, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-3">
                    <div className="card border-0 h-100" style={{
                      borderRadius: 'var(--border-radius-lg)',
                      backgroundColor: 'var(--bg-card)',
                      border: `2px solid ${interfaceType.color}`,
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'var(--transition-base)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    }}>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start justify-content-between mb-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                            width: '50px',
                            height: '50px',
                            background: interfaceType.color,
                            color: 'white'
                          }}>
                            {interfaceType.icon}
                          </div>
                          <span className="badge px-3 py-1" style={{
                            background: `${interfaceType.color}15`,
                            color: interfaceType.color,
                            fontSize: 'var(--text-xs)',
                            borderRadius: 'var(--border-radius-full)'
                          }}>
                            {interfaceType.interaction}
                          </span>
                        </div>
                        
                        <h5 className="fw-bold mb-2" style={{ 
                          color: interfaceType.color,
                          fontSize: 'var(--text-lg)'
                        }}>
                          {interfaceType.name}
                        </h5>
                        
                        <p className="mb-3" style={{ 
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-sm)'
                        }}>
                          {interfaceType.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="fw-semibold mb-2" style={{ 
                            color: 'var(--text-primary)',
                            fontSize: 'var(--text-xs)'
                          }}>
                            Characteristics:
                          </div>
                          <div className="d-flex flex-wrap gap-1">
                            {interfaceType.characteristics.slice(0, 3).map((char, idx) => (
                              <span key={idx} className="badge px-2 py-1" style={{
                                background: `${interfaceType.color}10`,
                                color: interfaceType.color,
                                fontSize: 'var(--text-xs)',
                                borderRadius: 'var(--border-radius-full)'
                              }}>
                                {char}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="fw-semibold mb-2" style={{ 
                            color: 'var(--text-primary)',
                            fontSize: 'var(--text-xs)'
                          }}>
                            Examples:
                          </div>
                          <div style={{ 
                            color: 'var(--text-muted)',
                            fontSize: 'var(--text-xs)'
                          }}>
                            {interfaceType.examples.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interface Comparison Table */}
              <div className="card border-0 mb-4" style={{
                borderRadius: 'var(--border-radius-lg)',
                backgroundColor: 'var(--bg-card)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div className="card-body p-4 p-md-5">
                  <h4 className="fw-bold mb-4" style={{ 
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-xl)'
                  }}>
                    📊 Interface Comparison
                  </h4>
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead>
                        <tr style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                          <th style={{ 
                            color: 'var(--primary-blue)',
                            fontWeight: '600',
                            padding: 'var(--space-4)',
                            borderTopLeftRadius: 'var(--border-radius-md)'
                          }}>Aspect</th>
                          <th style={{ 
                            color: 'var(--primary-blue)',
                            fontWeight: '600',
                            padding: 'var(--space-4)',
                            textAlign: 'center'
                          }}>
                            <MousePointer size={16} className="me-1" />
                            GUI
                          </th>
                          <th style={{ 
                            color: 'var(--warning)',
                            fontWeight: '600',
                            padding: 'var(--space-4)',
                            textAlign: 'center'
                          }}>
                            <Terminal size={16} className="me-1" />
                            CLI
                          </th>
                          <th style={{ 
                            color: 'var(--success)',
                            fontWeight: '600',
                            padding: 'var(--space-4)',
                            textAlign: 'center'
                          }}>
                            <Touchpad size={16} className="me-1" />
                            Touch
                          </th>
                          <th style={{ 
                            color: 'var(--info)',
                            fontWeight: '600',
                            padding: 'var(--space-4)',
                            textAlign: 'center',
                            borderTopRightRadius: 'var(--border-radius-md)'
                          }}>
                            <Command size={16} className="me-1" />
                            Voice
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {interfaceComparison.map((row, index) => (
                          <tr key={index} style={{ 
                            backgroundColor: index % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-card)',
                            borderBottom: '1px solid var(--border-color)'
                          }}>
                            <td style={{ 
                              padding: 'var(--space-4)',
                              color: 'var(--text-primary)',
                              fontWeight: '500'
                            }}>{row.aspect}</td>
                            
                            {/* GUI Column */}
                            <td style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                              <div className="d-flex flex-column align-items-center">
                                <div className="mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{
                                      color: i < row.gui.rating ? 'var(--primary-blue)' : 'var(--border-color)',
                                      fontSize: 'var(--text-sm)'
                                    }}>★</span>
                                  ))}
                                </div>
                                <div style={{ 
                                  color: 'var(--text-secondary)',
                                  fontSize: 'var(--text-xs)'
                                }}>{row.gui.text}</div>
                              </div>
                            </td>
                            
                            {/* CLI Column */}
                            <td style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                              <div className="d-flex flex-column align-items-center">
                                <div className="mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{
                                      color: i < row.cli.rating ? 'var(--warning)' : 'var(--border-color)',
                                      fontSize: 'var(--text-sm)'
                                    }}>★</span>
                                  ))}
                                </div>
                                <div style={{ 
                                  color: 'var(--text-secondary)',
                                  fontSize: 'var(--text-xs)'
                                }}>{row.cli.text}</div>
                              </div>
                            </td>
                            
                            {/* Touch Column */}
                            <td style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                              <div className="d-flex flex-column align-items-center">
                                <div className="mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{
                                      color: i < row.touch.rating ? 'var(--success)' : 'var(--border-color)',
                                      fontSize: 'var(--text-sm)'
                                    }}>★</span>
                                  ))}
                                </div>
                                <div style={{ 
                                  color: 'var(--text-secondary)',
                                  fontSize: 'var(--text-xs)'
                                }}>{row.touch.text}</div>
                              </div>
                            </td>
                            
                            {/* Voice Column */}
                            <td style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                              <div className="d-flex flex-column align-items-center">
                                <div className="mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{
                                      color: i < row.voice.rating ? 'var(--info)' : 'var(--border-color)',
                                      fontSize: 'var(--text-sm)'
                                    }}>★</span>
                                  ))}
                                </div>
                                <div style={{ 
                                  color: 'var(--text-secondary)',
                                  fontSize: 'var(--text-xs)'
                                }}>{row.voice.text}</div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Advantages & Disadvantages */}
              <div className="row g-4">
                {interfaceTypes.slice(0, 2).map((interfaceType, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="card border-0 h-100" style={{
                      borderRadius: 'var(--border-radius-lg)',
                      backgroundColor: 'var(--bg-card)',
                      border: `1px solid ${interfaceType.color}`,
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                            width: '40px',
                            height: '40px',
                            background: interfaceType.color,
                            color: 'white'
                          }}>
                            {interfaceType.icon}
                          </div>
                          <h5 className="fw-bold mb-0" style={{ 
                            color: interfaceType.color,
                            fontSize: 'var(--text-lg)'
                          }}>
                            {interfaceType.name}
                          </h5>
                        </div>
                        
                        <div className="row">
                          <div className="col-6">
                            <div className="mb-3">
                              <h6 style={{ 
                                color: 'var(--success)',
                                fontSize: 'var(--text-sm)',
                                fontWeight: '600'
                              }}>
                                ✅ Advantages
                              </h6>
                              <ul className="mb-0" style={{ 
                                paddingLeft: 'var(--space-4)',
                                fontSize: 'var(--text-xs)',
                                color: 'var(--text-secondary)'
                              }}>
                                {interfaceType.advantages.map((adv, idx) => (
                                  <li key={idx}>{adv}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="mb-3">
                              <h6 style={{ 
                                color: 'var(--danger)',
                                fontSize: 'var(--text-sm)',
                                fontWeight: '600'
                              }}>
                                ❌ Disadvantages
                              </h6>
                              <ul className="mb-0" style={{ 
                                paddingLeft: 'var(--space-4)',
                                fontSize: 'var(--text-xs)',
                                color: 'var(--text-secondary)'
                              }}>
                                {interfaceType.disadvantages.map((disadv, idx) => (
                                  <li key={idx}>{disadv}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 p-3 rounded-2" style={{
                          backgroundColor: `${interfaceType.color}10`,
                          borderLeft: `3px solid ${interfaceType.color}`
                        }}>
                          <div style={{ 
                            color: 'var(--text-primary)',
                            fontSize: 'var(--text-xs)',
                            fontWeight: '500'
                          }}>
                            <strong>Best For:</strong> {
                              interfaceType.name === 'Graphical User Interface (GUI)' 
                                ? 'Beginners, Desktop users, General computing'
                                : 'System administrators, Developers, Automation tasks'
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Operating Systems */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--primary)',
                  color: 'white'
                }}>
                  <Monitor size={28} />
                </div>
                <div>
                  <h2 className="fw-bold mb-1" style={{ 
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-2xl)'
                  }}>
                    🖥️ Popular Operating Systems
                  </h2>
                  <p className="mb-0" style={{ 
                    color: 'var(--text-muted)',
                    fontSize: 'var(--text-sm)'
                  }}>
                    Widely used operating systems across different platforms
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {operatingSystems.map((os, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 h-100" style={{
                      borderRadius: 'var(--border-radius-lg)',
                      backgroundColor: 'var(--bg-card)',
                      border: `1px solid var(--border-color)`,
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'var(--transition-base)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                      e.currentTarget.style.borderColor = os.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }}>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start justify-content-between mb-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                            width: '50px',
                            height: '50px',
                            background: os.color,
                            color: 'white'
                          }}>
                            {os.icon}
                          </div>
                          <span className="badge px-3 py-1" style={{
                            background: `${os.color}15`,
                            color: os.color,
                            fontSize: 'var(--text-xs)',
                            borderRadius: 'var(--border-radius-full)'
                          }}>
                            {os.latestVersion}
                          </span>
                        </div>
                        
                        <h5 className="fw-bold mb-2" style={{ 
                          color: os.color,
                          fontSize: 'var(--text-lg)'
                        }}>
                          {os.name}
                        </h5>
                        
                        <p className="mb-3" style={{ 
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-sm)'
                        }}>
                          {os.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>Developer:</span>
                            <span style={{ color: 'var(--text-primary)', fontSize: 'var(--text-xs)', fontWeight: '500' }}>
                              {os.developer}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>First Release:</span>
                            <span style={{ color: 'var(--text-primary)', fontSize: 'var(--text-xs)', fontWeight: '500' }}>
                              {os.firstRelease}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>Kernel Type:</span>
                            <span style={{ color: 'var(--text-primary)', fontSize: 'var(--text-xs)', fontWeight: '500' }}>
                              {os.kernelType}
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="fw-semibold mb-2" style={{ 
                            color: 'var(--text-primary)',
                            fontSize: 'var(--text-xs)'
                          }}>
                            Key Features:
                          </div>
                          <div className="d-flex flex-wrap gap-1">
                            {os.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="badge px-2 py-1" style={{
                                background: `${os.color}10`,
                                color: os.color,
                                fontSize: 'var(--text-xs)',
                                borderRadius: 'var(--border-radius-full)'
                              }}>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OS Functions */}
            <div className="mb-5">
              <h3 className="fw-bold mb-4" style={{ 
                color: 'var(--text-primary)',
                fontSize: 'var(--text-2xl)'
              }}>
                ⚙️ Functions of Operating System
              </h3>
              
              <div className="row g-4">
                {osFunctions.map((func, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 h-100" style={{
                      borderRadius: 'var(--border-radius-lg)',
                      backgroundColor: 'var(--bg-card)',
                      border: `1px solid ${func.color}`,
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start gap-3 mb-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{
                            width: '48px',
                            height: '48px',
                            background: func.color,
                            color: 'white'
                          }}>
                            {func.icon}
                          </div>
                          <div>
                            <h5 className="fw-bold mb-1" style={{ 
                              color: func.color,
                              fontSize: 'var(--text-lg)'
                            }}>
                              {func.title}
                            </h5>
                            <p className="mb-0" style={{ 
                              color: 'var(--text-secondary)',
                              fontSize: 'var(--text-sm)'
                            }}>
                              {func.description}
                            </p>
                          </div>
                        </div>
                        
                        <div style={{ 
                          color: 'var(--text-muted)',
                          fontSize: 'var(--text-xs)',
                          paddingTop: 'var(--space-3)',
                          borderTop: '1px solid var(--border-color)'
                        }}>
                          <strong>Details:</strong> {func.details}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OS Types */}
            <div className="mb-5">
              <h3 className="fw-bold mb-4" style={{ 
                color: 'var(--text-primary)',
                fontSize: 'var(--text-2xl)'
              }}>
                📊 Types of Operating Systems
              </h3>
              
              <div className="row g-4">
                {osTypes.map((type, index) => (
                  <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 h-100" style={{
                      borderRadius: 'var(--border-radius-lg)',
                      backgroundColor: 'var(--bg-card)',
                      border: `1px solid var(--border-color)`,
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <div className="card-body p-4">
                        <h5 className="fw-bold mb-2" style={{ 
                          color: type.color,
                          fontSize: 'var(--text-lg)'
                        }}>
                          {type.type}
                        </h5>
                        
                        <p className="mb-3" style={{ 
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-sm)'
                        }}>
                          {type.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="fw-semibold mb-1" style={{ 
                            color: 'var(--text-primary)',
                            fontSize: 'var(--text-xs)'
                          }}>
                            Examples:
                          </div>
                          <div className="d-flex flex-wrap gap-1">
                            {type.examples.map((example, idx) => (
                              <span key={idx} className="badge px-2 py-1" style={{
                                background: `${type.color}10`,
                                color: type.color,
                                fontSize: 'var(--text-xs)',
                                borderRadius: 'var(--border-radius-full)'
                              }}>
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div style={{ 
                          color: 'var(--text-muted)',
                          fontSize: 'var(--text-xs)'
                        }}>
                          <strong>Use Case:</strong> {type.useCase}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kernel Types Comparison */}
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
                  🧠 Kernel Types Comparison
                </h3>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr style={{ backgroundColor: 'rgba(0, 168, 132, 0.1)' }}>
                        <th style={{ 
                          color: 'var(--primary)',
                          fontWeight: '600',
                          padding: 'var(--space-4)',
                          borderTopLeftRadius: 'var(--border-radius-md)'
                        }}>Kernel Type</th>
                        <th style={{ 
                          color: 'var(--primary)',
                          fontWeight: '600',
                          padding: 'var(--space-4)'
                        }}>Description</th>
                        <th style={{ 
                          color: 'var(--primary)',
                          fontWeight: '600',
                          padding: 'var(--space-4)'
                        }}>Advantages</th>
                        <th style={{ 
                          color: 'var(--primary)',
                          fontWeight: '600',
                          padding: 'var(--space-4)',
                          borderTopRightRadius: 'var(--border-radius-md)'
                        }}>Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kernelTypes.map((kernel, index) => (
                        <tr key={index} style={{ 
                          backgroundColor: index % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-card)',
                          borderBottom: '1px solid var(--border-color)'
                        }}>
                          <td style={{ 
                            padding: 'var(--space-4)',
                            color: kernel.color,
                            fontWeight: '600'
                          }}>{kernel.name}</td>
                          <td style={{ 
                            padding: 'var(--space-4)',
                            color: 'var(--text-secondary)'
                          }}>{kernel.description}</td>
                          <td style={{ 
                            padding: 'var(--space-4)',
                            color: 'var(--text-secondary)'
                          }}>
                            <ul className="mb-0" style={{ paddingLeft: 'var(--space-4)' }}>
                              {kernel.advantages.map((adv, idx) => (
                                <li key={idx} style={{ fontSize: 'var(--text-sm)' }}>{adv}</li>
                              ))}
                            </ul>
                          </td>
                          <td style={{ 
                            padding: 'var(--space-4)',
                            color: 'var(--text-secondary)'
                          }}>
                            {kernel.examples.join(', ')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* OS Evolution Timeline */}
            <div className="mb-5">
              <h3 className="fw-bold mb-4" style={{ 
                color: 'var(--text-primary)',
                fontSize: 'var(--text-2xl)'
              }}>
                📅 OS Evolution Timeline
              </h3>
              
              <div className="p-4 rounded-3" style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="text-center p-3">
                      <div className="fw-bold mb-2" style={{ color: 'var(--primary)', fontSize: 'var(--text-lg)' }}>1950s</div>
                      <div style={{ color: 'var(--text-secondary)' }}>Batch Processing Systems</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center p-3">
                      <div className="fw-bold mb-2" style={{ color: 'var(--primary-blue)', fontSize: 'var(--text-lg)' }}>1960s</div>
                      <div style={{ color: 'var(--text-secondary)' }}>Time-Sharing Systems</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center p-3">
                      <div className="fw-bold mb-2" style={{ color: 'var(--success)', fontSize: 'var(--text-lg)' }}>1970s-80s</div>
                      <div style={{ color: 'var(--text-secondary)' }}>Personal Computers</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center p-3">
                      <div className="fw-bold mb-2" style={{ color: 'var(--warning)', fontSize: 'var(--text-lg)' }}>1990s-Present</div>
                      <div style={{ color: 'var(--text-secondary)' }}>GUI & Mobile OS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="card border-0" style={{
              borderRadius: 'var(--border-radius-lg)',
              background: 'var(--gradient-light)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="card-body p-4 p-md-5 text-center">
                <h3 className="fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  🎯 Chapter Summary
                </h3>
                <p className="mb-4" style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-lg)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  The Operating System is the most important software that runs on a computer. 
                  It manages computer hardware and software resources, and provides common services for computer programs.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(0, 168, 132, 0.1)',
                    border: '1px solid rgba(0, 168, 132, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--primary)' }}>Resource Manager</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Manages CPU, Memory, I/O</div>
                  </div>
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(37, 99, 235, 0.1)',
                    border: '1px solid rgba(37, 99, 235, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--primary-blue)' }}>User Interface</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>GUI, CLI, Touch, Voice</div>
                  </div>
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--success)' }}>Platform</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Runs applications</div>
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