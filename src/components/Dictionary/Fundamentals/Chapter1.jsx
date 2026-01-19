import { AlertCircle, BookOpen, Cpu, Database, Zap } from "lucide-react";

// CSS variables for consistent theming
const theme = {
  colors: {
    primary: '#2563eb',
    primaryLight: 'rgba(37, 99, 235, 0.1)',
    secondary: '#7c3aed',
    secondaryLight: 'rgba(124, 58, 237, 0.1)',
    success: '#10b981',
    successLight: 'rgba(16, 185, 129, 0.1)',
    warning: '#f59e0b',
    warningLight: 'rgba(245, 158, 11, 0.1)',
    danger: '#ef4444',
    dangerLight: 'rgba(239, 68, 68, 0.1)',
    info: '#06b6d4',
    infoLight: 'rgba(6, 182, 212, 0.1)',
    purple: '#8b5cf6',
    purpleLight: 'rgba(139, 92, 246, 0.1)',
    indigo: '#6366f1',
    indigoLight: 'rgba(99, 102, 241, 0.1)',
    dark: '#1e293b',
    light: '#f8fafc',
    white: '#ffffff',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray500: '#6b7280',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    success: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    warning: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    hero: 'linear-gradient(135deg, #1e293b 0%, #3730a3 50%, #06b6d4 100%)'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },
  radii: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px'
  }
};

// Custom CSS styles as JSX style objects
const styles = {
  heroSection: {
    background: theme.gradients.hero,
    position: 'relative',
    overflow: 'hidden'
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)'
  },
  sectionCard: {
    borderLeft: '5px solid',
    boxShadow: theme.shadows.md,
    transition: 'all 0.3s ease',
    borderRadius: theme.radii.lg,
    overflow: 'hidden'
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: theme.radii.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    flexShrink: 0
  },
  tag: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: theme.radii.full,
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  featureCard: {
    borderRadius: theme.radii.lg,
    border: '1px solid',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s ease',
    height: '100%'
  },
  generationCard: {
    borderLeft: '5px solid',
    background: theme.colors.white,
    borderRadius: theme.radii.lg,
    boxShadow: theme.shadows.sm,
    transition: 'all 0.3s ease'
  },
  imageWrapper: {
    borderRadius: theme.radii.lg,
    overflow: 'hidden',
    background: theme.colors.gray100
  }
};

export default function Chapter1() {
  const sections = [
    {
      id: 1,
      title: "Introduction & Definition",
      icon: "📘",
      color: theme.colors.primary,
      borderColor: theme.colors.primary,
      bgColor: theme.colors.primaryLight,
      tag: "Basic",
      content: (
        <div>
          <div className="mb-4" style={{ lineHeight: '1.8' }}>
            <p className="mb-3" style={{ fontSize: '1.125rem', color: theme.colors.gray700 }}>
              A <strong style={{ color: theme.colors.primary }}>computer</strong> is an <strong style={{ color: theme.colors.primary }}>electronic device</strong> that accepts raw data (<strong style={{ color: theme.colors.primary }}>input</strong>), processes it according to instructions (<strong style={{ color: theme.colors.primary }}>programs</strong>), stores it (<strong style={{ color: theme.colors.primary }}>memory/storage</strong>), and produces meaningful results (<strong style={{ color: theme.colors.primary }}>output</strong>).
            </p>
            <p style={{ fontSize: '1.125rem', color: theme.colors.gray700 }}>
              It can perform tasks <strong style={{ color: theme.colors.success }}>faster, accurately, and reliably</strong> than humans.
            </p>
          </div>

          <div className="mb-4" style={styles.imageWrapper}>
            <img
              src="/img/fundamental/process.jpg"
              alt="Input-Processing-Output Cycle"
              className="img-fluid w-100"
              style={{ display: 'block' }}
            />
          </div>

          <div style={{
            background: theme.colors.warningLight,
            borderLeft: `4px solid ${theme.colors.warning}`,
            borderRadius: theme.radii.lg,
            padding: '1.5rem'
          }}>
            <h5 style={{
              color: theme.colors.warning,
              fontWeight: '600',
              marginBottom: '1rem',
              fontSize: '1.125rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                background: theme.colors.warning,
                color: 'white',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem'
              }}>✓</span>
              Key Characteristics:
            </h5>
            <div className="row g-3">
              {[
                { icon: '⚡', title: 'High Speed', desc: 'Millions of operations per second' },
                { icon: '🎯', title: 'Accuracy', desc: 'Precise results with correct input' },
                { icon: '🔄', title: 'Reliability', desc: 'Consistent performance' },
                { icon: '💾', title: 'Storage', desc: 'Huge data capacity' },
                { icon: '🤖', title: 'Automation', desc: 'Executes tasks automatically' }
              ].map((item, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4">
                  <div style={{
                    background: 'white',
                    borderRadius: theme.radii.md,
                    padding: '1rem',
                    height: '100%',
                    border: `1px solid ${theme.colors.gray200}`
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      marginBottom: '0.5rem'
                    }}>{item.icon}</div>
                    <h6 style={{
                      color: theme.colors.gray800,
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      fontSize: '0.95rem'
                    }}>{item.title}</h6>
                    <p style={{
                      color: theme.colors.gray600,
                      fontSize: '0.875rem',
                      margin: 0
                    }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Advantages of Computer",
      icon: <Zap size={24} />,
      color: theme.colors.success,
      borderColor: theme.colors.success,
      bgColor: theme.colors.successLight,
      tag: "Benefits",
      content: (
        <div className="row g-4">
          {[
            { icon: '⚡', title: 'High Speed', desc: 'Billions of operations per second', color: theme.colors.success },
            { icon: '🎯', title: 'Accuracy', desc: 'Error-free with correct programming', color: theme.colors.info },
            { icon: '🤖', title: 'Automation', desc: 'Runs without human intervention', color: theme.colors.warning },
            { icon: '💾', title: 'Storage', desc: 'Massive data storage capacity', color: theme.colors.purple },
            { icon: '🔄', title: 'Multitasking', desc: 'Handles multiple tasks simultaneously', color: theme.colors.secondary },
            { icon: '🌐', title: 'Communication', desc: 'Global connectivity via internet', color: theme.colors.primary },
          ].map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div style={{
                ...styles.featureCard,
                borderColor: `${item.color}20`,
                background: `${item.color}08`
              }}>
                <div className="p-3 p-md-4">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${item.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    fontSize: '1.25rem'
                  }}>
                    {item.icon}
                  </div>
                  <h5 style={{
                    color: item.color,
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    fontSize: '1.125rem'
                  }}>{item.title}</h5>
                  <p style={{
                    color: theme.colors.gray700,
                    margin: 0,
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 3,
      title: "Limitations of Computer",
      icon: <AlertCircle size={24} />,
      color: theme.colors.warning,
      borderColor: theme.colors.warning,
      bgColor: theme.colors.warningLight,
      tag: "Constraints",
      content: (
        <div className="row g-4">
          {[
            {
              title: "No Intelligence",
              desc: "Cannot think or make decisions independently",
              icon: "🧠",
              color: theme.colors.warning
            },
            {
              title: "Human Dependent",
              desc: "Requires explicit programming and instructions",
              icon: "👨‍💻",
              color: theme.colors.danger
            },
            {
              title: "No Emotions",
              desc: "Cannot understand feelings or emotional context",
              icon: "❤️",
              color: theme.colors.purple
            },
            {
              title: "High Cost",
              desc: "Advanced systems (supercomputers) are expensive",
              icon: "💰",
              color: theme.colors.info
            },
          ].map((item, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <div style={{
                background: 'white',
                borderRadius: theme.radii.lg,
                padding: '1.5rem',
                border: `1px solid ${theme.colors.gray200}`,
                height: '100%'
              }}>
                <div className="d-flex align-items-start gap-3">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${item.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.25rem'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h6 style={{
                      color: item.color,
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      fontSize: '1.125rem'
                    }}>{item.title}</h6>
                    <p style={{
                      color: theme.colors.gray700,
                      margin: 0,
                      fontSize: '0.95rem',
                      lineHeight: '1.5'
                    }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 4,
      title: "History & Generations of Computers",
      icon: <BookOpen size={24} />,
      color: theme.colors.info,
      borderColor: theme.colors.info,
      bgColor: theme.colors.infoLight,
      tag: "Evolution",
      content: (
        <div>
          <div className="mb-4" style={styles.imageWrapper}>
            <img
              src="/img/fundamental/GenerationofComputer.png"
              alt="Computer Generations Timeline"
              className="img-fluid w-100"
              style={{ display: 'block' }}
            />
          </div>

          <div className="row g-3">
            {[
              {
                gen: "1st Generation",
                period: "(1940-1956)",
                tech: "Vacuum Tubes",
                desc: "Large in size, consumed more electricity, produced more heat, used for basic calculations.",
                color: theme.colors.danger,
                img: "/img/fundamental/vacuumeTube.jpg",
                icon: "💡"
              },
              {
                gen: "2nd Generation",
                period: "(1956-1963)",
                tech: "Transistors",
                desc: "Smaller size, faster, less heat, reliable. Used for business & scientific calculations.",
                color: theme.colors.warning,
                img: "/img/fundamental/transistors.webp",
                icon: "🔌"
              },
              {
                gen: "3rd Generation",
                period: "(1964-1971)",
                tech: "Integrated Circuits (ICs)",
                desc: "Smaller, faster, reliable, less heat. Popular in offices & industries.",
                color: theme.colors.info,
                img: "/img/fundamental/ic.jpg",
                icon: "🔋"
              },
              {
                gen: "4th Generation",
                period: "(1971-Present)",
                tech: "Microprocessors",
                desc: "Personal computers, laptops, very fast, low cost. Used for education, business, and home.",
                color: theme.colors.success,
                img: "/img/fundamental/processor.png",
                icon: "💻"
              },
              {
                gen: "5th Generation",
                period: "(Present & Future)",
                tech: "Artificial Intelligence & Quantum",
                desc: "Supercomputers, robots, smart devices, faster computation & decision making.",
                color: theme.colors.primary,
                img: "/img/fundamental/quantum.jpg",
                icon: "🤖"
              },
            ].map((item, idx) => (
              <div key={idx} className="col-12">
                <div style={{
                  ...styles.generationCard,
                  borderLeftColor: item.color,
                  background: `${item.color}05`
                }}>
                  <div className="p-3 p-md-4">
                    <div className="row g-3 align-items-center">
                      <div className="col-12 col-md-8">
                        <div className="d-flex align-items-start gap-3 mb-3">
                          <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.25rem',
                            flexShrink: 0
                          }}>
                            {item.icon}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                              <h4 style={{
                                color: theme.colors.gray900,
                                fontWeight: '700',
                                margin: 0,
                                fontSize: '1.25rem'
                              }}>{item.gen}</h4>
                              <span style={{
                                color: theme.colors.gray600,
                                fontSize: '0.875rem',
                                fontWeight: '500'
                              }}>{item.period}</span>
                              <span style={{
                                ...styles.tag,
                                background: `${item.color}15`,
                                color: item.color,
                                fontSize: '0.75rem',
                                padding: '0.25rem 0.75rem'
                              }}>
                                {item.tech}
                              </span>
                            </div>
                            <p style={{
                              color: theme.colors.gray700,
                              margin: 0,
                              fontSize: '0.95rem',
                              lineHeight: '1.6'
                            }}>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div style={styles.imageWrapper}>
                          <img
                            src={item.img}
                            alt={item.gen}
                            className="img-fluid w-100"
                            style={{ display: 'block', maxHeight: '160px', objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Hardware",
      icon: <Cpu size={24} />,
      color: theme.colors.primary,
      borderColor: theme.colors.primary,
      bgColor: theme.colors.primaryLight,
      tag: "Physical",
      content: (
        <div>
          <div className="mb-4" style={{ lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.125rem', color: theme.colors.gray700 }}>
              <strong style={{ color: theme.colors.primary }}>Hardware</strong> refers to the physical components of a computer that you can touch and see.
            </p>
          </div>

          <div className="mb-4" style={styles.imageWrapper}>
            <img
              src="/img/fundamental/hardware.webp"
              alt="Computer Components"
              className="img-fluid w-100"
              style={{ display: 'block' }}
            />
          </div>

          <div style={{
            background: theme.colors.primaryLight,
            borderRadius: theme.radii.lg,
            padding: '1.5rem',
            border: `1px solid ${theme.colors.primary}20`
          }}>
            <h5 style={{
              color: theme.colors.primary,
              fontWeight: '600',
              marginBottom: '1rem',
              fontSize: '1.125rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                background: theme.colors.primary,
                color: 'white',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem'
              }}>🖥️</span>
              Main Hardware Components:
            </h5>
            <div className="row g-3">
              {[
                { icon: '🧠', title: 'CPU', desc: 'Central Processing Unit – Brain of the computer' },
                { icon: '⌨️', title: 'Input Devices', desc: 'Keyboard, Mouse, Scanner, Microphone' },
                { icon: '🖥️', title: 'Output Devices', desc: 'Monitor, Printer, Speaker, Projector' },
                { icon: '💾', title: 'Memory', desc: 'RAM, ROM, Cache, Hard Disk' },
                { icon: '💿', title: 'Storage', desc: 'USB, SSD, CD/DVD' },
                { icon: '🔌', title: 'Motherboard', desc: 'Connects all components' },
              ].map((item, idx) => (
                <div key={idx} className="col-12 col-md-6 col-lg-4">
                  <div style={{
                    background: 'white',
                    borderRadius: theme.radii.md,
                    padding: '1rem',
                    border: `1px solid ${theme.colors.gray200}`,
                    height: '100%'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      marginBottom: '0.5rem'
                    }}>{item.icon}</div>
                    <h6 style={{
                      color: theme.colors.primary,
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      fontSize: '0.95rem'
                    }}>{item.title}</h6>
                    <p style={{
                      color: theme.colors.gray600,
                      fontSize: '0.875rem',
                      margin: 0,
                      lineHeight: '1.4'
                    }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Software",
      icon: <Database size={24} />,
      color: theme.colors.purple,
      borderColor: theme.colors.purple,
      bgColor: theme.colors.purpleLight,
      tag: "Programs",
      content: (
        <div>
          <div className="mb-4" style={{ lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.125rem', color: theme.colors.gray700 }}>
              <strong style={{ color: theme.colors.purple }}>Software</strong> is a set of instructions (programs) that tell the computer how to perform tasks.
            </p>
          </div>

          <div className="mb-4" style={styles.imageWrapper}>
            <img
              src="/img/fundamental/types-of-software-name-with-images.webp"
              alt="Software Types"
              className="img-fluid w-100"
              style={{ display: 'block' }}
            />
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div style={{
                background: theme.colors.purpleLight,
                borderRadius: theme.radii.lg,
                padding: '1.5rem',
                border: `1px solid ${theme.colors.purple}20`,
                height: '100%'
              }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: theme.colors.purple,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1rem'
                  }}>
                    ⚙️
                  </div>
                  <h5 style={{
                    color: theme.colors.purple,
                    fontWeight: '700',
                    margin: 0,
                    fontSize: '1.25rem'
                  }}>System Software</h5>
                </div>
                <div className="d-flex flex-column gap-3">
                  {[
                    { icon: '🖥️', name: 'Operating System', examples: 'Windows, Linux, macOS' },
                    { icon: '🔧', name: 'Device Drivers', examples: 'Hardware drivers' },
                    { icon: '🔩', name: 'Firmware', examples: 'BIOS, UEFI' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: 'white',
                      borderRadius: theme.radii.md,
                      padding: '0.75rem',
                      border: `1px solid ${theme.colors.gray200}`
                    }}>
                      <div className="d-flex align-items-start gap-2">
                        <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{item.icon}</span>
                        <div>
                          <div style={{
                            color: theme.colors.purple,
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            marginBottom: '0.25rem'
                          }}>{item.name}</div>
                          <div style={{
                            color: theme.colors.gray600,
                            fontSize: '0.875rem'
                          }}>{item.examples}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div style={{
                background: theme.colors.indigoLight,
                borderRadius: theme.radii.lg,
                padding: '1.5rem',
                border: `1px solid ${theme.colors.indigo}20`,
                height: '100%'
              }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: theme.colors.indigo,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1rem'
                  }}>
                    📱
                  </div>
                  <h5 style={{
                    color: theme.colors.indigo,
                    fontWeight: '700',
                    margin: 0,
                    fontSize: '1.25rem'
                  }}>Application Software</h5>
                </div>
                <div className="d-flex flex-column gap-3">
                  {[
                    { icon: '📄', name: 'Productivity', examples: 'MS Office, Tally, Google Docs' },
                    { icon: '🎨', name: 'Creative', examples: 'Photoshop, Browsers, VS Code' },
                    { icon: '🎮', name: 'Entertainment', examples: 'Games, Media Players, Spotify' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: 'white',
                      borderRadius: theme.radii.md,
                      padding: '0.75rem',
                      border: `1px solid ${theme.colors.gray200}`
                    }}>
                      <div className="d-flex align-items-start gap-2">
                        <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{item.icon}</span>
                        <div>
                          <div style={{
                            color: theme.colors.indigo,
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            marginBottom: '0.25rem'
                          }}>{item.name}</div>
                          <div style={{
                            color: theme.colors.gray600,
                            fontSize: '0.875rem'
                          }}>{item.examples}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "CPU & Memory",
      icon: <Cpu size={24} />,
      color: theme.colors.info,
      borderColor: theme.colors.info,
      bgColor: theme.colors.infoLight,
      tag: "Processing",
      content: (
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div style={{
              background: theme.colors.infoLight,
              borderRadius: theme.radii.lg,
              padding: '1.5rem',
              border: `1px solid ${theme.colors.info}20`,
              height: '100%'
            }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: theme.colors.info,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem'
                }}>
                  🧠
                </div>
                <h5 style={{
                  color: theme.colors.info,
                  fontWeight: '700',
                  margin: 0,
                  fontSize: '1.25rem'
                }}>CPU (Central Processing Unit)</h5>
              </div>
              <p style={{
                color: theme.colors.gray700,
                marginBottom: '1rem',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>The brain of the computer that executes instructions and processes data.</p>
              <div className="d-flex flex-column gap-2">
                {[
                  { icon: '🧮', name: 'ALU', desc: 'Arithmetic Logic Unit performs calculations' },
                  { icon: '🎮', name: 'CU', desc: 'Control Unit manages operations' },
                  { icon: '📥', name: 'Registers', desc: 'Temporary storage for data' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    borderRadius: theme.radii.md,
                    padding: '0.75rem',
                    border: `1px solid ${theme.colors.gray200}`
                  }}>
                    <div className="d-flex align-items-start gap-2">
                      <span style={{ fontSize: '1rem', lineHeight: 1 }}>{item.icon}</span>
                      <div>
                        <div style={{
                          color: theme.colors.info,
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          marginBottom: '0.125rem'
                        }}>{item.name}</div>
                        <div style={{
                          color: theme.colors.gray600,
                          fontSize: '0.85rem',
                          lineHeight: '1.4'
                        }}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div style={{
              background: theme.colors.primaryLight,
              borderRadius: theme.radii.lg,
              padding: '1.5rem',
              border: `1px solid ${theme.colors.primary}20`,
              height: '100%'
            }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: theme.colors.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem'
                }}>
                  💾
                </div>
                <h5 style={{
                  color: theme.colors.primary,
                  fontWeight: '700',
                  margin: 0,
                  fontSize: '1.25rem'
                }}>Memory Hierarchy</h5>
              </div>
              <p style={{
                color: theme.colors.gray700,
                marginBottom: '1rem',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>Stores data and instructions for processing at different speeds.</p>
              <div className="d-flex flex-column gap-2">
                {[
                  { icon: '⚡', name: 'Primary', desc: 'RAM (volatile), ROM (non-volatile)' },
                  { icon: '💿', name: 'Secondary', desc: 'Hard Disk, SSD, Optical Disk' },
                  { icon: '🚀', name: 'Cache', desc: 'High-speed memory near CPU' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    borderRadius: theme.radii.md,
                    padding: '0.75rem',
                    border: `1px solid ${theme.colors.gray200}`
                  }}>
                    <div className="d-flex align-items-start gap-2">
                      <span style={{ fontSize: '1rem', lineHeight: 1 }}>{item.icon}</span>
                      <div>
                        <div style={{
                          color: theme.colors.primary,
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          marginBottom: '0.125rem'
                        }}>{item.name}</div>
                        <div style={{
                          color: theme.colors.gray600,
                          fontSize: '0.85rem',
                          lineHeight: '1.4'
                        }}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Input/Output Devices",
      icon: "🖥️",
      color: theme.colors.success,
      borderColor: theme.colors.success,
      bgColor: theme.colors.successLight,
      tag: "Peripherals",
      content: (
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div style={{
              background: theme.colors.successLight,
              borderRadius: theme.radii.lg,
              padding: '1.5rem',
              border: `1px solid ${theme.colors.success}20`,
              height: '100%'
            }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: theme.colors.success,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem'
                }}>
                  ⌨️
                </div>
                <h5 style={{
                  color: theme.colors.success,
                  fontWeight: '700',
                  margin: 0,
                  fontSize: '1.25rem'
                }}>Input Devices</h5>
              </div>
              <div className="d-flex flex-column gap-3">
                {[
                  { icon: '⌨️', name: 'Keyboard', desc: 'Text and command input' },
                  { icon: '🖱️', name: 'Mouse', desc: 'Pointing and clicking' },
                  { icon: '📷', name: 'Scanner', desc: 'Document/image digitization' },
                  { icon: '🎤', name: 'Microphone', desc: 'Audio input' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    borderRadius: theme.radii.md,
                    padding: '0.75rem',
                    border: `1px solid ${theme.colors.gray200}`
                  }}>
                    <div className="d-flex align-items-center gap-3">
                      <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                      <div>
                        <div style={{
                          color: theme.colors.success,
                          fontWeight: '600',
                          fontSize: '0.95rem',
                          marginBottom: '0.125rem'
                        }}>{item.name}</div>
                        <div style={{
                          color: theme.colors.gray600,
                          fontSize: '0.85rem'
                        }}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div style={{
              background: theme.colors.successLight,
              borderRadius: theme.radii.lg,
              padding: '1.5rem',
              border: `1px solid ${theme.colors.success}20`,
              height: '100%'
            }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: theme.colors.success,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.25rem'
                }}>
                  🖥️
                </div>
                <h5 style={{
                  color: theme.colors.success,
                  fontWeight: '700',
                  margin: 0,
                  fontSize: '1.25rem'
                }}>Output Devices</h5>
              </div>
              <div className="d-flex flex-column gap-3">
                {[
                  { icon: '🖥️', name: 'Monitor', desc: 'Visual display output' },
                  { icon: '🖨️', name: 'Printer', desc: 'Hard copy output' },
                  { icon: '🔊', name: 'Speaker', desc: 'Audio output' },
                  { icon: '📽️', name: 'Projector', desc: 'Large screen projection' }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    borderRadius: theme.radii.md,
                    padding: '0.75rem',
                    border: `1px solid ${theme.colors.gray200}`
                  }}>
                    <div className="d-flex align-items-center gap-3">
                      <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                      <div>
                        <div style={{
                          color: theme.colors.success,
                          fontWeight: '600',
                          fontSize: '0.95rem',
                          marginBottom: '0.125rem'
                        }}>{item.name}</div>
                        <div style={{
                          color: theme.colors.gray600,
                          fontSize: '0.85rem'
                        }}>{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e3f2fd 50%, #f8fafc 100%)'
    }}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="py-5">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: theme.radii.lg,
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <span style={{
                    ...styles.tag,
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    marginBottom: '1rem',
                    display: 'inline-block'
                  }}>
                    CCC Syllabus
                  </span>
                  <h1 style={{
                    color: 'white',
                    fontWeight: '800',
                    fontSize: '2.5rem',
                    lineHeight: '1.2',
                    marginBottom: '0.5rem'
                  }}>
                    Chapter 1: Introduction to Computer
                  </h1>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1.125rem',
                    marginBottom: '1.5rem',
                    maxWidth: '600px'
                  }}>
                    Understanding the fundamental concepts, history, and components of modern computing systems.
                  </p>
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.875rem'
                    }}>
                      <span>📅</span>
                      <span>Last Updated: Dec 25, 2025</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.875rem'
                    }}>
                      <span>📚</span>
                      <span>{sections.length} Sections</span>
                    </div>
                  </div>
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
            <div className="d-flex flex-column gap-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  style={{
                    ...styles.sectionCard,
                    borderLeftColor: section.borderColor,
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = theme.shadows.lg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                  }}
                >
                  {/* Card Header */}
                  <div style={{
                    background: section.bgColor,
                    padding: '1.5rem',
                    borderBottom: `1px solid ${section.borderColor}20`
                  }}>
                    <div className="d-flex align-items-start justify-content-between gap-3">
                      <div className="d-flex align-items-start gap-3">
                        <div style={{
                          ...styles.iconWrapper,
                          background: section.borderColor,
                          color: 'white'
                        }}>
                          {section.icon}
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <h2 style={{
                              color: theme.colors.gray900,
                              fontWeight: '700',
                              margin: 0,
                              fontSize: '1.5rem'
                            }}>
                              {section.title}
                            </h2>
                            <span style={{
                              ...styles.tag,
                              background: `${section.borderColor}15`,
                              color: section.borderColor,
                              fontSize: '0.75rem'
                            }}>
                              {section.tag}
                            </span>
                          </div>
                          <div style={{
                            color: theme.colors.gray600,
                            fontSize: '0.875rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <span>Section {section.id}</span>
                            <span>•</span>
                            <span>{section.id === 1 ? 'Core Concepts' : 'Detailed Study'}</span>
                          </div>
                        </div>
                      </div>
                      <div style={{
                        fontSize: '1.25rem',
                        color: section.borderColor,
                        opacity: 0.5
                      }}>
                        {section.id < 9 ? `0${section.id}` : section.id}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.5rem' }}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}