import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="chapter-content">
      {/* HEADER */}
      <div className="chapter-header">
        <div className="chapter-icon-box">
          <span className="chapter-icon">📊</span>
        </div>
        <h2 className="mt-3">Introduction to Tally Prime</h2>
        <p>
          Learn complete accounting & business management using Tally Prime
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="section-header">
        <div className="section-title">
          <div className="section-number">1</div>
          <h4>What is Tally Prime?</h4>
        </div>
        <div className="section-divider"></div>
      </div>

      <p>
        <strong>Tally Prime</strong> is a powerful business accounting software
        developed by <strong>Tally Solutions Pvt. Ltd.</strong>. It is used to
        record, manage and analyze financial transactions of a business.
      </p>

      <div className="note-box note-primary">
        <span className="note-icon">💡</span>
        <p>
          Tally Prime is specially designed according to Indian business and
          taxation system (GST).
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="section-header">
        <div className="section-title">
          <div className="section-number">2</div>
          <h4>Company Information</h4>
        </div>
        <div className="section-divider"></div>
      </div>

      <ul>
        <li>Company Name: Tally Solutions Pvt. Ltd.</li>
        <li>Founded: 1986</li>
        <li>Head Office: Bangalore, Karnataka</li>
        <li>Founder: Bharat Goenka</li>
      </ul>

      {/* SECTION 3 */}
      <div className="section-header">
        <div className="section-title">
          <div className="section-number">3</div>
          <h4>History of Tally</h4>
        </div>
        <div className="section-divider"></div>
      </div>

      <p>
        Tally was developed when Shyam Sundar Goenka faced difficulties managing
        accounts manually in his business. His son Bharat Goenka developed an
        accounting software to solve this problem.
      </p>

      <div className="alert-gradient">
        <h5>Did you know?</h5>
        <p>
          The first version of Tally was developed on MS-DOS and later evolved
          into Tally Prime.
        </p>
      </div>
    </div>
  );
}
