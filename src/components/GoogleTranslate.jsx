import { useEffect, useState, useRef } from "react";
import { FaLanguage } from "react-icons/fa";

let googleLoaded = false;

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh-CN", label: "中文 (简体)" },
  { code: "ar", label: "العربية" },
  { code: "ru", label: "Русский" },
];

export default function GoogleTranslate() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (googleLoaded) return;
    googleLoaded = true;

    window.SidebarTranslateInit = () => {
      if (!window.google?.translate) return;
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "sidebar_translate_container"
      );
      setIsLoaded(true);
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=SidebarTranslateInit";
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLanguage = (code) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event("change"));
      setCurrentLang(code);
      setShowDropdown(false);
    }
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
      {/* Dropdown toggle */}
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="d-flex align-items-center px-3 py-2 bg-light rounded shadow-sm"
        style={{ cursor: "pointer", userSelect: "none", gap: "8px" }}
      >
        <FaLanguage className="text-primary" />
        <span className="fw-medium">{LANGUAGES.find((l) => l.code === currentLang)?.label}</span>
      </div>

      {/* Dropdown menu */}
      {showDropdown && (
        <div
          className="bg-white rounded shadow-sm"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "6px",
            minWidth: "180px",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className={`w-100 px-3 py-2 text-start border-0 ${
                currentLang === lang.code ? "bg-primary text-white" : "bg-white text-dark"
              }`}
              style={{ cursor: "pointer", transition: "0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f1f1")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  currentLang === lang.code ? "#0d6efd" : "#fff")
              }
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      {/* Hidden Google Translate container */}
      <div id="sidebar_translate_container" style={{ display: "none" }} />
      <style>{`
      
/* Google Translate Fixes */
.goog-te-banner-frame.skiptranslate {
  display: none !important;
}

.goog-te-gadget-icon {
  display: none !important;
}

.goog-te-menu-value {
  color: transparent !important;
}

.goog-te-menu-value span {
  display: none !important;
}

/* Ensure Google Translate dropdown is visible */
.goog-te-menu2 {
  z-index: 999999 !important;
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  max-height: 70vh !important;
  overflow-y: auto !important;
}

/* Hide the language bar at top */
.goog-te-banner-frame {
  visibility: hidden !important;
  height: 0 !important;
  width: 0 !important;
  display: none !important;
}

/* Fix body positioning */
body {
  top: 0 !important;
  position: static !important;
}

/* Button hover effect */
.google-translate-btn:hover {
  background-color: rgba(13, 110, 253, 0.1) !important;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
  
/* ------------ Google Translate Widget Cleanup ------------ */
#goog-gt-tt,
.goog-te-banner-frame,
.goog-te-balloon-frame,
.goog-te-gadget-simple,
.VIpgJd-ZVi9od-ORHb-OEVmcd,
.VIpgJd-ZVi9od-l4eHX-hSRGPd,
.VIpgJd-ZVi9od-l4eHX-hSRGPd:link,
.VIpgJd-ZVi9od-l4eHX-hSRGPd:visited,
.VIpgJd-ZVi9od-l4eHX-hSRGPd:hover,
.VIpgJd-ZVi9od-l4eHX-hSRGPd:active,
.VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
.VIpgJd-yAWNEb-hvhgNd-IuizWc,
.VIpgJd-ZVi9od-l4eHX-hSRGPd img {
  display: none !important;
  visibility: hidden !important;
  width: 0 !important;
  height: 0 !important;
}

.VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
  position: absolute;
  bottom: 0 !important;
}

.goog-te-gadget {
  height: 1rem !important;
  color: transparent !important;
}

.goog-te-gadget .goog-te-combo {
  margin: 4px 0;
  padding: 2px 1px;
  width: 100%;
  border: 0;
}

#google_translate_element select {
  background: white;
  color: black;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.goog-te-combo {
  margin: 0 !important;
  display: flex;
  align-items: center !important;
  width: 60px;
  font-size: 0.7rem !important;
}

      
      `}</style>
    </div>
  );
}
