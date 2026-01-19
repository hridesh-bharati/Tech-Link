import React from "react";

export default function Chapter2() {
  return (
    <div className="chapter-content">
      {/* HEADER */}
      <div className="chapter-header">
        <div className="chapter-icon-box">
          <span className="chapter-icon">🏢</span>
        </div>
        <h2>Chapter 2: Company Creation in Tally Prime</h2>
        <p>
          Understand the first and most important step of accounting in
          Tally Prime.
        </p>
      </div>

      {/* BREADCRUMB */}
      <nav className="breadcrumb-custom">
        <span className="breadcrumb-item">Home</span> &gt;{" "}
        <span className="breadcrumb-item active">Company Creation</span>
      </nav>

      {/* INTRO / DEFINITION */}
      <div className="definition-box">
        <p>
          <strong>Company Creation in Tally Prime</strong> is the process of
          registering a business inside Tally software so that all financial
          transactions, accounts, taxes, and reports of that business can be
          recorded and managed digitally.
        </p>

        <p>
          When a company is created, Tally provides a{" "}
          <strong>separate and secure accounting environment</strong> where
          vouchers, ledgers, GST details, and financial statements are
          maintained company-wise.
        </p>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <div className="image-box">
        {/* yahan screenshot add karna */}
        {/* <img src="/images/create-company-screen.png" alt="Create Company Screen" /> */}
        <p className="image-caption">
          Create Company screen in Tally Prime
        </p>
      </div>

      {/* IMPORTANCE */}
      <div className="note-box note-primary">
        <div className="note-icon">📌</div>
        <div>
          Company Creation is mandatory before creating ledgers, entering
          vouchers, managing stock, or generating GST reports.
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="section-header">
        <div className="section-title">
          <div className="section-number">1</div>
          <h3>Steps to Create a New Company</h3>
        </div>
        <div className="section-divider"></div>
      </div>

      <ul>
        <li>Open <strong>Tally Prime</strong></li>
        <li>Select <strong>Create Company</strong> from Gateway of Tally</li>
        <li>If another company is open, press <strong>Alt + K</strong> → Create</li>
      </ul>

      {/* REQUIRED FIELDS */}
      <div className="specifier-card specifier-primary">
        <div className="specifier-header">Important Details During Creation</div>
        <div className="specifier-body">
          <ul>
            <li><strong>Company Name</strong> – Legal name of business</li>
            <li><strong>Mailing Name</strong> – Name printed on invoices</li>
            <li><strong>Address</strong> – Business location</li>
            <li><strong>Financial Year From</strong> – Accounting year start</li>
            <li><strong>Books Beginning From</strong> – Transaction start date</li>
            <li><strong>Base Currency</strong> – INR for Indian companies</li>
          </ul>
        </div>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <div className="image-box">
        {/* <img src="/images/company-details.png" alt="Company Details Form" /> */}
        <p className="image-caption">
          Filling company basic details in Tally Prime
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="section-header">
        <div className="section-title">
          <div className="section-number">2</div>
          <h3>Company Configuration & Features</h3>
        </div>
        <div className="section-divider"></div>
      </div>

      <p>
        After entering basic information, press{" "}
        <strong>F12 (Configure)</strong> to enable business-specific features.
      </p>

      <div className="specifier-card specifier-success">
        <div className="specifier-header">Common Configuration Options</div>
        <div className="specifier-body">
          <ul>
            <li>Maintain Accounts Only / Inventory</li>
            <li>Enable GST for tax compliance</li>
            <li>Enable TDS / TCS if applicable</li>
            <li>Activate Security Control</li>
          </ul>
        </div>
      </div>

      {/* SECURITY NOTE */}
      <div className="note-box note-warning">
        <div className="note-icon">🔒</div>
        <div>
          TallyVault password cannot be recovered once forgotten.
        </div>
      </div>

      {/* EXAM POINT */}
      <div className="note-box note-success">
        <div className="note-icon">⭐</div>
        <div>
          <strong>Exam Line:</strong> Company Creation is the process of setting
          up a business entity in Tally Prime to record and manage its
          accounting data.
        </div>
      </div>

      {/* PRACTICE */}
      <div className="exercise-box">
        <div className="exercise-header">
          <h4>Practice Exercise</h4>
        </div>
        <div className="exercise-content">
          1. Create a company named <strong>Demo Pvt Ltd</strong> <br />
          2. Financial Year: <strong>01-Apr-2026</strong> <br />
          3. Enable <strong>GST</strong> <br />
          4. Save using <strong>Ctrl + A</strong>
        </div>
      </div>
    </div>
  );
}
