import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Ledger() {
  return (
    <div className="container my-4">

      {/* HEADER */}
      <div className="card shadow-sm mb-4 text-center">
        <div className="card-body">
          <div className="fs-1 mb-2">📘</div>
          <h2 className="fw-bold">Chapter 4: Ledger Creation in Tally Prime</h2>
          <p className="text-muted">
            Learn what a Ledger is and how to create different types of ledgers in Tally Prime
          </p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <nav className="breadcrumb bg-light p-2 rounded mb-4">
        <span className="breadcrumb-item">Home</span>
        <span className="breadcrumb-item active">Ledger Creation</span>
      </nav>

      {/* INTRO */}
      <div className="alert alert-info">
        <p className="mb-1">
          A <strong>Ledger</strong> in Tally Prime is an individual account where
          all transactions related to a specific person, asset, expense, or income
          are recorded.
        </p>
        <p className="mb-0">
          Every voucher entry in Tally affects one or more ledgers.
        </p>
      </div>

      {/* WHY LEDGER */}
      <div className="alert alert-primary d-flex align-items-center">
        <span className="fs-4 me-2">📌</span>
        <span>
          Without ledger creation, you cannot pass vouchers or generate reports
          like Trial Balance, P&L, or Balance Sheet.
        </span>
      </div>

      {/* SECTION 1 */}
      <div className="d-flex align-items-center mt-4 mb-2">
        <span className="badge bg-dark me-2">1</span>
        <h4 className="mb-0">What is a Ledger?</h4>
      </div>
      <hr />

      <p>
        A ledger is a <strong>permanent record</strong> of all financial
        transactions related to a particular account head.
      </p>

      <div className="card mb-4">
        <div className="card-header fw-bold">Examples of Ledgers</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cash Ledger</li>
          <li className="list-group-item">Bank Ledger</li>
          <li className="list-group-item">Capital Ledger</li>
          <li className="list-group-item">Salary Ledger</li>
          <li className="list-group-item">Purchase Ledger</li>
        </ul>
      </div>

      {/* SECTION 2 */}
      <div className="d-flex align-items-center mt-4 mb-2">
        <span className="badge bg-dark me-2">2</span>
        <h4 className="mb-0">Steps to Create a Ledger</h4>
      </div>
      <hr />

      <div className="card mb-4">
        <div className="card-body">
          <ol>
            <li>Go to <strong>Gateway of Tally</strong></li>
            <li>Select <strong>Create</strong> → <strong>Ledger</strong></li>
            <li>Or press <strong>Alt + G</strong> → Create → Ledger</li>
            <li>Enter Ledger Name</li>
            <li>Select appropriate <strong>Group</strong></li>
            <li>Save using <strong>Ctrl + A</strong></li>
          </ol>
        </div>
      </div>

      {/* NOTE */}
      <div className="alert alert-warning">
        ⚠️ Selecting the correct <strong>Group</strong> is very important,
        otherwise reports will be incorrect.
      </div>

      {/* SECTION 3 */}
      <div className="d-flex align-items-center mt-4 mb-2">
        <span className="badge bg-dark me-2">3</span>
        <h4 className="mb-0">Common Ledger Groups</h4>
      </div>
      <hr />

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card h-100 border-success">
            <div className="card-header bg-success text-white fw-bold">
              Assets
            </div>
            <div className="card-body">
              Cash<br />
              Bank<br />
              Furniture<br />
              Machinery
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-primary">
            <div className="card-header bg-primary text-white fw-bold">
              Liabilities
            </div>
            <div className="card-body">
              Capital<br />
              Loans<br />
              Sundry Creditors
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-danger">
            <div className="card-header bg-danger text-white fw-bold">
              Expenses / Income
            </div>
            <div className="card-body">
              Salary<br />
              Rent<br />
              Purchase<br />
              Sales
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="d-flex align-items-center mt-4 mb-2">
        <span className="badge bg-dark me-2">4</span>
        <h4 className="mb-0">Example: Salary Ledger</h4>
      </div>
      <hr />

      <div className="card mb-4">
        <div className="card-body">
          <strong>Ledger Name:</strong> Salary<br />
          <strong>Group:</strong> Indirect Expenses<br />
          <strong>Opening Balance:</strong> Not Required
        </div>
      </div>

      {/* EXAM TIP */}
      <div className="alert alert-success">
        ⭐ <strong>Exam Tip:</strong>  
        Cash & Bank ledgers come under <strong>Current Assets</strong>.  
        Salary, Rent come under <strong>Indirect Expenses</strong>.
      </div>

      {/* PRACTICE */}
      <div className="card mb-5">
        <div className="card-header fw-bold">Practice Exercise</div>
        <div className="card-body">
          1. Create a <strong>Cash Ledger</strong><br />
          2. Create <strong>Salary Ledger</strong> under Indirect Expenses<br />
          3. Identify group of <strong>Capital Account</strong>
        </div>
      </div>

    </div>
  );
}
