// hb\src\components\Dictionary\Tally\Chapter1.jsx
import React from "react";
import CodeBox from "../CodeBox/CodeBox";
import './Chapter1.css';

export default function Chapter1() {
    return (
        <div className="chapter-content container-fluid px-3 pb-5">
            
            {/* ========== MAIN HEADER ========== */}
            <div className="chapter-header mb-4">
                <div className="d-flex align-items-center mb-3">
                    <div className="tally-prime-icon me-3">
                        <i className="bi bi-calculator-fill tally-prime-logo"></i>
                    </div>
                    <div>
                        <h1 className="h1 fw-bold text-primary gradient-text">
                            📊 अध्याय 1: टैली प्राइम - पूर्ण परिचय
                        </h1>
                        <p className="lead text-muted">भारत का सबसे विश्वसनीय बिज़नेस मैनेजमेंट सॉफ्टवेयर</p>
                        <div className="tally-prime-badge">
                            <span className="badge bg-primary me-2">नवीनतम संस्करण</span>
                            <span className="badge bg-success">टैली प्राइम</span>
                        </div>
                    </div>
                </div>

                {/* COMPANY STRUCTURE CARD */}
                <div className="company-structure-card mb-4">
                    <h4 className="fw-bold mb-3">🏢 टैली सॉल्यूशंस प्राइवेट लिमिटेड - संगठनात्मक संरचना</h4>
                    <div className="row g-3">
                        <div className="col-md-3">
                            <div className="company-detail">
                                <i className="bi bi-geo-alt"></i>
                                <div>
                                    <h6>स्थापना वर्ष</h6>
                                    <p className="mb-0">1986, बैंगलोर</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="company-detail">
                                <i className="bi bi-person-badge"></i>
                                <div>
                                    <h6>संस्थापक</h6>
                                    <p className="mb-0">श्याम गोयनका<br/>भरत गोयनका</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="company-detail">
                                <i className="bi bi-building"></i>
                                <div>
                                    <h6>मुख्यालय</h6>
                                    <p className="mb-0">बैंगलोर, भारत</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="company-detail">
                                <i className="bi bi-globe"></i>
                                <div>
                                    <h6>वैश्विक उपस्थिति</h6>
                                    <p className="mb-0">100+ देश</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* OFFICIAL COMPANY HIERARCHY */}
                    <div className="company-hierarchy mt-4">
                        <h6 className="mb-2">🔰 आधिकारिक कंपनी संरचना:</h6>
                        <div className="hierarchy-levels">
                            <div className="level">संस्थापक एवं निदेशक</div>
                            <div className="level-arrow">↓</div>
                            <div className="level">CEO & प्रबंध निदेशक</div>
                            <div className="level-arrow">↓</div>
                            <div className="level">उत्पाद विकास विभाग</div>
                            <div className="level-arrow">↓</div>
                            <div className="level">ग्राहक समर्थन</div>
                            <div className="level-arrow">↓</div>
                            <div className="level">ट्रेनिंग एवं प्रमाणन</div>
                        </div>
                    </div>
                </div>

                {/* STATISTICS DASHBOARD */}
                <div className="row g-3">
                    <div className="col-md-3">
                        <div className="tally-stat-card prime">
                            <i className="bi bi-building fs-3 mb-2"></i>
                            <h4 className="h6 mb-0">80 लाख+</h4>
                            <small className="text-muted">व्यवसाय उपयोगकर्ता</small>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tally-stat-card prime">
                            <i className="bi bi-translate fs-3 mb-2"></i>
                            <h4 className="h6 mb-0">12+</h4>
                            <small className="text-muted">भाषाएँ</small>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tally-stat-card prime">
                            <i className="bi bi-award fs-3 mb-2"></i>
                            <h4 className="h6 mb-0">35+ वर्ष</h4>
                            <small className="text-muted">उद्योग नेता</small>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tally-stat-card prime">
                            <i className="bi bi-people-fill fs-3 mb-2"></i>
                            <h4 className="h6 mb-0">25 लाख+</h4>
                            <small className="text-muted">प्रशिक्षित उपयोगकर्ता</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== PART 1: COMPLETE HISTORY & ORIGINATION ========== */}
            <div className="history-section mb-5">
                <div className="section-header">
                    <h3 className="section-title">📜 टैली का पूरा इतिहास एवं उद्गम</h3>
                    <p className="section-subtitle">1986 से वर्तमान तक का सफर</p>
                </div>
                
                <div className="history-details">
                    <div className="history-card">
                        <h5>🎯 उद्गम कथा</h5>
                        <p>
                            टैली की शुरुआत <strong>1986</strong> में <strong>बैंगलोर</strong> में हुई जब 
                            <strong> श्याम गोयनका</strong> और <strong>भरत गोयनका</strong> ने एक ऐसा सॉफ्टवेयर 
                            बनाने का निर्णय लिया जो भारतीय व्यवसायों की विशेष आवश्यकताओं को पूरा करे।
                        </p>
                    </div>
                    
                    {/* DETAILED TIMELINE */}
                    <div className="detailed-timeline">
                        <div className="timeline-item">
                            <div className="timeline-year">1986</div>
                            <div className="timeline-content">
                                <h5>🌱 संस्थापन</h5>
                                <p><strong>कंपनी:</strong> टैली सॉल्यूशंस</p>
                                <p><strong>स्थान:</strong> बैंगलोर, कर्नाटक</p>
                                <p><strong>उद्देश्य:</strong> भारतीय व्यवसायों के लिए लेखांकन सॉफ्टवेयर</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-year">1988</div>
                            <div className="timeline-content">
                                <h5>🚀 पहला उत्पाद</h5>
                                <p><strong>सॉफ्टवेयर:</strong> पीजीएल-Accounting</p>
                                <p><strong>विशेषता:</strong> डबल एंट्री सिस्टम</p>
                                <p><strong>प्लेटफॉर्म:</strong> MS-DOS</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-year">1990</div>
                            <div className="timeline-content">
                                <h5>💡 टैली 4.5</h5>
                                <p><strong>नवीनता:</strong> रियल-टाइम प्रोसेसिंग</p>
                                <p><strong>लाभ:</strong> तत्काल रिपोर्ट जनरेशन</p>
                                <p><strong>बाजार:</strong> व्यापक स्वीकृति</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-year">1996</div>
                            <div className="timeline-content">
                                <h5>🌐 विंडोज संस्करण</h5>
                                <p><strong>प्लेटफॉर्म:</strong> Windows 95/98</p>
                                <p><strong>इंटरफेस:</strong> GUI बेस्ड</p>
                                <p><strong>भाषा:</strong> मल्टी-लैंग्वेज सपोर्ट</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-year">1999</div>
                            <div className="timeline-content">
                                <h5>📊 टैली 6.3</h5>
                                <p><strong>कर सुविधा:</strong> VAT कम्प्लायंस</p>
                                <p><strong>मुद्रा:</strong> मल्टी-करेंसी</p>
                                <p><strong>रिपोर्ट:</strong> एडवांस रिपोर्टिंग</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-year">2005</div>
                            <div className="timeline-content">
                                <h5>🏢 टैली 9</h5>
                                <p><strong>स्टैच्यूटरी:</strong> कर अनुपालन</p>
                                <p><strong>इन्वेंटरी:</strong> एडवांस मैनेजमेंट</p>
                                <p><strong>सुरक्षा:</strong> डाटा प्रोटेक्शन</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-year">2009</div>
                            <div className="timeline-content">
                                <h5>⚡ टैली ERP 9</h5>
                                <p><strong>ERP:</strong> एंटरप्राइज रिसोर्स प्लानिंग</p>
                                <p><strong>स्केलेबिलिटी:</strong> बड़े व्यवसायों के लिए</p>
                                <p><strong>इंटीग्रेशन:</strong> मल्टी-मॉड्यूल</p>
                            </div>
                        </div>
                        
                        <div className="timeline-item active">
                            <div className="timeline-year">2020</div>
                            <div className="timeline-content">
                                <h5>🚀 टैली प्राइम</h5>
                                <p><strong>नया इंटरफेस:</strong> आधुनिक UI/UX</p>
                                <p><strong>प्रोडक्टिविटी:</strong> स्मार्ट फीचर्स</p>
                                <p><strong>जीएसटी:</strong> ऑटोमेटेड कम्प्लायंस</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== PART 2: VERSION EVOLUTION ========== */}
            <div className="version-evolution mb-5">
                <div className="section-header">
                    <h3 className="section-title">🔄 संस्करण विकास यात्रा</h3>
                    <p className="section-subtitle">टैली 4.5 से टैली प्राइम तक</p>
                </div>
                
                <div className="version-comparison-grid">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="version-card legacy">
                                <div className="version-header">
                                    <h5>टैली 4.5</h5>
                                    <span className="version-year">1990</span>
                                </div>
                                <div className="version-details">
                                    <p><strong>प्लेटफॉर्म:</strong> MS-DOS</p>
                                    <p><strong>मुख्य विशेषता:</strong> रियल-टाइम प्रोसेसिंग</p>
                                    <p><strong>सीमाएँ:</strong> सिंगल यूजर</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="version-card legacy">
                                <div className="version-header">
                                    <h5>टैली 6.3</h5>
                                    <span className="version-year">1999</span>
                                </div>
                                <div className="version-details">
                                    <p><strong>प्लेटफॉर्म:</strong> Windows</p>
                                    <p><strong>मुख्य विशेषता:</strong> VAT कम्प्लायंस</p>
                                    <p><strong>नवीनता:</strong> मल्टी-करेंसी</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="version-card legacy">
                                <div className="version-header">
                                    <h5>टैली 9</h5>
                                    <span className="version-year">2006</span>
                                </div>
                                <div className="version-details">
                                    <p><strong>प्लेटफॉर्म:</strong> Windows XP/Vista</p>
                                    <p><strong>मुख्य विशेषता:</strong> स्टैच्यूटरी कम्प्लायंस</p>
                                    <p><strong>सुधार:</strong> बेहतर रिपोर्टिंग</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-4 mt-3">
                        <div className="col-md-6">
                            <div className="version-card modern">
                                <div className="version-header">
                                    <h5>टैली ERP 9</h5>
                                    <span className="version-year">2009</span>
                                </div>
                                <div className="version-details">
                                    <ul>
                                        <li>✅ पूर्ण ERP समाधान</li>
                                        <li>✅ जीएसटी तैयारी</li>
                                        <li>✅ मल्टी-कंपनी ऑपरेशन</li>
                                        <li>✅ डाटा माइग्रेशन</li>
                                        <li>✅ रिमोट एक्सेस</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="version-card prime-version">
                                <div className="version-header">
                                    <h5>टैली प्राइम</h5>
                                    <span className="version-year">2020+</span>
                                </div>
                                <div className="version-details">
                                    <ul>
                                        <li>🚀 <strong>Go To</strong> - त्वरित नेविगेशन</li>
                                        <li>🔍 <strong>स्मार्ट सर्च</strong> - तुरंत ढूंढें</li>
                                        <li>📊 <strong>बिज़नेस इनसाइट्स</strong> - रियल-टाइम डैशबोर्ड</li>
                                        <li>🔄 <strong>मल्टी-टास्किंग</strong> - समानांतर कार्य</li>
                                        <li>⚡ <strong>2x फास्टर</strong> - बेहतर प्रदर्शन</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== PART 3: COMPLETE FEATURES ========== */}
            <div className="features-section mb-5">
                <div className="section-header">
                    <h3 className="section-title">⭐ टैली प्राइम की पूर्ण विशेषताएँ</h3>
                    <p className="section-subtitle">सभी मॉड्यूल और क्षमताएँ</p>
                </div>
                
                <div className="features-categories">
                    {/* ACCOUNTING FEATURES */}
                    <div className="category-card">
                        <div className="category-header">
                            <i className="bi bi-journal-text"></i>
                            <h5>लेखांकन विशेषताएँ</h5>
                        </div>
                        <div className="category-content">
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <div>
                                    <h6>डबल एंट्री सिस्टम</h6>
                                    <small>स्वचालित डेबिट-क्रेडिट बैलेंस</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <div>
                                    <h6>वाउचर एंट्री</h6>
                                    <small>30+ प्रकार के वाउचर</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <div>
                                    <h6>फाइनेंशियल रिपोर्ट्स</h6>
                                    <small>बैलेंस शीट, P&L, कैश फ्लो</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <div>
                                    <h6>बैंक रिकॉन्सिलिएशन</h6>
                                    <small>ऑटो बैंक मिलान</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* INVENTORY FEATURES */}
                    <div className="category-card">
                        <div className="category-header">
                            <i className="bi bi-box-seam"></i>
                            <h5>इन्वेंटरी प्रबंधन</h5>
                        </div>
                        <div className="category-content">
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <div>
                                    <h6>स्टॉक मैनेजमेंट</h6>
                                    <small>रियल-टाइम स्टॉक अपडेट</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <div>
                                    <h6>बिल ऑफ मैटेरियल</h6>
                                    <small>उत्पादन के लिए BOM</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <div>
                                    <h6>गोदाम प्रबंधन</h6>
                                    <small>मल्टी-लोकेशन स्टॉक</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <div>
                                    <h6>ऑर्डर प्रोसेसिंग</h6>
                                    <small>पूर्ण ऑर्डर लाइफसाइकल</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* GST FEATURES */}
                    <div className="category-card">
                        <div className="category-header">
                            <i className="bi bi-percent"></i>
                            <h5>जीएसटी अनुपालन</h5>
                        </div>
                        <div className="category-content">
                            <div className="feature-item">
                                <span className="feature-icon">✅</span>
                                <div>
                                    <h6>GSTR-1, 3B, 9</h6>
                                    <small>स्वचालित रिटर्न जनरेशन</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✅</span>
                                <div>
                                    <h6>ई-वे बिल</h6>
                                    <small>ऑटोमेटिक जनरेशन</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✅</span>
                                <div>
                                    <h6>ई-इनवॉइसिंग</h6>
                                    <small>IRN/QR कोड जनरेशन</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✅</span>
                                <div>
                                    <h6>TDS/TCS</h6>
                                    <small>स्वचालित कटौती</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* ADDITIONAL FEATURES */}
                    <div className="category-card">
                        <div className="category-header">
                            <i className="bi bi-tools"></i>
                            <h5>अतिरिक्त विशेषताएँ</h5>
                        </div>
                        <div className="category-content">
                            <div className="feature-item">
                                <span className="feature-icon">🔧</span>
                                <div>
                                    <h6>पेरोल प्रोसेसिंग</h6>
                                    <small>सैलरी, PF, ESI, PT</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🔧</span>
                                <div>
                                    <h6>मल्टी-कंपनी</h6>
                                    <small>एक ही सॉफ्टवेयर में कई कंपनियाँ</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🔧</span>
                                <div>
                                    <h6>डाटा सिक्योरिटी</h6>
                                    <small>एन्क्रिप्शन और बैकअप</small>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🔧</span>
                                <div>
                                    <h6>कस्टम रिपोर्ट्स</h6>
                                    <small>यूजर-डिफाइंड रिपोर्ट्स</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== PART 4: TECHNICAL SPECIFICATIONS ========== */}
            <div className="technical-specs mb-5">
                <div className="section-header">
                    <h3 className="section-title">⚙️ तकनीकी विवरण</h3>
                    <p className="section-subtitle">सिस्टम आवश्यकताएँ और तकनीकी विवरण</p>
                </div>
                
                <div className="specs-grid">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="specs-card">
                                <h5><i className="bi bi-pc-display me-2"></i>सिस्टम आवश्यकताएँ</h5>
                                <table className="specs-table">
                                    <tbody>
                                        <tr>
                                            <th>ऑपरेटिंग सिस्टम</th>
                                            <td>Windows 7/8/10/11 (64-bit)</td>
                                        </tr>
                                        <tr>
                                            <th>प्रोसेसर</th>
                                            <td>1.8 GHz या अधिक (2.4 GHz अनुशंसित)</td>
                                        </tr>
                                        <tr>
                                            <th>RAM</th>
                                            <td>4 GB न्यूनतम (8 GB अनुशंसित)</td>
                                        </tr>
                                        <tr>
                                            <th>हार्ड डिस्क</th>
                                            <td>500 MB खाली स्थान</td>
                                        </tr>
                                        <tr>
                                            <th>डिस्प्ले</th>
                                            <td>1024x768 रिजोल्यूशन</td>
                                        </tr>
                                        <tr>
                                            <th>.NET फ्रेमवर्क</th>
                                            <td>4.6.1 या उच्चतर</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="specs-card">
                                <h5><i className="bi bi-database me-2"></i>डाटा संरचना</h5>
                                <table className="specs-table">
                                    <tbody>
                                        <tr>
                                            <th>फाइल फॉर्मेट</th>
                                            <td>.TALLY9 (प्रोप्राइटरी)</td>
                                        </tr>
                                        <tr>
                                            <th>बैकअप फॉर्मेट</th>
                                            <td>.BAK (कम्प्रेस्ड)</td>
                                        </tr>
                                        <tr>
                                            <th>डाटा सिक्योरिटी</th>
                                            <td>128-bit एन्क्रिप्शन</td>
                                        </tr>
                                        <tr>
                                            <th>मैक्स कंपनियाँ</th>
                                            <td>असीमित (HDD स्पेस के अनुसार)</td>
                                        </tr>
                                        <tr>
                                            <th>कनेक्टिविटी</th>
                                            <td>TCP/IP, ODBC, HTTP</td>
                                        </tr>
                                        <tr>
                                            <th>लाइसेंस</th>
                                            <td>सिंगल/मल्टी यूजर</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== PART 5: KEYBOARD SHORTCUTS ========== */}
            <div className="shortcuts-section mb-5">
                <div className="section-header">
                    <h3 className="section-title">⌨️ महत्वपूर्ण कीबोर्ड शॉर्टकट</h3>
                    <p className="section-subtitle">त्वरित कार्य के लिए शॉर्टकट</p>
                </div>
                
                <div className="shortcuts-grid">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>Alt</kbd> + <kbd>F3</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>कंपनी इनफार्मेशन</h6>
                                    <small>कंपनी सेटिंग्स मेनू</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>F1</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>कंपनी सिलेक्ट</h6>
                                    <small>कंपनी चुनें/बदलें</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>F11</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>फीचर्स</h6>
                                    <small>फीचर्स सक्षम/अक्षम करें</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>F12</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>कॉन्फिगर</h6>
                                    <small>कॉन्फिगरेशन सेटिंग्स</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>Ctrl</kbd> + <kbd>N</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>नया बनाएँ</h6>
                                    <small>नया मास्टर/वाउचर</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>Ctrl</kbd> + <kbd>A</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>अल्टर/बदलें</h6>
                                    <small>मौजूदा रिकॉर्ड एडिट करें</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>Alt</kbd> + <kbd>G</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>Go To</h6>
                                    <small>त्वरित नेविगेशन</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>Ctrl</kbd> + <kbd>E</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>एक्सपोर्ट</h6>
                                    <small>डाटा निर्यात करें</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="shortcut-card">
                                <div className="shortcut-keys">
                                    <kbd>Ctrl</kbd> + <kbd>I</kbd>
                                </div>
                                <div className="shortcut-info">
                                    <h6>इम्पोर्ट</h6>
                                    <small>डाटा आयात करें</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== PART 6: CAREER & BENEFITS ========== */}
            <div className="career-benefits mb-5">
                <div className="section-header">
                    <h3 className="section-title">💼 करियर अवसर एवं लाभ</h3>
                    <p className="section-subtitle">टैली सीखने के व्यावसायिक फायदे</p>
                </div>
                
                <div className="benefits-grid">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="bi bi-cash-stack"></i>
                                </div>
                                <h5>वेतन वृद्धि</h5>
                                <ul>
                                    <li>सैलरी: 30-50% तक बढ़ोतरी</li>
                                    <li>फ्रेशर्स: ₹15,000 - ₹25,000</li>
                                    <li>एक्सपीरियंस्ड: ₹40,000 - ₹80,000</li>
                                    <li>कंसल्टेंट: ₹50,000+</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="bi bi-briefcase"></i>
                                </div>
                                <h5>नौकरी के अवसर</h5>
                                <ul>
                                    <li>अकाउंटेंट</li>
                                    <li>टैली ऑपरेटर</li>
                                    <li>जीएसटी स्पेशलिस्ट</li>
                                    <li>ERP कंसल्टेंट</li>
                                    <li>ट्रेनर</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="bi bi-award"></i>
                                </div>
                                <h5>प्रमाणन</h5>
                                <ul>
                                    <li>टैली प्राइम प्रोफेशनल</li>
                                    <li>टैली सर्टिफाइड एक्सपर्ट</li>
                                    <li>जीएसटी स्पेशलिस्ट</li>
                                    <li>पेरोल स्पेशलिस्ट</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row g-4 mt-3">
                        <div className="col-md-6">
                            <div className="industry-card">
                                <h5>🏭 उद्योग जहाँ टैली उपयोगी है:</h5>
                                <div className="industry-tags">
                                    <span className="industry-tag">विनिर्माण</span>
                                    <span className="industry-tag">खुदरा</span>
                                    <span className="industry-tag">व्यापार</span>
                                    <span className="industry-tag">सेवा क्षेत्र</span>
                                    <span className="industry-tag">शिक्षा</span>
                                    <span className="industry-tag">स्वास्थ्य</span>
                                    <span className="industry-tag">रियल एस्टेट</span>
                                    <span className="industry-tag">होटल</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="learning-path-card">
                                <h5>📚 सीखने का पथ:</h5>
                                <div className="learning-steps">
                                    <div className="step">1. बेसिक अकाउंटिंग</div>
                                    <div className="step">2. टैली फंडामेंटल्स</div>
                                    <div className="step">3. जीएसटी इम्प्लीमेंटेशन</div>
                                    <div className="step">4. एडवांस रिपोर्टिंग</div>
                                    <div className="step">5. प्रैक्टिकल प्रोजेक्ट</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== PART 7: IMPORTANT NOTES ========== */}
            <div className="important-notes mb-4">
                <div className="section-header">
                    <h3 className="section-title">📝 महत्वपूर्ण नोट्स</h3>
                    <p className="section-subtitle">परीक्षा और प्रैक्टिस के लिए</p>
                </div>
                
                <div className="notes-grid">
                    <div className="note-card">
                        <h6>🔑 मुख्य बिंदु:</h6>
                        <ol>
                            <li>टैली डबल एंट्री सिस्टम पर काम करता है</li>
                            <li>यह रियल-टाइम प्रोसेसिंग करता है</li>
                            <li>भारतीय कर व्यवस्था के लिए डिज़ाइन किया गया</li>
                            <li>नो-कोड कस्टमाइजेशन समर्थित</li>
                            <li>डाटा माइग्रेशन सुविधा उपलब्ध</li>
                        </ol>
                    </div>
                    
                    <div className="note-card">
                        <h6>⚠️ सावधानियाँ:</h6>
                        <ul>
                            <li>रेगुलर बैकअप लेना जरूरी</li>
                            <li>जीएसटी अपडेट चेक करते रहें</li>
                            <li>लाइसेंस एक्सपायरी ध्यान रखें</li>
                            <li>सही वर्जन इंस्टॉल करें</li>
                            <li>प्रशिक्षण के बाद ही उपयोग करें</li>
                        </ul>
                    </div>
                    
                    <div className="note-card">
                        <h6>🎯 एग्जाम टिप्स:</h6>
                        <ul>
                            <li>शॉर्टकट याद रखें</li>
                            <li>वाउचर प्रविष्टि के चरण याद करें</li>
                            <li>रिपोर्ट जनरेशन प्रक्रिया समझें</li>
                            <li>जीएसटी कैलकुलेशन फॉर्मूला याद रखें</li>
                            <li>प्रैक्टिकल सत्र में अधिक ध्यान दें</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}