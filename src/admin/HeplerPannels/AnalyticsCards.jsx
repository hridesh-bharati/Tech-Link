// src\admin\HeplerPannels\AnalyticsCards.jsx
import useAnalytics from "../../utils/analytics";

const AnalyticsCards = () => {
  const { stats, loading } = useAnalytics();

  if (loading) return <p>Loading analytics...</p>;
  if (!stats) return <p>No analytics data</p>;

  return (
    <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
      
      <div className="card">
        <h4>Total Users</h4>
        <h2>{stats.totalUsers ?? 0}</h2>
      </div>

      <div className="card live">
        <h4>Active Users</h4>
        <h2>
          <span className="blink-dot" /> {stats.activeUsers ?? 0}
        </h2>
      </div>

      <div className="card">
        <h4>Today Visits</h4>
        <h2>
          {stats.dailyVisits?.[new Date().toISOString().split("T")[0]] ?? 0}
        </h2>
      </div>

    </div>
  );
};

export default AnalyticsCards;
