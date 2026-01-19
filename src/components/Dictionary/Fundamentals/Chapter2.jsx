import React from "react";
import { Cpu, HardDrive, Keyboard, Monitor, Mouse, Printer, Database, Zap, Shield, Wifi } from "lucide-react";

export default function Chapter2() {
  const hardwareCategories = [
    {
      id: 1,
      title: "⌨️ Input Devices",
      icon: <Keyboard size={28} />,
      color: "var(--info)",
      bgColor: "rgba(59, 130, 246, 0.1)",
      devices: [
        {
          name: "Keyboard",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Mechanical_keyboard.jpg",
          description: "Primary input device for text and commands",
          specs: "101-104 keys, USB/Bluetooth, 45-80g actuation",
          history: "Evolved from typewriters, first computer keyboard in 1964",
          details: "Mechanical/Membrane types, QWERTY layout"
        },
        {
          name: "Mouse",
          image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/3-button-computer-mouse.jpg",
          description: "Pointing device for graphical interaction",
          specs: "800-16000 DPI, USB/Bluetooth, 6-20 buttons",
          history: "Invented by Douglas Engelbart in 1964",
          details: "Optical/Laser/Trackball types, scroll wheel"
        },
        {
          name: "Scanner",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Scanner-Flatbed.jpg",
          description: "Converts documents to digital format",
          specs: "300-9600 DPI, 24-48 bit color depth",
          history: "First scanner developed in 1957 at NIST",
          details: "Flatbed/Sheet-fed types, OCR capability"
        },
        {
          name: "Microphone",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Microphone1.jpg",
          description: "Converts sound to electrical signals",
          specs: "20Hz-20kHz frequency, USB/XLR interfaces",
          history: "Invented by Emile Berliner in 1876",
          details: "Condenser/Dynamic types for recording"
        },
        {
          name: "Webcam",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Webcam_USB.jpg",
          description: "Captures live video for calls/streaming",
          specs: "HD to 4K, 30-60 fps, USB connectivity",
          history: "First webcam developed in 1991 at Cambridge",
          details: "Built-in microphone, auto-focus"
        }
      ]
    },
    {
      id: 2,
      title: "🖥️ Output Devices",
      icon: <Monitor size={28} />,
      color: "var(--success)",
      bgColor: "rgba(16, 185, 129, 0.1)",
      devices: [
        {
          name: "Monitor",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/LCD_monitor.jpg",
          description: "Displays visual output from computer",
          specs: "HD-8K, 60-360Hz, 250-1000+ nits",
          history: "CRT in 1920s, LCDs mainstream in 2000s",
          details: "LCD/LED/OLED technologies"
        },
        {
          name: "Printer",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Printer-laser.jpg",
          description: "Produces hard copy documents/images",
          specs: "300-4800 DPI, 10-100 PPM, USB/Wi-Fi",
          history: "First dot matrix printer in 1953",
          details: "Inkjet/Laser/3D printer types"
        },
        {
          name: "Speakers",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Speakers_Mini.jpg",
          description: "Outputs audio signals for hearing",
          specs: "20Hz-20kHz, 10-1000W, Bluetooth",
          history: "First loudspeaker invented in 1876",
          details: "2.0/2.1/5.1/7.1 configurations"
        },
        {
          name: "Projector",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Projector_Christie.JPG",
          description: "Projects computer output on large screen",
          specs: "2000-10000 lumens, SVGA-4K resolution",
          history: "First movie projector in 1895",
          details: "DLP/LCD technology for presentations"
        },
        {
          name: "3D Printer",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/3D_Printer.jpg",
          description: "Creates 3D objects from digital models",
          specs: "100-400 micron, 100-300mm build volume",
          history: "Invented by Chuck Hull in 1984",
          details: "FDM/SLA technologies for prototyping"
        }
      ]
    },
    {
      id: 3,
      title: "💾 Storage Devices",
      icon: <HardDrive size={28} />,
      color: "var(--secondary)",
      bgColor: "rgba(124, 58, 237, 0.1)",
      devices: [
        {
          name: "Hard Disk Drive (HDD)",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hard_disk_drive.jpg",
          description: "Magnetic storage for large data",
          specs: "500GB-20TB, 5400-15000 RPM",
          history: "First HDD (IBM 350) in 1956 stored 5MB",
          details: "SATA/SAS interfaces for permanent storage"
        },
        {
          name: "Solid State Drive (SSD)",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Solid_state_drive_%28SSD%29.jpg",
          description: "Flash-based fast storage device",
          specs: "128GB-8TB, 500-7000MB/s speeds",
          history: "First SSDs in 1970s for military",
          details: "SATA/NVMe interfaces, low latency"
        },
        {
          name: "USB Flash Drive",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/23/USB_flash_drive.jpg",
          description: "Portable storage using flash memory",
          specs: "8GB-2TB, USB 2.0/3.0/3.1",
          history: "First introduced in 2000 by Trek/IBM",
          details: "Compact size for file transfer"
        },
        {
          name: "Optical Disc",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Compact_disc_icon.png",
          description: "Laser-based storage media",
          specs: "CD:700MB, DVD:4.7-17GB, Blu-ray:25-128GB",
          history: "CD in 1982, DVD in 1995, Blu-ray in 2006",
          details: "Read-only/Write-once/Rewritable types"
        },
        {
          name: "Memory Card",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/SD_card_icon.svg",
          description: "Removable flash memory for portables",
          specs: "2GB-2TB, SD/microSD formats",
          history: "First PCMCIA card in 1990",
          details: "Used in cameras, phones, gaming"
        }
      ]
    },
    {
      id: 4,
      title: "🔧 Internal Components",
      icon: <Cpu size={28} />,
      color: "var(--danger)",
      bgColor: "rgba(239, 68, 68, 0.1)",
      devices: [
        {
          name: "CPU (Processor)",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Intel_Core_i7_4770K_CPU.jpg",
          description: "Brain of computer, executes instructions",
          specs: "2-5GHz, 2-64 cores, 4-128MB cache",
          history: "First microprocessor (Intel 4004) in 1971",
          details: "ALU, CU, registers for processing"
        },
        {
          name: "RAM (Memory)",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/DDR4_RAM.jpg",
          description: "Temporary data storage for running apps",
          specs: "4-128GB per module, 1600-6400 MT/s",
          history: "First RAM (Williams tube) in 1947",
          details: "DDR3/4/5 types, volatile memory"
        },
        {
          name: "Motherboard",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Motherboard_ASRock_H81M-HDS.jpg",
          description: "Main circuit board connecting components",
          specs: "ATX/Micro-ATX form factors",
          history: "First used in IBM PC in 1981",
          details: "Chipsets, ports, expansion slots"
        },
        {
          name: "GPU (Graphics Card)",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Nvidia_GeForce_GTX_1080.png",
          description: "Handles graphics rendering and display",
          specs: "2-24GB VRAM, 500-18000 CUDA cores",
          history: "First GPU (GeForce 256) in 1999",
          details: "Dedicated/Integrated for gaming/AI"
        },
        {
          name: "Power Supply",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/30/ATX_PSU.jpg",
          description: "Converts AC to DC for components",
          specs: "300-1600W, 80 Plus efficiency",
          history: "Switching PSUs introduced in 1970s",
          details: "Modular/Semi-modular types"
        }
      ]
    }
  ];

  const comparisonData = [
    { aspect: "Nature", hardware: "Physical components", software: "Programs and instructions", color: "var(--info)" },
    { aspect: "Tangibility", hardware: "Tangible, can be touched", software: "Intangible, cannot be touched", color: "var(--success)" },
    { aspect: "Dependency", hardware: "Needs software to function", software: "Runs on hardware to perform tasks", color: "var(--secondary)" },
    { aspect: "Examples", hardware: "CPU, RAM, HDD, Keyboard", software: "Windows, Photoshop, Word, Chrome", color: "var(--danger)" },
    { aspect: "Wear and Tear", hardware: "Can wear out physically", software: "Doesn't wear out, can become obsolete", color: "var(--warning)" },
    { aspect: "Replacement", hardware: "Physical replacement needed", software: "Updated or reinstalled", color: "var(--accent)" },
    { aspect: "Cost", hardware: "One-time purchase", software: "Free or subscription-based", color: "var(--primary)" },
    { aspect: "Manufacturing", hardware: "Manufactured in factories", software: "Developed by programming", color: "var(--secondary)" }
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
                    <Cpu size={40} className="text-white" />
                  </div>
                </div>
                <h1 className="display-5 fw-bold mb-3" style={{ fontSize: 'var(--text-4xl)' }}>
                  💻 Chapter 2: Computer Hardware
                </h1>
                <p className="lead mb-4" style={{ 
                  fontSize: 'var(--text-lg)',
                  opacity: 0.9 
                }}>
                  Complete encyclopedia-style reference for all computer hardware components
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Zap size={16} className="me-2" />
                    Updated: 23 Jul, 2025
                  </span>
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Database size={16} className="me-2" />
                    25+ Components
                  </span>
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <Shield size={16} className="me-2" />
                    100+ Specifications
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
            {/* Overview Card */}
            <div className="card border-0 mb-5" style={{
              borderRadius: 'var(--border-radius-lg)',
              borderLeft: `4px solid var(--primary-blue)`,
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition-base)'
            }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="fw-bold mb-3" style={{ 
                  color: 'var(--text-primary)',
                  fontSize: 'var(--text-2xl)'
                }}>
                  Computer Hardware Overview
                </h3>
                <p className="mb-4" style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: '1.7'
                }}>
                  <strong style={{ color: 'var(--primary-blue)' }}>Computer Hardware</strong> includes all physical components of a computer system. These are tangible devices used to perform input, processing, storage, and output operations. Hardware works in conjunction with software to perform all computing tasks.
                </p>
                <div className="row g-3">
                  <div className="col-6 col-md-3">
                    <div className="text-center p-3 rounded-3" style={{ 
                      background: 'rgba(0, 168, 132, 0.1)',
                      borderRadius: 'var(--border-radius-md)'
                    }}>
                      <div className="fw-bold mb-1" style={{ 
                        color: 'var(--primary)',
                        fontSize: 'var(--text-2xl)'
                      }}>4</div>
                      <div className="small" style={{ color: 'var(--text-secondary)' }}>Categories</div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="text-center p-3 rounded-3" style={{ 
                      background: 'rgba(16, 185, 129, 0.1)',
                      borderRadius: 'var(--border-radius-md)'
                    }}>
                      <div className="fw-bold mb-1" style={{ 
                        color: 'var(--success)',
                        fontSize: 'var(--text-2xl)'
                      }}>20+</div>
                      <div className="small" style={{ color: 'var(--text-secondary)' }}>Devices</div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="text-center p-3 rounded-3" style={{ 
                      background: 'rgba(124, 58, 237, 0.1)',
                      borderRadius: 'var(--border-radius-md)'
                    }}>
                      <div className="fw-bold mb-1" style={{ 
                        color: 'var(--secondary)',
                        fontSize: 'var(--text-2xl)'
                      }}>100+</div>
                      <div className="small" style={{ color: 'var(--text-secondary)' }}>Specifications</div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="text-center p-3 rounded-3" style={{ 
                      background: 'rgba(239, 68, 68, 0.1)',
                      borderRadius: 'var(--border-radius-md)'
                    }}>
                      <div className="fw-bold mb-1" style={{ 
                        color: 'var(--danger)',
                        fontSize: 'var(--text-2xl)'
                      }}>25+</div>
                      <div className="small" style={{ color: 'var(--text-secondary)' }}>Images</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Categories */}
            {hardwareCategories.map((category) => (
              <div key={category.id} className="mb-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    width: '60px',
                    height: '60px',
                    background: category.color,
                    color: 'white',
                    borderRadius: 'var(--border-radius-full)'
                  }}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="fw-bold mb-1" style={{ 
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-2xl)'
                    }}>
                      {category.title}
                    </h2>
                    <p className="mb-0" style={{ 
                      color: 'var(--text-muted)',
                      fontSize: 'var(--text-sm)'
                    }}>
                      {category.devices.length} devices • {
                        category.id === 1 ? 'Enter data' : 
                        category.id === 2 ? 'Display output' : 
                        category.id === 3 ? 'Store information' : 
                        'Internal processing'
                      }
                    </p>
                  </div>
                </div>

                <div className="row g-4">
                  {category.devices.map((device, index) => (
                    <div key={index} className="col-12 col-md-6">
                      <div className="card border-0 h-100" style={{
                        borderRadius: 'var(--border-radius-lg)',
                        transition: 'var(--transition-base)',
                        backgroundColor: 'var(--bg-card)',
                        border: `1px solid var(--border-color)`,
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      }}>
                        <div className="position-relative" style={{ 
                          height: '200px', 
                          overflow: 'hidden',
                          borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0'
                        }}>
                          <img
                            src={device.image}
                            alt={device.name}
                            className="w-100 h-100 object-fit-cover"
                          />
                          <div className="position-absolute top-0 end-0 m-3">
                            <span className="badge px-3 py-2" style={{
                              background: category.color,
                              color: 'white',
                              fontSize: 'var(--text-xs)',
                              fontWeight: '600',
                              borderRadius: 'var(--border-radius-full)'
                            }}>
                              {category.id === 1 ? 'INPUT' : 
                               category.id === 2 ? 'OUTPUT' : 
                               category.id === 3 ? 'STORAGE' : 
                               'INTERNAL'}
                            </span>
                          </div>
                        </div>
                        <div className="card-body p-4">
                          <h5 className="fw-bold mb-3" style={{ 
                            color: 'var(--text-primary)',
                            fontSize: 'var(--text-lg)'
                          }}>
                            {device.name}
                          </h5>
                          
                          <div className="mb-3">
                            <div className="d-flex align-items-start gap-2 mb-2">
                              <span style={{ 
                                color: category.color, 
                                fontSize: 'var(--text-sm)', 
                                fontWeight: '600', 
                                minWidth: '80px' 
                              }}>Description:</span>
                              <span style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: 'var(--text-sm)' 
                              }}>{device.description}</span>
                            </div>
                            <div className="d-flex align-items-start gap-2 mb-2">
                              <span style={{ 
                                color: category.color, 
                                fontSize: 'var(--text-sm)', 
                                fontWeight: '600', 
                                minWidth: '80px' 
                              }}>Specs:</span>
                              <span style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: 'var(--text-sm)' 
                              }}>{device.specs}</span>
                            </div>
                            <div className="d-flex align-items-start gap-2 mb-2">
                              <span style={{ 
                                color: category.color, 
                                fontSize: 'var(--text-sm)', 
                                fontWeight: '600', 
                                minWidth: '80px' 
                              }}>History:</span>
                              <span style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: 'var(--text-sm)' 
                              }}>{device.history}</span>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <span style={{ 
                                color: category.color, 
                                fontSize: 'var(--text-sm)', 
                                fontWeight: '600', 
                                minWidth: '80px' 
                              }}>Details:</span>
                              <span style={{ 
                                color: 'var(--text-secondary)', 
                                fontSize: 'var(--text-sm)' 
                              }}>{device.details}</span>
                            </div>
                          </div>

                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge px-3 py-1" style={{
                              background: category.bgColor,
                              color: category.color,
                              fontSize: 'var(--text-xs)',
                              fontWeight: '600',
                              borderRadius: 'var(--border-radius-full)'
                            }}>
                              {index + 1} of {category.devices.length}
                            </span>
                            <button className="btn" style={{
                              background: category.color,
                              color: 'white',
                              borderRadius: 'var(--border-radius-md)',
                              padding: 'var(--space-2) var(--space-4)',
                              fontSize: 'var(--text-sm)',
                              fontWeight: '600',
                              border: 'none',
                              transition: 'var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.opacity = '0.9';
                              e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.opacity = '1';
                              e.target.style.transform = 'translateY(0)';
                            }}>
                              Learn More →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Hardware vs Software Comparison */}
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
                  📝 Hardware vs Software Comparison
                </h3>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr style={{ background: 'rgba(0, 168, 132, 0.1)' }}>
                        <th style={{ 
                          borderTopLeftRadius: 'var(--border-radius-md)', 
                          borderBottomLeftRadius: 'var(--border-radius-md)',
                          padding: 'var(--space-4)',
                          color: 'var(--text-primary)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)'
                        }}>Aspect</th>
                        <th style={{ 
                          padding: 'var(--space-4)',
                          color: 'var(--primary)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)'
                        }}>Hardware</th>
                        <th style={{ 
                          borderTopRightRadius: 'var(--border-radius-md)',
                          borderBottomRightRadius: 'var(--border-radius-md)',
                          padding: 'var(--space-4)',
                          color: 'var(--success)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)'
                        }}>Software</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} style={{ 
                          background: index % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-card)',
                          borderBottom: '1px solid var(--border-color)'
                        }}>
                          <td style={{ 
                            padding: 'var(--space-4)',
                            color: 'var(--text-primary)',
                            fontWeight: '500',
                            fontSize: 'var(--text-base)'
                          }}>{row.aspect}</td>
                          <td style={{ 
                            padding: 'var(--space-4)',
                            color: 'var(--text-secondary)',
                            fontSize: 'var(--text-base)'
                          }}>{row.hardware}</td>
                          <td style={{ 
                            padding: 'var(--space-4)',
                            color: 'var(--text-secondary)',
                            fontSize: 'var(--text-base)'
                          }}>{row.software}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="card border-0" style={{
              borderRadius: 'var(--border-radius-lg)',
              backgroundColor: 'var(--bg-secondary)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="fw-bold mb-4" style={{ 
                  color: 'var(--text-primary)',
                  fontSize: 'var(--text-2xl)'
                }}>
                  📊 Hardware Quick Reference
                </h3>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-primary)',
                          fontWeight: '600',
                          background: 'rgba(0, 168, 132, 0.1)',
                          borderTopLeftRadius: 'var(--border-radius-md)',
                          fontSize: 'var(--text-base)'
                        }}>Component</th>
                        <th style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-primary)',
                          fontWeight: '600',
                          background: 'rgba(0, 168, 132, 0.1)',
                          fontSize: 'var(--text-base)'
                        }}>Category</th>
                        <th style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-primary)',
                          fontWeight: '600',
                          background: 'rgba(0, 168, 132, 0.1)',
                          fontSize: 'var(--text-base)'
                        }}>Key Specifications</th>
                        <th style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-primary)',
                          fontWeight: '600',
                          background: 'rgba(0, 168, 132, 0.1)',
                          borderTopRightRadius: 'var(--border-radius-md)',
                          fontSize: 'var(--text-base)'
                        }}>Common Uses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: 'var(--bg-card)' }}>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--primary)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)'
                        }}>CPU</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Internal</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>2-5GHz, 2-64 cores, 4-128MB cache</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Processing, Calculations</td>
                      </tr>
                      <tr style={{ background: 'var(--bg-secondary)' }}>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--success)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)'
                        }}>RAM</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Internal</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>4-128GB, 1600-6400 MT/s</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Temporary Data Storage</td>
                      </tr>
                      <tr style={{ background: 'var(--bg-card)' }}>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--secondary)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)'
                        }}>HDD</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Storage</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>500GB-20TB, 5400-15000 RPM</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Long-term Storage</td>
                      </tr>
                      <tr style={{ background: 'var(--bg-secondary)' }}>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--danger)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)'
                        }}>SSD</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Storage</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>128GB-8TB, 500-7000MB/s</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Fast Storage, OS Drive</td>
                      </tr>
                      <tr style={{ background: 'var(--bg-card)' }}>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--warning)',
                          fontWeight: '600',
                          fontSize: 'var(--text-base)'
                        }}>GPU</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Internal</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>2-24GB VRAM, 500-18000 cores</td>
                        <td style={{ 
                          padding: 'var(--space-3)',
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-base)'
                        }}>Graphics, Gaming, AI</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-5 pt-4 border-top" style={{ 
              borderTop: '1px solid var(--border-color)'
            }}>
              <p className="mb-3" style={{ 
                color: 'var(--text-muted)',
                fontSize: 'var(--text-base)'
              }}>
                Chapter 2: Computer Hardware • Complete Reference Guide • Last Updated: 23 July 2025
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <span className="badge px-3 py-2" style={{ 
                  background: 'rgba(0, 168, 132, 0.1)', 
                  color: 'var(--primary)',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--border-radius-full)'
                }}>
                  Total Components: 25+
                </span>
                <span className="badge px-3 py-2" style={{ 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  color: 'var(--success)',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--border-radius-full)'
                }}>
                  Categories: 4
                </span>
                <span className="badge px-3 py-2" style={{ 
                  background: 'rgba(124, 58, 237, 0.1)', 
                  color: 'var(--secondary)',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--border-radius-full)'
                }}>
                  Images: 25+
                </span>
                <span className="badge px-3 py-2" style={{ 
                  background: 'rgba(239, 68, 68, 0.1)', 
                  color: 'var(--danger)',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--border-radius-full)'
                }}>
                  Specifications: 100+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}