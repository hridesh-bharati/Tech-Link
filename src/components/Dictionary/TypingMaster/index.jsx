import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

// Chapters
import Intro from "./Chapters/Intro.jsx";
import KeyboardBasics from "./Chapters/KeyboardBasics.jsx";
import HomeRow from "./Chapters/HomeRow.jsx";
import UpperRow from "./Chapters/UpperRow.jsx";
import LowerRow from "./Chapters/LowerRow.jsx";
import NumbersSymbols from "./Chapters/NumbersSymbols.jsx";
import Speed from "./Chapters/Speed.jsx";
import Accuracy from "./Chapters/Accuracy.jsx";
import Practice from "./Chapters/Practice.jsx";
import Test from "./Chapters/Test.jsx";

/* ===== Chapter Data ===== */
const chapters = [
    {
        id: 1,
        title: "Introduction",
        icon: "⌨️",
        subChapters: [
            { id: 101, title: "Typing Master Intro", component: <Intro /> },
            { id: 102, title: "Keyboard Basics", component: <KeyboardBasics /> }
        ]
    },
    {
        id: 2,
        title: "Finger Placement",
        icon: "🖐️",
        subChapters: [
            { id: 201, title: "Home Row Keys", component: <HomeRow /> },
            { id: 202, title: "Upper Row Keys", component: <UpperRow /> },
            { id: 203, title: "Lower Row Keys", component: <LowerRow /> }
        ]
    },
    {
        id: 3,
        title: "Advanced Keys",
        icon: "🔢",
        subChapters: [
            { id: 301, title: "Numbers & Symbols", component: <NumbersSymbols /> }
        ]
    },
    {
        id: 4,
        title: "Performance",
        icon: "⚡",
        subChapters: [
            { id: 401, title: "Typing Speed", component: <Speed /> },
            { id: 402, title: "Typing Accuracy", component: <Accuracy /> }
        ]
    },
    {
        id: 5,
        title: "Practice & Test",
        icon: "🎯",
        subChapters: [
            { id: 501, title: "Practice Mode", component: <Practice /> },
            { id: 502, title: "Typing Test", component: <Test /> }
        ]
    }
];

/* ===== MAIN COMPONENT ===== */
export default function TypingMaster() {
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
        <div className="typing-wrapper">
            {/* ===== TOP BAR ===== */}
            <div className="topbar d-flex align-items-center px-2">
                <button
                    className="btn btn-light btn-sm me-2"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <i className={`bi ${sidebarOpen ? "bi-layout-sidebar-inset" : "bi-list"} fs-5`} />
                </button>
                <h6 className="mb-0 fw-bold flex-grow-1 text-center">
                    ⌨️ Typing Master Tutorial
                </h6>
            </div>

            <div className="d-flex">
                {/* ===== SIDEBAR ===== */}
                <aside className={`sidebar ${sidebarOpen ? "" : "closed"}`}>
                    <div className="sidebar-title">Lessons</div>

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
                            <p className="text-muted">Kisi lesson ko sidebar se select karo 👈</p>
                        </div>
                    ) : (
                        <div className="card p-3">{activeSub.component}</div>
                    )}
                </main>
            </div>
        </div>
    );
}
