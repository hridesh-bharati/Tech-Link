import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Chapters Imports
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

const chapters = [
    {
        id: 0,
        title: "Introduction",
        icon: "⌨️",
        subChapters: [
            { id: 101, title: "Typing Master Intro", component: <Intro /> },
            { id: 102, title: "Keyboard Basics", component: <KeyboardBasics /> }
        ]
    },
    {
        id: 1,
        title: "Finger Placement",
        icon: "🖐️",
        subChapters: [
            { id: 201, title: "Home Row Keys", component: <HomeRow /> },
            { id: 202, title: "Upper Row Keys", component: <UpperRow /> },
            { id: 203, title: "Lower Row Keys", component: <LowerRow /> }
        ]
    },
    {
        id: 2,
        title: "Advanced Keys",
        icon: "🔢",
        subChapters: [
            { id: 301, title: "Numbers & Symbols", component: <NumbersSymbols /> }
        ]
    },
    {
        id: 3,
        title: "Performance",
        icon: "⚡",
        subChapters: [
            { id: 401, title: "Typing Speed", component: <Speed /> },
            { id: 402, title: "Typing Accuracy", component: <Accuracy /> }
        ]
    },
    {
        id: 4,
        title: "Practice & Test",
        icon: "🎯",
        subChapters: [
            { id: 501, title: "Practice Mode", component: <Practice /> },
            { id: 502, title: "Typing Test", component: <Test /> }
        ]
    }
];

export default function TypingMaster() {
    const [selected, setSelected] = useState(0); // Active Parent Chapter
    const [activeSub, setActiveSub] = useState(chapters[0].subChapters[0]); // Default first lesson
    const [drawer, setDrawer] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(0);
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
        <div className="android-app typing-theme">
            {/* 🔹 TOP BAR */}
            <header className="app-bar">
                <div className="app-bar-left">
                    <button className="icon-btn ripple" onClick={() => setDrawer(true)}>☰</button>
                    <div className="app-bar-title">
                        <span>{activeSub.title}</span>
                        <small>Typing Master Guide</small>
                    </div>
                </div>
                <button className="exit-top-btn" onClick={() => navigate("/learn")}>
                    <FaHome />
                </button>
            </header>

            {/* 🔹 OVERLAY */}
            <div className={`drawer-overlay ${!desktop && drawer ? "visible" : ""}`} onClick={() => setDrawer(false)} />

            {/* 🔹 SIDEBAR (DRAWER) */}
            <aside className={`drawer ${drawer ? "open" : ""}`}>
                <div className="drawer-header">
                    <div className="drawer-logo">TM</div>
                    <div className="drawer-header-text">
                        <h4>Typing Master</h4>
                        <p>Master the Keyboard</p>
                    </div>
                </div>

                <div className="drawer-list">
                    {chapters.map((ch) => (
                        <div key={ch.id} className="dropdown-section">
                            <button 
                                className={`drawer-item ripple ${selected === ch.id ? "active-parent" : ""}`}
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
                                            className={`sub-item ${activeSub.id === sub.id ? "active-sub" : ""}`}
                                            onClick={() => {
                                                setSelected(ch.id);
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

            {/* 🔹 MAIN CONTENT */}
            <main className="content-area">
                <div className="content-card">
                    {activeSub.component}
                </div>
            </main>
        </div>
    );
}