// src/components/dashboard/analytics/MonthlyChart.jsx
import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const MonthlyChart = ({ dailyVisits }) => {
  const chartData = useMemo(() => {
    if (!dailyVisits) return [];
    return Object.keys(dailyVisits)
      .sort()
      .map((date) => ({ date, visits: dailyVisits[date] }));
  }, [dailyVisits]);

  return (
    <div className="card mb-3 p-3 shadow-sm">
      <h5>📊 Monthly Visits</h5>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visits" stroke="#00a884" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
