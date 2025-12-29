import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <section className="chapter-box">
      <h2>📘 Computer Fundamentals – Basics Overview</h2>
      <p className="updated-text">
        This foundation chapter introduces the core concepts of computers in a
        simple and easy-to-understand way.
      </p>

      {/* 1. Introduction */}
      <h3>1️⃣ Introduction</h3>
      <p>
        <b>Computer</b> ek electronic machine hai jo input leta hai, data ko
        process karta hai aur meaningful output provide karta hai. Computers
        pehle sirf calculations ke liye use hote the, lekin aaj ye complex tasks
        jaise communication, automation aur data processing karte hain.
      </p>
      <ul>
        <li>Computer and its Types</li>
        <li>Applications of Computers</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Introduction to Computer
      </Link>

      <hr />

      {/* 2. Components */}
      <h3>2️⃣ Components of Computer</h3>
      <p>
        Computer ke teen main components hote hain: <b>Input Devices</b>,{" "}
        <b>CPU</b> aur <b>Output Devices</b>. Input devices data enter karte
        hain, CPU data process karta hai aur output devices result dikhate hain.
      </p>
      <ul>
        <li><b>Hardware</b> – Physical parts of computer</li>
        <li><b>Software</b> – Programs that run on hardware</li>
        <li><b>CPU</b> – Brain of the computer</li>
        <li><b>Computer Memory</b> – Stores data and instructions</li>
        <li><b>Input Devices</b> – Keyboard, Mouse, Scanner</li>
        <li><b>Output Devices</b> – Monitor, Printer, Speaker</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Computer Components
      </Link>

      <hr />

      {/* 3. Operating System */}
      <h3>3️⃣ Operating Systems</h3>
      <p>
        <b>Operating System (OS)</b> ek system software hota hai jo hardware aur
        user ke beech interface provide karta hai. Ye programs ko run karne aur
        system resources manage karne me help karta hai.
      </p>
      <ul>
        <li>Windows</li>
        <li>Linux</li>
        <li>iOS</li>
        <li>macOS</li>
        <li>ChromeOS</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Operating System
      </Link>

      <hr />

      {/* 4. Internet & WWW */}
      <h3>4️⃣ Internet & World Wide Web (WWW)</h3>
      <p>
        <b>Internet</b> ek global network hai jo duniya bhar ke computers ko
        connect karta hai. <b>World Wide Web (WWW)</b> internet par chalne wali
        ek service hai jisme websites aur web pages hote hain.
      </p>
      <ul>
        <li>Web Browser</li>
        <li>Web Server</li>
        <li>Web Protocols</li>
        <li>Web Security</li>
        <li>Databases</li>
        <li>Internet & WiFi</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Internet & WWW
      </Link>

      <hr />

      {/* 5. Office Tools */}
      <h3>5️⃣ Office Tools</h3>
      <p>
        <b>Office Tools</b> wo software hote hain jo documents banane, data manage
        karne aur presentations create karne me madad karte hain.
      </p>
      <ul>
        <li>Word Processing – MS Word, Google Docs</li>
        <li>Spreadsheets – MS Excel, Google Sheets</li>
        <li>Presentations – PowerPoint, Google Slides</li>
        <li>Email Clients – Outlook, Gmail</li>
        <li>Cloud Tools – Drive, OneDrive, Dropbox</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Office Tools
      </Link>

      <hr />

      {/* 6. Shortcut Keys */}
      <h3>6️⃣ Shortcut Keys</h3>
      <p>
        <b>Shortcut Keys</b> keyboard key combinations hote hain jo kaam ko fast
        aur efficient banate hain, jaise Copy, Paste aur Save.
      </p>
      <ul>
        <li>Shortcut Keys</li>
        <li>Function Keys</li>
        <li>Windows Shortcut Keys</li>
        <li>Ubuntu Shortcut Keys</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Shortcut Keys
      </Link>

      <hr />

      {/* 7. Key Comparison */}
      <h3>7️⃣ Key Comparison</h3>
      <p>
        Ye section important computer terms ke beech difference explain karta
        hai, jo exams aur interviews ke liye kaafi useful hota hai.
      </p>
      <ul>
        <li>RAM vs ROM</li>
        <li>HDD vs SSD</li>
        <li>CD vs DVD vs Blu-Ray</li>
        <li>Software vs Operating System</li>
        <li>Barcode vs QR Code</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Comparisons
      </Link>

      <hr />

      {/* 8. Programming */}
      <h3>8️⃣ Introduction to Programming</h3>
      <p>
        <b>Programming</b> computer ko instructions dene ka process hai, jisse
        software aur applications develop kiye jaate hain.
      </p>
      <ul>
        <li>C, C++</li>
        <li>C#, Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Logic Building Problems</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Programming Basics
      </Link>

      <hr />

      {/* 9. Networks */}
      <h3>9️⃣ Computer Networks</h3>
      <p>
        <b>Computer Network</b> computers aur devices ko connect karta hai jisse
        data aur resources share kiye ja sakte hain.
      </p>
      <ul>
        <li>LAN, WAN, MAN</li>
        <li>Network Topologies</li>
        <li>Protocols</li>
        <li>Network Devices</li>
      </ul>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Computer Networks
      </Link>

      <hr />

      {/* 10. Security */}
      <h3>🔟 Security and Privacy</h3>
      <p>
        <b>Computer Security</b> systems ko viruses, hacking aur unauthorized
        access se protect karti hai.
      </p>
      <ul>
        <li>Common Security Threats</li>
        <li>Malware</li>
        <li>Network Security</li>
        <li>User Authentication</li>
        <li>Online Privacy</li>
      </ul>
      <p className="warning-text">
        ⚠ Don’t click unknown email links — they might be viruses!
      </p>
      <Link to="#" className="chapter-link-btn">
        👉 Go to Chapter: Security & Privacy
      </Link>

    </section>
  );
}
