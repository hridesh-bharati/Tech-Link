// src/components/dashboard/analytics/LiveUsers.jsx
import React from "react";

const LiveUsers = ({ count }) => {
  return (
    <div className="card mb-3 p-3 shadow-sm">
      <h5>👁️ Live Users</h5>
      <h2>{count}</h2>
      <small>Currently online</small>
    </div>
  );
};

export default LiveUsers;
