// src/components/Dictionary/Tally/index.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes, FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

import Intro from "./Chapters/Intro.jsx";
import Company from "./Chapters/Company.jsx";
import Accounts from "./Chapters/Accounts.jsx";
import Ledger from "./Chapters/Ledger.jsx";
import Groups from "./Chapters/Groups.jsx";
import Vouchers from "./Chapters/Vouchers.jsx";
import Payment from "./Chapters/Payment.jsx";
import Receipt from "./Chapters/Receipt.jsx";
import Contra from "./Chapters/Contra.jsx";
import Journal from "./Chapters/Journal.jsx";
import SalesPurchase from "./Chapters/SalesPurchase.jsx";

const chapters = [
  {
    id: 1,
    title: "Introduction",
    icon: "📘",
    subChapters: [{ id: 101, title: "Tally Intro", component: <Intro /> }]
  },
  {
    id: 2,
    title: "Company",
    icon: "🏢",
    subChapters: [{ id: 201, title: "Company Creation", component: <Company /> }]
  },
  {
    id: 3,
    title: "Accounts & Groups",
    icon: "📊",
    subChapters: [
      { id: 301, title: "Accounts Info", component: <Accounts /> },
      { id: 302, title: "Ledger Creation", component: <Ledger /> },
      { id: 303, title: "Groups Management", component: <Groups /> }
    ]
  },
  {
    id: 4,
    title: "Vouchers",
    icon: "🧾",
    subChapters: [
      { id: 401, title: "Voucher Types", component: <Vouchers /> },
      { id: 402, title: "Payment Entry", component: <Payment /> },
      { id: 403, title: "Receipt Entry", component: <Receipt /> },
      { id: 404, title: "Contra Entry", component: <Contra /> },
      { id: 405, title: "Journal Entry", component: <Journal /> },
      { id: 406, title: "Sales/Purchase", component: <SalesPurchase /> }
    ]
  }
];

export default function Tally() {
  const [selectedSub, setSelectedSub] = useState(chapters[0].subChapters[0]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(chapters[0].id);
  const navigate = useNavigate();

  /* Scroll to top on chapter change */
  useEffect(() => {
    const scrollDiv = document.querySelector(".scroll-content-unique");
    if (scrollDiv) scrollDiv.scrollTop = 0;
  }, [selectedSub]);

  /* Lock scroll when sidebar open */
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showSidebar]);

  return (
    <div className="app-container-unique tally-theme">

      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar-wrapper-unique ${showSidebar ? "open" : ""}`}>
        <div className="sidebar-header-unique">
          <div className="header-top tally-bg">
            <div className="badge-c">TP</div>
            <button className="close-btn-unique" onClick={() => setShowSidebar(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="header-meta">
            <strong>Tally Prime</strong>
          </div>
        </div>

        <div className="sidebar-list-unique">
          {chapters.map(ch => (
            <div key={ch.id} className="accordion-item">
              <button
                className={`list-item-unique ${selectedSub.id.toString().startsWith(ch.id) ? "active-parent" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === ch.id ? null : ch.id)}
              >
                <span className="index-circle">{ch.icon}</span>
                <span className="chapter-title">{ch.title}</span>
                {openDropdown === ch.id ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
              </button>

              {openDropdown === ch.id && (
                <div className="sub-list">
                  {ch.subChapters.map(sub => (
                    <div
                      key={sub.id}
                      className={`sub-item ${selectedSub.id === sub.id ? "active" : ""}`}
                      onClick={() => {
                        setSelectedSub(sub);
                        setShowSidebar(false);
                      }}
                    >
                      • {sub.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main-section-unique">
        <nav className="top-nav-unique">
          <div className="nav-left">
            <button className="hamburger-unique" onClick={() => setShowSidebar(true)}>
              <FaBars />
            </button>
            <h5 className="chapter-title-text">{selectedSub.title}</h5>
          </div>

          <button className="home-btn-unique" onClick={() => navigate("/learn")}>
            <FaHome />
          </button>
        </nav>

        <div className="scroll-content-unique">
          <div className="content-card-unique">
            {selectedSub.component}
          </div>
        </div>
      </main>

      {/* ===== OVERLAY ===== */}
      {showSidebar && <div className="overlay-unique" onClick={() => setShowSidebar(false)} />}
    </div>
  );
}
