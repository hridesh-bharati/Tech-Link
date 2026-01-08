import { useEffect, useState } from "react";
import axios from "axios";
import "./AnalyticsPage.css";

export default function AnalyticsPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/analytics/%2F") // Fetch analytics for home page
      .then((res) => setData(res.data))
      .catch(() => setError("Failed to load analytics"));
  }, []);

  if (error) {
    return (
      <div className="analytics-loader">
        <p>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="analytics-loader">
        <div className="spinner" />
        <p>Loading analytics...</p>
      </div>
    );
  }

  /* 
    Assuming your API returns an array of sessions like:
    data.sessions = [{ session: "2026-01-01", views: 5 }, ...]
  */
  const sessions = data.sessions || [];
  const maxViews = Math.max(...sessions.map((s) => s.views), 1); // prevent divide by zero

  return (
    <div className="analytics-app">
      {/* Header */}
      <header className="analytics-header">
        <h2>📊 Analytics</h2>
        <span className="sub">Home Page (/)</span>
      </header>

      {/* COLUMN CHART */}
      <div className="chart-card">
        <p className="chart-title">Views per Session</p>
        <div className="bar-chart">
          {sessions.map((s, i) => (
            <div key={i} className="bar-wrapper">
              <div
                className="bar"
                style={{ height: `${(s.views / maxViews) * 100}%` }}
                title={`${s.views} views`}
              />
              <span className="bar-label">{s.session}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="analytics-cards">
        <div className="card">
          <div className="icon view">👁</div>
          <div>
            <p className="label">Total Views</p>
            <h3>{data.totalViews}</h3>
          </div>
        </div>

        <div className="card">
          <div className="icon time">⏱</div>
          <div>
            <p className="label">Time Spent</p>
            <h3>{(data.totalTimeSpent / 60).toFixed(2)} min</h3>
          </div>
        </div>
      </div>

      <div className="analytics-footer">
        Session based • Mobile analytics
      </div>
    </div>
  );
}
