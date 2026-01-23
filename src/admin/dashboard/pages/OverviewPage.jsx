// src/components/dashboard/OverviewPage.jsx
import React from "react";
import useAnalytics from "../../../hooks/useAnalytics";
import LiveUsers from "../../dashboard/analytics/LiveUsers";
import MonthlyChart from "../../dashboard/analytics/MonthlyChart";
import AiSummary from "../../dashboard/analytics/AiSummary";

const OverviewPage = () => {
  const stats = useAnalytics();

  if (!stats)
    return <p className="mt-5 pt-4 text-center">Loading analytics...</p>;

  return (
    <div className="p-3">
      <LiveUsers count={stats.activeUsers} />
      <MonthlyChart dailyVisits={stats.dailyVisits} />
      <AiSummary stats={stats} />

      {/* Debugging JSON */}
      <pre className="bg-dark text-white p-2 mt-3">
        {JSON.stringify(stats, null, 2)}
      </pre>
    </div>
  );
};

export default OverviewPage;
