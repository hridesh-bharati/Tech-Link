// import React from "react";

// export default function Chapter3() {
//   return (
//     <div className="chapter-content">
//       {/* HEADER */}
//       <div className="chapter-header">
//         <div className="chapter-icon-box">
//           <span className="chapter-icon">📒</span>
//         </div>
//         <h2>Chapter 3: Accounts & Account Types</h2>
//         <p>
//           Understand what accounts are and how they are classified in Tally
//           Prime.
//         </p>
//       </div>

//       {/* BREADCRUMB */}
//       <nav className="breadcrumb-custom">
//         <span className="breadcrumb-item">Home</span> &gt;{" "}
//         <span className="breadcrumb-item active">Accounts & Account Types</span>
//       </nav>

//       {/* INTRO */}
//       <div className="definition-box">
//         <p>
//           An <strong>Account</strong> in Tally Prime is a record that stores
//           information related to a specific person, asset, expense, income, or
//           liability of a business.
//         </p>

//         <p>
//           Every financial transaction affects at least{" "}
//           <strong>two accounts</strong>. Therefore, accounts are the backbone of
//           accounting.
//         </p>
//       </div>

//       {/* IMAGE PLACEHOLDER */}
//       <div className="image-box">
//         {/* <img src="/images/account-overview.png" alt="Accounts Overview" /> */}
//         <p className="image-caption">
//           Accounts store all financial information in Tally
//         </p>
//       </div>

//       {/* WHY ACCOUNTS */}
//       <div className="note-box note-primary">
//         <div className="note-icon">📌</div>
//         <div>
//           Without accounts, it is not possible to record transactions or
//           generate financial reports like Profit & Loss or Balance Sheet.
//         </div>
//       </div>

//       {/* SECTION 1 */}
//       <div className="section-header">
//         <div className="section-title">
//           <div className="section-number">1</div>
//           <h3>Meaning of Account in Tally</h3>
//         </div>
//         <div className="section-divider"></div>
//       </div>

//       <p>
//         In simple words, an account is a{" "}
//         <strong>summary of transactions</strong> related to a particular item or
//         person.
//       </p>

//       <div className="specifier-card specifier-primary">
//         <div className="specifier-header">Examples of Accounts</div>
//         <div className="specifier-body">
//           <ul>
//             <li>Cash Account</li>
//             <li>Bank Account</li>
//             <li>Capital Account</li>
//             <li>Salary Account</li>
//             <li>Purchase Account</li>
//           </ul>
//         </div>
//       </div>

//       {/* SECTION 2 */}
//       <div className="section-header">
//         <div className="section-title">
//           <div className="section-number">2</div>
//           <h3>Types of Accounts</h3>
//         </div>
//         <div className="section-divider"></div>
//       </div>

//       <p>
//         In accounting, accounts are broadly classified into{" "}
//         <strong>three main types</strong>.
//       </p>

//       {/* DIAGRAM PLACEHOLDER */}
//       <div className="image-box text-center">
//         <img src="/img/tally/Account-types.png" className="img-fluid" alt="Types of Accounts Diagram" />
//         <p className="image-caption h3 mt-5">
//           Classification of Accounts (Personal, Real, Nominal)
//         </p>
//       </div>

//       {/* PERSONAL ACCOUNT */}
//       <div className="specifier-card specifier-success">
//         <div className="specifier-header">1️⃣ Personal Account</div>
//         <div className="specifier-body">
//           <p>
//             Personal Accounts relate to{" "}
//             <strong>persons, firms, companies, or institutions</strong>.
//           </p>

//           <strong>Examples:</strong>
//           <ul>
//             <li>Ram Account</li>
//             <li>ABC Traders</li>
//             <li>Bank of India</li>
//           </ul>

//           <p>
//             <strong>Golden Rule:</strong>
//             <br />
//             👉 Debit the Receiver
//             <br />
//             👉 Credit the Giver
//           </p>
//         </div>
//       </div>

//       {/* IMAGE PLACEHOLDER */}
//       <div className="image-box">
//         {/* <img src="/images/personal-account-example.png" alt="Personal Account Example" /> */}
//         <p className="image-caption">
//           Example of Personal Account entry
//         </p>
//       </div>

//       {/* REAL ACCOUNT */}
//       <div className="specifier-card specifier-warning">
//         <div className="specifier-header">2️⃣ Real Account</div>
//         <div className="specifier-body">
//           <p>
//             Real Accounts relate to{" "}
//             <strong>assets and properties</strong> owned by the business.
//           </p>

//           <strong>Examples:</strong>
//           <ul>
//             <li>Cash</li>
//             <li>Furniture</li>
//             <li>Building</li>
//             <li>Machinery</li>
//           </ul>

//           <p>
//             <strong>Golden Rule:</strong>
//             <br />
//             👉 Debit what comes in
//             <br />
//             👉 Credit what goes out
//           </p>
//         </div>
//       </div>

//       {/* IMAGE PLACEHOLDER */}
//       <div className="image-box">
//         {/* <img src="/images/real-account-assets.png" alt="Real Account Assets" /> */}
//         <p className="image-caption">
//           Assets recorded under Real Accounts
//         </p>
//       </div>

//       {/* NOMINAL ACCOUNT */}
//       <div className="specifier-card specifier-danger">
//         <div className="specifier-header">3️⃣ Nominal Account</div>
//         <div className="specifier-body">
//           <p>
//             Nominal Accounts relate to{" "}
//             <strong>expenses, incomes, losses, and gains</strong>.
//           </p>

//           <strong>Examples:</strong>
//           <ul>
//             <li>Salary Account</li>
//             <li>Rent Account</li>
//             <li>Commission Received</li>
//             <li>Discount Allowed</li>
//           </ul>

//           <p>
//             <strong>Golden Rule:</strong>
//             <br />
//             👉 Debit all expenses & losses
//             <br />
//             👉 Credit all incomes & gains
//           </p>
//         </div>
//       </div>

//       {/* IMAGE PLACEHOLDER */}
//       <div className="image-box">
//         {/* <img src="/images/nominal-account-expenses.png" alt="Nominal Account Example" /> */}
//         <p className="image-caption">
//           Expenses & incomes recorded under Nominal Accounts
//         </p>
//       </div>

//       {/* EXAM NOTE */}
//       <div className="note-box note-success">
//         <div className="note-icon">⭐</div>
//         <div>
//           <strong>Exam Tip:</strong>
//           Tally follows traditional classification of accounts:
//           Personal, Real, and Nominal.
//         </div>
//       </div>
//       <img src="/img/tally/account-rules.png" className="img-fluid" alt="Rules" />
//       {/* PRACTICE */}
//       <div className="exercise-box">
//         <div className="exercise-header">
//           <h4>Practice Exercise</h4>
//         </div>
//         <div className="exercise-content">
//           1. Identify account type of <strong>Cash</strong> <br />
//           2. Classify <strong>Salary Paid</strong> <br />
//           3. Write golden rule for <strong>Personal Account</strong>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
export default function Chapter3() {
  return (
    <div className="chapter-content">
      {/* HEADER */}
      <div className="chapter-header">
        <div className="chapter-icon-box">
          <span className="chapter-icon">📒</span>
        </div>
        <h2>Chapter 3: Accounts & Account Types</h2>
        <p>
          Understand what accounts are and how they are classified in Tally
          Prime.
        </p>
      </div>

      {/* BREADCRUMB */}
      <nav className="breadcrumb-custom">
        <span className="breadcrumb-item">Home</span> &gt;{" "}
        <span className="breadcrumb-item active">Accounts & Account Types</span>
      </nav>

      {/* INTRO */}
      <div className="definition-box">
        <p>
          An <strong>Account</strong> in Tally Prime is a record that stores
          information related to a specific person, asset, expense, income, or
          liability of a business.
        </p>

        <p>
          Every financial transaction affects at least{" "}
          <strong>two accounts</strong>. Therefore, accounts are the backbone of
          accounting.
        </p>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <div className="image-box">
        {/* <img src="/images/account-overview.png" alt="Accounts Overview" /> */}
        <p className="image-caption">
          Accounts store all financial information in Tally
        </p>
      </div>

      {/* WHY ACCOUNTS */}
      <div className="note-box note-primary">
        <div className="note-icon">📌</div>
        <div>
          Without accounts, it is not possible to record transactions or
          generate financial reports like Profit & Loss or Balance Sheet.
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="section-header">
        <div className="section-title">
          <div className="section-number">1</div>
          <h3>Meaning of Account in Tally</h3>
        </div>
        <div className="section-divider"></div>
      </div>

      <p>
        In simple words, an account is a{" "}
        <strong>summary of transactions</strong> related to a particular item or
        person.
      </p>

      <div className="specifier-card specifier-primary">
        <div className="specifier-header">Examples of Accounts</div>
        <div className="specifier-body">
          <ul>
            <li>Cash Account</li>
            <li>Bank Account</li>
            <li>Capital Account</li>
            <li>Salary Account</li>
            <li>Purchase Account</li>
          </ul>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-header">
        <div className="section-title">
          <div className="section-number">2</div>
          <h3>Types of Accounts</h3>
        </div>
        <div className="section-divider"></div>
      </div>

      <p>
        In accounting, accounts are broadly classified into{" "}
        <strong>three main types</strong>.
      </p>

      {/* DIAGRAM PLACEHOLDER */}
      <div className="image-box text-center">
        <img src="/img/tally/Account-types.png" className='img-fluid' alt="Types of Accounts Diagram" />
        <p className="image-caption h3 mt-5">
          Classification of Accounts (Personal, Real, Nominal)
        </p>
      </div>

      {/* PERSONAL ACCOUNT */}
      <div className="specifier-card specifier-success">
        <div className="specifier-header">1️⃣ Personal Account</div>
        <div className="specifier-body">
          <p>
            Personal Accounts relate to{" "}
            <strong>persons, firms, companies, or institutions</strong>.
          </p>

          <strong>Examples:</strong>
          <ul>
            <li>Ram Account</li>
            <li>ABC Traders</li>
            <li>Bank of India</li>
          </ul>

          <p>
            <strong>Golden Rule:</strong>
            <br />
            👉 Debit the Receiver
            <br />
            👉 Credit the Giver
          </p>
        </div>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <div className="image-box">
        {/* <img src="/images/personal-account-example.png" alt="Personal Account Example" /> */}
        <p className="image-caption">
          Example of Personal Account entry
        </p>
      </div>

      {/* REAL ACCOUNT */}
      <div className="specifier-card specifier-warning">
        <div className="specifier-header">2️⃣ Real Account</div>
        <div className="specifier-body">
          <p>
            Real Accounts relate to{" "}
            <strong>assets and properties</strong> owned by the business.
          </p>

          <strong>Examples:</strong>
          <ul>
            <li>Cash</li>
            <li>Furniture</li>
            <li>Building</li>
            <li>Machinery</li>
          </ul>

          <p>
            <strong>Golden Rule:</strong>
            <br />
            👉 Debit what comes in
            <br />
            👉 Credit what goes out
          </p>
        </div>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <div className="image-box">
        {/* <img src="/images/real-account-assets.png" alt="Real Account Assets" /> */}
        <p className="image-caption">
          Assets recorded under Real Accounts
        </p>
      </div>

      {/* NOMINAL ACCOUNT */}
      <div className="specifier-card specifier-danger">
        <div className="specifier-header">3️⃣ Nominal Account</div>
        <div className="specifier-body">
          <p>
            Nominal Accounts relate to{" "}
            <strong>expenses, incomes, losses, and gains</strong>.
          </p>

          <strong>Examples:</strong>
          <ul>
            <li>Salary Account</li>
            <li>Rent Account</li>
            <li>Commission Received</li>
            <li>Discount Allowed</li>
          </ul>

          <p>
            <strong>Golden Rule:</strong>
            <br />
            👉 Debit all expenses & losses
            <br />
            👉 Credit all incomes & gains
          </p>
        </div>
      </div>

      {/* IMAGE PLACEHOLDER */}
      <div className="image-box">
        {/* <img src="/images/nominal-account-expenses.png" alt="Nominal Account Example" /> */}
        <p className="image-caption">
          Expenses & incomes recorded under Nominal Accounts
        </p>
      </div>

      {/* EXAM NOTE */}
      <div className="note-box note-success">
        <div className="note-icon">⭐</div>
        <div>
          <strong>Exam Tip:</strong>
          Tally follows traditional classification of accounts:
          Personal, Real, and Nominal.
        </div>
      </div>
      <img src="/img/tally/account-rules.png" className="img-fluid" alt="Rules" />
      {/* PRACTICE */}
      <div className="exercise-box">
        <div className="exercise-header">
          <h4>Practice Exercise</h4>
        </div>
        <div className="exercise-content">
          1. Identify account type of <strong>Cash</strong> <br />
          2. Classify <strong>Salary Paid</strong> <br />
          3. Write golden rule for <strong>Personal Account</strong>
        </div>
      </div>
    </div>
  );
}
