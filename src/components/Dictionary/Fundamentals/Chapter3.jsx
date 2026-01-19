import { Cpu, Shield, Smartphone, Code, FileLock, TrendingUp, BookOpen, Play, Download, Check, Layers } from "lucide-react";

export default function Chapter3() {
  return (
    <div style={{ 
      background: 'var(--bg-primary)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'var(--gradient-blue)',
        padding: 'var(--space-20) 0'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div style={{
                background: 'var(--text-inverse)',
                color: 'var(--primary)',
                display: 'inline-block',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--border-radius-full)',
                marginBottom: 'var(--space-4)',
                fontSize: 'var(--text-sm)',
                fontWeight: '500'
              }}>
                <BookOpen size={14} style={{marginRight: 'var(--space-2)'}} />
                Chapter 3
              </div>
              
              <h1 style={{
                color: 'var(--text-inverse)',
                fontSize: 'var(--text-4xl)',
                fontWeight: 'bold',
                marginBottom: 'var(--space-4)'
              }}>
                Computer Software
              </h1>
              
              <p style={{
                color: 'var(--text-inverse)',
                opacity: 0.9,
                fontSize: 'var(--text-xl)',
                marginBottom: 'var(--space-4)'
              }}>
                The Complete Guide to Digital Intelligence
              </p>
              
              <p style={{
                color: 'var(--text-inverse)',
                opacity: 0.8,
                fontSize: 'var(--text-lg)',
                marginBottom: 'var(--space-6)'
              }}>
                Discover the world of software - from operating systems that power devices to applications 
                that transform businesses and enhance daily life.
              </p>
              
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <button style={{
                  background: 'var(--text-inverse)',
                  color: 'var(--primary)',
                  padding: 'var(--space-3) var(--space-6)',
                  borderRadius: 'var(--border-radius-lg)',
                  border: 'none',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 'var(--text-base)'
                }}>
                  <Play size={16} style={{marginRight: 'var(--space-2)'}} />
                  Watch Introduction
                </button>
                
                <button style={{
                  border: `2px solid var(--text-inverse)`,
                  color: 'var(--text-inverse)',
                  background: 'transparent',
                  padding: 'var(--space-3) var(--space-6)',
                  borderRadius: 'var(--border-radius-lg)',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 'var(--text-base)'
                }}>
                  <Download size={16} style={{marginRight: 'var(--space-2)'}} />
                  Download Notes
                </button>
              </div>
            </div>
            
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--border-radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: 'var(--space-6)',
                textAlign: 'center'
              }}>
                <div style={{
                  background: 'var(--text-inverse)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  padding: 'var(--space-6)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <Cpu size={40} color="var(--primary)" />
                </div>
                
                <h4 style={{color: 'var(--text-inverse)', marginBottom: 'var(--space-4)'}}>
                  Software At a Glance
                </h4>
                
                <div className="row g-2">
                  <div className="col-6">
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      borderRadius: 'var(--border-radius-lg)',
                      padding: 'var(--space-3)'
                    }}>
                      <Shield size={20} color="var(--text-inverse)" style={{display: 'block', margin: '0 auto var(--space-2)'}} />
                      <small style={{color: 'var(--text-inverse)', display: 'block'}}>System</small>
                      <strong style={{color: 'var(--text-inverse)', fontSize: 'var(--text-lg)'}}>Software</strong>
                    </div>
                  </div>
                  
                  <div className="col-6">
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      borderRadius: 'var(--border-radius-lg)',
                      padding: 'var(--space-3)'
                    }}>
                      <Smartphone size={20} color="var(--text-inverse)" style={{display: 'block', margin: '0 auto var(--space-2)'}} />
                      <small style={{color: 'var(--text-inverse)', display: 'block'}}>Application</small>
                      <strong style={{color: 'var(--text-inverse)', fontSize: 'var(--text-lg)'}}>Software</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        background: 'var(--bg-card)',
        padding: 'var(--space-3) 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: 'var(--shadow-nav)',
        borderBottom: `1px solid var(--border-color)`
      }}>
        <div className="container">
          <div className="row g-2">
            {[
              { id: "3.1", label: "Fundamentals", Icon: BookOpen, color: "primary" },
              { id: "3.2", label: "System Software", Icon: Shield, color: "warning" },
              { id: "3.3", label: "Applications", Icon: Smartphone, color: "success" },
              { id: "3.4", label: "Development", Icon: Code, color: "info" },
              { id: "3.5", label: "Licensing", Icon: FileLock, color: "secondary" },
              { id: "3.6", label: "Trends", Icon: TrendingUp, color: "danger" }
            ].map((item) => {
              const Icon = item.Icon;
              return (
                <div key={item.id} className="col-4 col-md-2">
                  <a href={`#${item.id}`} style={{textDecoration: 'none'}}>
                    <div style={{textAlign: 'center', padding: 'var(--space-2)'}}>
                      <div style={{
                        background: `var(--${item.color}-light)`,
                        borderRadius: '50%',
                        display: 'inline-flex',
                        padding: 'var(--space-2)',
                        marginBottom: 'var(--space-2)'
                      }}>
                        <Icon size={20} color={`var(--${item.color})`} />
                      </div>
                      <small style={{
                        color: 'var(--text-primary)',
                        fontWeight: '500',
                        display: 'block',
                        fontSize: 'var(--text-sm)'
                      }}>
                        {item.label}
                      </small>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{padding: 'var(--space-10) 0'}}>
        {/* Section 3.1 */}
        <section id="3.1" style={{marginBottom: 'var(--space-20)'}}>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: 'var(--space-8)'}}>
            <div style={{
              background: 'var(--primary)',
              borderRadius: 'var(--border-radius-lg)',
              padding: 'var(--space-3)',
              marginRight: 'var(--space-4)'
            }}>
              <span style={{color: 'var(--text-inverse)', fontSize: 'var(--text-2xl)', fontWeight: 'bold'}}>
                3.1
              </span>
            </div>
            <div>
              <h2 style={{
                color: 'var(--primary)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'bold',
                marginBottom: 'var(--space-2)'
              }}>
                Software Fundamentals
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: 'var(--text-lg)'
              }}>
                Core concepts, definitions, and characteristics
              </p>
            </div>
          </div>

          {/* Definition Card */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--border-radius-xl)',
            marginBottom: 'var(--space-8)',
            border: `1px solid var(--border-color)`,
            overflow: 'hidden'
          }}>
            <div style={{
              background: 'var(--gradient-primary)',
              padding: 'var(--space-6)'
            }}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '50%',
                  padding: 'var(--space-2)',
                  marginRight: 'var(--space-3)'
                }}>
                  <Layers size={24} color="var(--text-inverse)" />
                </div>
                <div>
                  <h4 style={{color: 'var(--text-inverse)', marginBottom: 'var(--space-1)'}}>
                    Complete Formal Definition
                  </h4>
                  <p style={{color: 'var(--text-inverse)', opacity: 0.75, margin: 0}}>
                    Understanding what software really is
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{padding: 'var(--space-6)'}}>
              <div className="row">
                <div className="col-lg-8">
                  <div style={{
                    background: 'var(--primary-light)',
                    borderRadius: 'var(--border-radius-lg)',
                    borderLeft: `4px solid var(--primary)`,
                    padding: 'var(--space-4)',
                    marginBottom: 'var(--space-6)'
                  }}>
                    <p style={{
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-lg)',
                      margin: 0
                    }}>
                      <strong style={{color: 'var(--primary)'}}>Computer Software</strong> is the complete set of programs, procedures, algorithms, 
                      and documentation that provides instructions to computer hardware for executing specific 
                      tasks.
                    </p>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <h5 style={{
                        color: 'var(--primary)',
                        fontSize: 'var(--text-xl)',
                        marginBottom: 'var(--space-3)'
                      }}>
                        Essential Components
                      </h5>
                      <div>
                        {[
                          "Executable Programs (Machine Code)",
                          "Source Code (Human-readable)",
                          "Configuration Files & Settings",
                          "Documentation & Manuals",
                          "Digital Assets & Resources",
                          "Libraries & Frameworks"
                        ].map((item, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'flex-start', marginBottom: 'var(--space-2)'}}>
                            <Check size={16} color="var(--primary)" style={{marginRight: 'var(--space-2)', marginTop: '2px'}} />
                            <span style={{
                              color: 'var(--text-primary)',
                              fontSize: 'var(--text-base)'
                            }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <h5 style={{
                        color: 'var(--primary)',
                        fontSize: 'var(--text-xl)',
                        marginBottom: 'var(--space-3)'
                      }}>
                        Key Characteristics
                      </h5>
                      <div className="row g-2">
                        {[
                          { title: "Intangible", desc: "No physical form" },
                          { title: "Non-depleting", desc: "No wear & tear" },
                          { title: "Replicable", desc: "Easily copied" },
                          { title: "Upgradable", desc: "Easy updates" }
                        ].map((char, idx) => (
                          <div key={idx} className="col-6">
                            <div style={{
                              border: `1px solid var(--border-color)`,
                              borderRadius: 'var(--border-radius-lg)',
                              padding: 'var(--space-3)',
                              textAlign: 'center',
                              height: '100%'
                            }}>
                              <div style={{fontSize: '24px', marginBottom: 'var(--space-2)'}}>📋</div>
                              <h6 style={{
                                color: 'var(--text-primary)',
                                fontSize: 'var(--text-base)',
                                marginBottom: 'var(--space-1)'
                              }}>
                                {char.title}
                              </h6>
                              <small style={{
                                color: 'var(--text-muted)',
                                fontSize: 'var(--text-sm)'
                              }}>
                                {char.desc}
                              </small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div style={{
                    border: `1px solid var(--primary)`,
                    borderRadius: 'var(--border-radius-lg)',
                    padding: 'var(--space-4)',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      background: 'var(--primary-light)',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      padding: 'var(--space-4)',
                      marginBottom: 'var(--space-3)'
                    }}>
                      <Layers size={40} color="var(--primary)" />
                    </div>
                    
                    <h5 style={{
                      color: 'var(--primary)',
                      fontSize: 'var(--text-xl)',
                      marginBottom: 'var(--space-3)'
                    }}>
                      Software Evolution
                    </h5>
                    
                    <div>
                      {[
                        { year: "1950s", event: "Machine & Assembly Language" },
                        { year: "1960s", event: "High-Level Languages" },
                        { year: "1970s", event: "Operating Systems Emerge" },
                        { year: "1980s", event: "PC Revolution & GUI" },
                        { year: "1990s", event: "Internet & Web Software" },
                        { year: "2000s", event: "Mobile & Cloud Computing" },
                        { year: "2010s+", event: "AI, IoT, and Big Data" }
                      ].map((item, idx) => (
                        <div key={idx} style={{marginBottom: 'var(--space-3)', textAlign: 'left'}}>
                          <div style={{display: 'flex', alignItems: 'flex-start'}}>
                            <div style={{marginRight: 'var(--space-3)', marginTop: '2px'}}>
                              <div style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: 'var(--primary)'
                              }} />
                            </div>
                            <div>
                              <h6 style={{
                                color: 'var(--text-primary)',
                                fontSize: 'var(--text-base)',
                                marginBottom: '2px'
                              }}>
                                {item.year}
                              </h6>
                              <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: 'var(--text-sm)',
                                margin: 0
                              }}>
                                {item.event}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3.2 */}
        <section id="3.2" style={{marginBottom: 'var(--space-20)'}}>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: 'var(--space-8)'}}>
            <div style={{
              background: 'var(--warning)',
              borderRadius: 'var(--border-radius-lg)',
              padding: 'var(--space-3)',
              marginRight: 'var(--space-4)'
            }}>
              <span style={{color: 'var(--text-inverse)', fontSize: 'var(--text-2xl)', fontWeight: 'bold'}}>
                3.2
              </span>
            </div>
            <div>
              <h2 style={{
                color: 'var(--warning)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'bold',
                marginBottom: 'var(--space-2)'
              }}>
                System Software
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: 'var(--text-lg)'
              }}>
                The backbone of computer operations
              </p>
            </div>
          </div>

          {/* OS Card */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--border-radius-xl)',
            border: `1px solid var(--border-color)`,
            overflow: 'hidden'
          }}>
            <div style={{
              background: 'var(--gradient-accent)',
              padding: 'var(--space-6)'
            }}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: '50%',
                  padding: 'var(--space-2)',
                  marginRight: 'var(--space-3)'
                }}>
                  <Shield size={24} color="var(--text-inverse)" />
                </div>
                <div>
                  <h4 style={{color: 'var(--text-inverse)', marginBottom: 'var(--space-1)'}}>
                    Operating Systems (OS)
                  </h4>
                  <p style={{color: 'var(--text-inverse)', opacity: 0.75, margin: 0}}>
                    The master control program of computers
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{padding: 'var(--space-6)'}}>
              <div className="row">
                <div className="col-lg-8">
                  <div style={{
                    background: 'var(--warning-light)',
                    borderRadius: 'var(--border-radius-lg)',
                    borderLeft: `4px solid var(--warning)`,
                    padding: 'var(--space-4)',
                    marginBottom: 'var(--space-6)'
                  }}>
                    <p style={{
                      color: 'var(--text-primary)',
                      margin: 0
                    }}>
                      <strong style={{color: 'var(--warning)'}}>Operating System</strong> is the most critical system software that acts as an 
                      intermediary between computer hardware and user applications.
                    </p>
                  </div>
                  
                  <div className="row">
                    {[
                      {
                        title: "Process Management",
                        desc: "Creates, schedules, and terminates processes",
                      },
                      {
                        title: "Memory Management",
                        desc: "Allocates and deallocates memory space",
                      },
                      {
                        title: "File Management",
                        desc: "Organizes and manages files on storage",
                      },
                      {
                        title: "Device Management",
                        desc: "Controls all I/O devices via drivers",
                      }
                    ].map((func, idx) => (
                      <div key={idx} className="col-md-6 mb-3">
                        <div style={{
                          borderLeft: `3px solid var(--warning)`,
                          paddingLeft: 'var(--space-3)',
                          paddingTop: 'var(--space-2)',
                          paddingBottom: 'var(--space-2)'
                        }}>
                          <div style={{display: 'flex', alignItems: 'flex-start'}}>
                            <div style={{
                              background: 'var(--warning-light)',
                              borderRadius: '50%',
                              padding: 'var(--space-2)',
                              marginRight: 'var(--space-3)'
                            }}>
                              <Shield size={20} color="var(--warning)" />
                            </div>
                            <div>
                              <h6 style={{
                                color: 'var(--warning)',
                                fontSize: 'var(--text-base)',
                                marginBottom: '2px'
                              }}>
                                {func.title}
                              </h6>
                              <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: 'var(--text-sm)',
                                margin: 0
                              }}>
                                {func.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <div style={{
                    border: `1px solid var(--warning)`,
                    borderRadius: 'var(--border-radius-lg)',
                    padding: 'var(--space-3)'
                  }}>
                    <h5 style={{
                      color: 'var(--warning)',
                      fontSize: 'var(--text-lg)',
                      marginBottom: 'var(--space-3)'
                    }}>
                      Popular OS Comparison
                    </h5>
                    
                    <div style={{overflowX: 'auto'}}>
                      <table style={{width: '100%', fontSize: 'var(--text-sm)'}}>
                        <thead>
                          <tr style={{background: 'var(--warning-light)'}}>
                            <th style={{color: 'var(--warning)', padding: 'var(--space-2)', textAlign: 'left'}}>OS</th>
                            <th style={{color: 'var(--warning)', padding: 'var(--space-2)', textAlign: 'left'}}>Type</th>
                            <th style={{color: 'var(--warning)', padding: 'var(--space-2)', textAlign: 'left'}}>Market</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: "Windows 11", type: "Desktop", share: "75%" },
                            { name: "macOS", type: "Desktop", share: "15%" },
                            { name: "Linux", type: "Server", share: "2%" },
                            { name: "Android", type: "Mobile", share: "71%" }
                          ].map((os, idx) => (
                            <tr key={idx}>
                              <td style={{
                                color: 'var(--text-primary)',
                                padding: 'var(--space-2)'
                              }}>
                                {os.name}
                              </td>
                              <td style={{
                                color: 'var(--text-secondary)',
                                padding: 'var(--space-2)'
                              }}>
                                {os.type}
                              </td>
                              <td style={{padding: 'var(--space-2)'}}>
                                <span style={{
                                  background: 'var(--warning)',
                                  color: 'var(--text-inverse)',
                                  padding: '2px 8px',
                                  borderRadius: 'var(--border-radius-full)',
                                  fontSize: 'var(--text-xs)'
                                }}>
                                  {os.share}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <div style={{
          textAlign: 'center',
          padding: 'var(--space-8)',
          marginTop: 'var(--space-12)'
        }}>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-lg)'
          }}>
            Chapter 3 Complete | Continue to Chapter 4: Computer Networks & Internet
          </p>
        </div>
      </div>
    </div>
  );
}