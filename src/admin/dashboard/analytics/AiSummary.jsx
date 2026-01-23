// src/components/dashboard/analytics/AiSummary.jsx
import React from "react";

const AiSummary = ({ stats }) => {
  if (!stats) return null;

  const avgDailyVisits =
    stats.dailyVisits
      ? Object.values(stats.dailyVisits).reduce((a, b) => a + b, 0) /
        Object.keys(stats.dailyVisits).length
      : 0;

  return (
    <div className="card mb-3 p-3 shadow-sm">
      <h5>🧠 AI Analytics Summary</h5>
      <p>Total Users: {stats.totalUsers}</p>
      <p>Active Users: {stats.activeUsers}</p>
      <p>Average Daily Visits: {avgDailyVisits.toFixed(2)}</p>
    </div>
  );
};

export default AiSummary;
