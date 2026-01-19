import React from "react";
import {
  Keyboard, Mouse, Scan, Monitor, Printer, Speaker,
  Mic, Camera, Touchpad, Gamepad, Barcode,
 Fingerprint, Projector, Headphones, PenTool
} from "lucide-react";


export default function Chapter5() {
  const inputDevices = [
    {
      icon: <Keyboard size={24} />,
      name: "Keyboard",
      description: "Primary text input device with alphanumeric keys",
      types: ["QWERTY", "AZERTY", "Mechanical", "Membrane", "Wireless"],
      specs: "101-104 keys, USB/Bluetooth, 45-80g actuation force",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Mechanical_keyboard.jpg",
      color: "var(--primary)"
    },
    {
      icon: <Mouse size={24} />,
      name: "Mouse",
      description: "Pointing device for graphical user interface navigation",
      types: ["Optical", "Laser", "Trackball", "Gaming", "Wireless"],
      specs: "800-16000 DPI, 6-20 programmable buttons",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/3-button-computer-mouse.jpg",
      color: "var(--primary-blue)"
    },
    {
      icon: <Scan size={24} />,
      name: "Scanner",
      description: "Converts physical documents/images to digital format",
      types: ["Flatbed", "Sheet-fed", "Handheld", "Drum"],
      specs: "300-9600 DPI, 24-48 bit color depth",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Scanner-Flatbed.jpg",
      color: "var(--success)"
    },
    {
      icon: <Mic size={24} />,
      name: "Microphone",
      description: "Converts sound waves into electrical signals",
      types: ["Condenser", "Dynamic", "Ribbon", "Lavalier"],
      specs: "20Hz-20kHz frequency response, USB/XLR",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Microphone1.jpg",
      color: "var(--warning)"
    },
    {
      icon: <Camera size={24} />,
      name: "Webcam",
      description: "Captures live video for communication/recording",
      types: ["USB Webcam", "Network Camera", "360° Camera"],
      specs: "HD-4K resolution, 30-60 fps, auto-focus",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Webcam_USB.jpg",
      color: "var(--info)"
    },
    {
      icon: <Touchpad size={24} />,
      name: "Touchscreen",
      description: "Display that detects touch input directly",
      types: ["Resistive", "Capacitive", "Infrared", "SAW"],
      specs: "1-10 touch points, 10ms response time",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Capacitive-touchscreen.jpg",
      color: "var(--secondary)"
    },
    {
      icon: <Gamepad size={24} />,
      name: "Joystick/Gamepad",
      description: "Input device for gaming and simulations",
      types: ["Analog Joystick", "Gamepad", "Flight Stick", "Racing Wheel"],
      specs: "Analog/digital, 8-20 buttons, force feedback",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Joystick.jpg",
      color: "var(--danger)"
    },
    {
      icon: <Barcode size={24} />,
      name: "Barcode Reader",
      description: "Reads barcode patterns for data input",
      types: ["Laser Scanner", "CCD Reader", "Imager Scanner"],
      specs: "100-1000 scans/second, USB/Bluetooth",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Barcode_scanner_2.jpg",
      color: "var(--accent)"
    },
    {
      icon: <Fingerprint size={24} />,
      name: "Biometric Scanner",
      description: "Captures biological characteristics for authentication",
      types: ["Fingerprint", "Iris", "Facial", "Voice"],
      specs: "Optical/Capacitive sensors, 500ms response",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Fingerprint_scanner.jpg",
      color: "var(--primary)"
    }
  ];

  const outputDevices = [
    {
      icon: <Monitor size={24} />,
      name: "Monitor",
      description: "Displays visual output from computer",
      types: ["LCD", "LED", "OLED", "CRT", "Curved"],
      specs: "HD-8K, 60-360Hz, 250-1000+ nits",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/LCD_monitor.jpg",
      color: "var(--primary-blue)"
    },
    {
      icon: <Printer size={24} />,
      name: "Printer",
      description: "Produces hard copy documents/images",
      types: ["Inkjet", "Laser", "Dot Matrix", "3D", "Thermal"],
      specs: "300-4800 DPI, 10-100 PPM, USB/Wi-Fi",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Printer-laser.jpg",
      color: "var(--success)"
    },
    {
      icon: <Speaker size={24} />,
      name: "Speakers",
      description: "Converts electrical signals to audible sound",
      types: ["2.0", "2.1", "5.1", "7.1", "Soundbar"],
      specs: "20Hz-20kHz, 10-1000W, Bluetooth",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Speakers_Mini.jpg",
      color: "var(--warning)"
    },
    {
      icon: <Projector size={24} />,
      name: "Projector",
      description: "Projects computer output onto large screen",
      types: ["DLP", "LCD", "LED", "Laser"],
      specs: "2000-10000 lumens, SVGA-4K resolution",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Projector_Christie.JPG",
      color: "var(--info)"
    },
    {
      icon: <Headphones size={24} />,
      name: "Headphones",
      description: "Personal audio output device",
      types: ["Over-ear", "On-ear", "In-ear", "Noise-cancelling"],
      specs: "20Hz-20kHz, 16-300 ohms impedance",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Headphones_1.jpg",
      color: "var(--secondary)"
    },
    {
      icon: <PenTool size={24} />,
      name: "Plotter",
      description: "Produces vector graphics for large formats",
      types: ["Pen Plotter", "Electrostatic", "Inkjet"],
      specs: "A0-A4 paper, 600-2400 DPI",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/HP_Color_Pro_Plotter.jpg",
      color: "var(--danger)"
    }
  ];

  const specialIODevices = [
    {
      category: "Input/Output",
      devices: [
        { name: "Touchscreen", desc: "Both input (touch) and output (display)" },
        { name: "Modem", desc: "Input (receive) and output (send) data over networks" },
        { name: "Network Card", desc: "Sends and receives network data" },
        { name: "Touchpad", desc: "Input (gestures) and output (haptic feedback)" }
      ],
      color: "var(--accent)"
    },
    {
      category: "Special Purpose",
      devices: [
        { name: "Graphics Tablet", desc: "Input for digital artists" },
        { name: "MIDI Controller", desc: "Input for music production" },
        { name: "VR Headset", desc: "Immersive input/output device" }
      ],
      color: "var(--primary)"
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
                    <Keyboard size={40} className="text-white" />
                  </div>
                </div>
                <h1 className="display-5 fw-bold mb-3" style={{ fontSize: 'var(--text-4xl)' }}>
                  ⌨️ Chapter 5: Input & Output Devices
                </h1>
                <p className="lead mb-4" style={{ 
                  fontSize: 'var(--text-lg)',
                  opacity: 0.9 
                }}>
                  Complete guide to computer input/output peripherals with detailed specifications
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    📥 9 Input Devices
                  </span>
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    📤 6 Output Devices
                  </span>
                  <span className="badge px-3 py-2" style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    fontSize: 'var(--text-sm)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    🔄 Special I/O Devices
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
            {/* I/O Overview */}
            <div className="card border-0 mb-5" style={{
              borderRadius: 'var(--border-radius-lg)',
              backgroundColor: 'var(--bg-card)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div className="card-body p-4 p-md-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src="/assets/fundamentals/io.png"
                      alt="Input Output System"
                      className="img-fluid rounded-3"
                      style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="fw-bold mb-3" style={{ 
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-2xl)'
                    }}>
                      Input/Output System
                    </h3>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--text-lg)',
                      lineHeight: '1.7'
                    }}>
                      I/O devices act as the interface between users and computers. <strong style={{ color: 'var(--primary)' }}>Input devices</strong> send data to the computer, while <strong style={{ color: 'var(--success)' }}>output devices</strong> receive data from the computer.
                    </p>
                    
                    <div className="row mt-4">
                      <div className="col-6">
                        <div className="p-3 rounded-3 text-center" style={{
                          background: 'linear-gradient(135deg, rgba(0, 168, 132, 0.1) 0%, rgba(0, 168, 132, 0.2) 100%)',
                          border: '1px solid var(--primary)'
                        }}>
                          <div className="fw-bold mb-1" style={{ color: 'var(--primary)', fontSize: 'var(--text-lg)' }}>Input</div>
                          <div style={{ color: 'var(--text-secondary)' }}>Send data to computer</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 rounded-3 text-center" style={{
                          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.2) 100%)',
                          border: '1px solid var(--success)'
                        }}>
                          <div className="fw-bold mb-1" style={{ color: 'var(--success)', fontSize: 'var(--text-lg)' }}>Output</div>
                          <div style={{ color: 'var(--text-secondary)' }}>Receive data from computer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Devices Section */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--primary)',
                  color: 'white'
                }}>
                  <Keyboard size={28} />
                </div>
                <div>
                  <h2 className="fw-bold mb-1" style={{ 
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-2xl)'
                  }}>
                    📥 Input Devices
                  </h2>
                  <p className="mb-0" style={{ 
                    color: 'var(--text-muted)',
                    fontSize: 'var(--text-sm)'
                  }}>
                    Send data and commands to the computer
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {inputDevices.map((device, index) => (
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
                      e.currentTarget.style.borderColor = device.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }}>
                      <div className="position-relative" style={{ 
                        height: '150px', 
                        overflow: 'hidden',
                        borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0'
                      }}>
                        <img
                          src={device.image}
                          alt={device.name}
                          className="w-100 h-100 object-fit-cover"
                        />
                        <div className="position-absolute top-0 end-0 m-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                            width: '40px',
                            height: '40px',
                            background: device.color,
                            color: 'white'
                          }}>
                            {device.icon}
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-4">
                        <h5 className="fw-bold mb-2" style={{ 
                          color: device.color,
                          fontSize: 'var(--text-lg)'
                        }}>
                          {device.name}
                        </h5>
                        <p className="mb-3" style={{ 
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-sm)'
                        }}>
                          {device.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="fw-semibold mb-1" style={{ 
                            color: 'var(--text-primary)',
                            fontSize: 'var(--text-xs)'
                          }}>
                            Types:
                          </div>
                          <div className="d-flex flex-wrap gap-1">
                            {device.types.map((type, idx) => (
                              <span key={idx} className="badge px-2 py-1" style={{
                                background: `${device.color}15`,
                                color: device.color,
                                fontSize: 'var(--text-xs)',
                                borderRadius: 'var(--border-radius-full)'
                              }}>
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div style={{ 
                          color: 'var(--text-muted)',
                          fontSize: 'var(--text-xs)',
                          borderTop: '1px solid var(--border-color)',
                          paddingTop: 'var(--space-3)'
                        }}>
                          <strong>Specs:</strong> {device.specs}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Output Devices Section */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--success)',
                  color: 'white'
                }}>
                  <Monitor size={28} />
                </div>
                <div>
                  <h2 className="fw-bold mb-1" style={{ 
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-2xl)'
                  }}>
                    📤 Output Devices
                  </h2>
                  <p className="mb-0" style={{ 
                    color: 'var(--text-muted)',
                    fontSize: 'var(--text-sm)'
                  }}>
                    Present processed data from the computer
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {outputDevices.map((device, index) => (
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
                      e.currentTarget.style.borderColor = device.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }}>
                      <div className="position-relative" style={{ 
                        height: '150px', 
                        overflow: 'hidden',
                        borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0'
                      }}>
                        <img
                          src={device.image}
                          alt={device.name}
                          className="w-100 h-100 object-fit-cover"
                        />
                        <div className="position-absolute top-0 end-0 m-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                            width: '40px',
                            height: '40px',
                            background: device.color,
                            color: 'white'
                          }}>
                            {device.icon}
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-4">
                        <h5 className="fw-bold mb-2" style={{ 
                          color: device.color,
                          fontSize: 'var(--text-lg)'
                        }}>
                          {device.name}
                        </h5>
                        <p className="mb-3" style={{ 
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-sm)'
                        }}>
                          {device.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="fw-semibold mb-1" style={{ 
                            color: 'var(--text-primary)',
                            fontSize: 'var(--text-xs)'
                          }}>
                            Types:
                          </div>
                          <div className="d-flex flex-wrap gap-1">
                            {device.types.map((type, idx) => (
                              <span key={idx} className="badge px-2 py-1" style={{
                                background: `${device.color}15`,
                                color: device.color,
                                fontSize: 'var(--text-xs)',
                                borderRadius: 'var(--border-radius-full)'
                              }}>
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div style={{ 
                          color: 'var(--text-muted)',
                          fontSize: 'var(--text-xs)',
                          borderTop: '1px solid var(--border-color)',
                          paddingTop: 'var(--space-3)'
                        }}>
                          <strong>Specs:</strong> {device.specs}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special I/O Devices */}
            <div className="mb-5">
              <h3 className="fw-bold mb-4" style={{ 
                color: 'var(--text-primary)',
                fontSize: 'var(--text-2xl)'
              }}>
                🔄 Special Input/Output Devices
              </h3>
              
              <div className="row g-4">
                {specialIODevices.map((category, catIndex) => (
                  <div key={catIndex} className="col-12 col-md-6">
                    <div className="card border-0 h-100" style={{
                      borderRadius: 'var(--border-radius-lg)',
                      backgroundColor: 'var(--bg-card)',
                      border: `1px solid ${category.color}`,
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <div className="card-header border-0" style={{
                        background: `${category.color}10`,
                        borderTopLeftRadius: 'var(--border-radius-lg)',
                        borderTopRightRadius: 'var(--border-radius-lg)'
                      }}>
                        <h5 className="fw-bold mb-0 p-3" style={{ color: category.color }}>
                          {category.category}
                        </h5>
                      </div>
                      <div className="card-body p-4">
                        <div className="row g-3">
                          {category.devices.map((device, devIndex) => (
                            <div key={devIndex} className="col-12">
                              <div className="d-flex align-items-start gap-3 p-3 rounded-2" style={{
                                backgroundColor: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)'
                              }}>
                                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{
                                  width: '36px',
                                  height: '36px',
                                  background: category.color,
                                  color: 'white',
                                  fontSize: 'var(--text-sm)'
                                }}>
                                  {devIndex + 1}
                                </div>
                                <div>
                                  <div className="fw-bold mb-1" style={{ 
                                    color: 'var(--text-primary)',
                                    fontSize: 'var(--text-base)'
                                  }}>
                                    {device.name}
                                  </div>
                                  <div style={{ 
                                    color: 'var(--text-secondary)',
                                    fontSize: 'var(--text-sm)'
                                  }}>
                                    {device.desc}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
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
                  📊 Input vs Output Comparison
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
                        }}>Aspect</th>
                        <th style={{ 
                          color: 'var(--primary)',
                          fontWeight: '600',
                          padding: 'var(--space-4)'
                        }}>Input Devices</th>
                        <th style={{ 
                          color: 'var(--success)',
                          fontWeight: '600',
                          padding: 'var(--space-4)',
                          borderTopRightRadius: 'var(--border-radius-md)'
                        }}>Output Devices</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-primary)' }}>Purpose</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Send data to computer</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Receive data from computer</td>
                      </tr>
                      <tr style={{ backgroundColor: 'var(--bg-card)' }}>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-primary)' }}>Direction</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Into the computer</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Out of the computer</td>
                      </tr>
                      <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-primary)' }}>Examples</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Keyboard, Mouse, Scanner</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Monitor, Printer, Speaker</td>
                      </tr>
                      <tr style={{ backgroundColor: 'var(--bg-card)' }}>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-primary)' }}>Data Flow</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>From user to computer</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>From computer to user</td>
                      </tr>
                      <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-primary)' }}>Function</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Enter commands/data</td>
                        <td style={{ padding: 'var(--space-4)', color: 'var(--text-secondary)' }}>Display/Produce results</td>
                      </tr>
                    </tbody>
                  </table>
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
                  Input devices allow users to interact with computers, while output devices present processed information. 
                  Together, they form the essential human-computer interface that makes computing possible.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(0, 168, 132, 0.1)',
                    border: '1px solid rgba(0, 168, 132, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--primary)' }}>15+ Devices Covered</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Detailed specifications</div>
                  </div>
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--success)' }}>50+ Types</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Different variants available</div>
                  </div>
                  <div className="p-3 rounded-3" style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <div className="fw-bold" style={{ color: 'var(--info)' }}>Real Images</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Visual representation</div>
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