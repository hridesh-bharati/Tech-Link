// hb\src\components\Dictionary\Tally\index.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

// Import chapter components
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

/* ===== Chapter Data ===== */
const chapters = [
  {
    id: 1,
    title: "Introduction",
    icon: "📘",
    subChapters: [
      { id: 101, title: "Intro", component: <Intro /> }
    ]
  },
  {
    id: 2,
    title: "Company",
    icon: "🏢",
    subChapters: [
      { id: 201, title: "Company", component: <Company /> }
    ]
  },
  {
    id: 3,
    title: "Accounts & Groups",
    icon: "📊",
    subChapters: [
      { id: 301, title: "Accounts", component: <Accounts /> },
      { id: 302, title: "Ledger", component: <Ledger /> },
      { id: 303, title: "Groups", component: <Groups /> }
    ]
  },
  {
    id: 4,
    title: "Vouchers",
    icon: "🧾",
    subChapters: [
      { id: 401, title: "Vouchers", component: <Vouchers /> },
      { id: 402, title: "Payment", component: <Payment /> },
      { id: 403, title: "Receipt", component: <Receipt /> },
      { id: 404, title: "Contra", component: <Contra /> },
      { id: 405, title: "Journal", component: <Journal /> },
      { id: 406, title: "Sales/Purchase", component: <SalesPurchase /> }
    ]
  }
];

/* ===== MAIN COMPONENT ===== */
export default function Tally() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeChapter, setActiveChapter] = useState(1);
  const [activeSub, setActiveSub] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(1);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const resize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const chapter = chapters.find(c => c.id === activeChapter);

  return (
    <div className="tally-wrapper">
      {/* ===== TOP BAR ===== */}
      <div className="topbar d-flex align-items-center px-2">
        <button
          className="btn btn-light btn-sm me-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          title={sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
        >
          <i className={`bi ${sidebarOpen ? "bi-layout-sidebar-inset" : "bi-list"} fs-5`}></i>
        </button>
        <h6 className="mb-0 fw-bold flex-grow-1 text-center">
          📚 Tally Prime Tutorial
        </h6>
      </div>

      <div className="d-flex">
        {/* ===== SIDEBAR ===== */}
        <aside className={`sidebar ${sidebarOpen ? "" : "closed"}`}>
          <div className="sidebar-title">Chapters</div>

          {chapters.map(ch => (
            <div key={ch.id}>
              <button
                className={`chapter-btn ${activeChapter === ch.id ? "active" : ""}`}
                onClick={() => {
                  setActiveChapter(ch.id);
                  setActiveSub(null);
                  setOpenDropdown(openDropdown === ch.id ? null : ch.id);
                }}
              >
                <span>{ch.icon} {ch.title}</span>
                <i className={`bi ${openDropdown === ch.id ? "bi-chevron-up" : "bi-chevron-down"}`} />
              </button>

              {openDropdown === ch.id && (
                <div className="subchapter-list">
                  {ch.subChapters.map(sub => (
                    <div
                      key={sub.id}
                      className={`subchapter ${activeSub?.id === sub.id ? "active" : ""}`}
                      onClick={() => {
                        setActiveChapter(ch.id);
                        setActiveSub(sub);
                        if (!isDesktop) setSidebarOpen(false);
                      }}
                    >
                      • {sub.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* ===== CONTENT ===== */}
        <main className="content-area">
          {!activeSub ? (
            <div className="card p-3">
              <h4>{chapter.icon} {chapter.title}</h4>
              <p className="text-muted">Sidebar se koi sub-topic select karo 👈</p>
            </div>
          ) : (
            <div className="card p-3">{activeSub.component}</div>
          )}
        </main>
      </div>
    </div>
  );
}
