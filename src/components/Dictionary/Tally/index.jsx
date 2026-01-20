// src\components\Dictionary\Tally\index.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  const [drawer, setDrawer] = useState(false);
  const [activeSub, setActiveSub] = useState(chapters[0].subChapters[0]);
  const [openDropdown, setOpenDropdown] = useState(1);
  const [desktop, setDesktop] = useState(window.innerWidth >= 992);
  const navigate = useNavigate();

  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSub]);

  return (
    <div className="android-app tally-theme">
      {/* 🔹 TOP BAR */}
      <header className="app-bar">
        <div className="app-bar-left">
          <button className="icon-btn ripple" onClick={() => setDrawer(true)}>☰</button>
          <div className="app-bar-title">
            <span>{activeSub.title}</span>
            <small>Tally Prime Tutorial</small>
          </div>
        </div>
        <button className="exit-top-btn" onClick={() => navigate("/learn")}>
          <FaHome />
        </button>
      </header>

      {/* 🔹 DRAWER OVERLAY */}
      <div className={`drawer-overlay ${drawer ? "visible" : ""}`} onClick={() => setDrawer(false)} />

      {/* 🔹 ANDROID SIDEBAR (DRAWER) */}
      <aside className={`drawer ${drawer ? "open" : ""}`}>
        <div className="drawer-header tally-bg">
          <div className="drawer-logo">TP</div>
          <div className="drawer-header-text">
             <h4>Tally Prime</h4>
             <p>Accounting Masterclass</p>
          </div>
        </div>

        <div className="drawer-list">
          {chapters.map(ch => (
            <div key={ch.id} className="accordion-item">
              <button 
                className={`drawer-item ripple ${activeSub.id.toString().startsWith(ch.id) ? "active-parent" : ""}`}
                onClick={() => setOpenDropdown(openDropdown === ch.id ? null : ch.id)}
              >
                <span className="ch-icon">{ch.icon}</span>
                <span className="flex-grow-1">{ch.title}</span>
                {openDropdown === ch.id ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
              </button>

              {openDropdown === ch.id && (
                <div className="sub-list">
                  {ch.subChapters.map(sub => (
                    <div
                      key={sub.id}
                      className={`sub-item ripple ${activeSub.id === sub.id ? "active" : ""}`}
                      onClick={() => {
                        setActiveSub(sub);
                        setDrawer(false);
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

      {/* 🔹 CONTENT AREA */}
      <main className="content-area">
        <div className="content-card ripple-entry">
          {activeSub.component}
        </div>
      </main>
    </div>
  );
}