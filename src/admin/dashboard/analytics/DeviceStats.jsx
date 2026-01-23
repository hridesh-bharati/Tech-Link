const DeviceStats = ({ devices = {} }) => (
  <ul className="list-group">
    {Object.entries(devices).map(([d, c]) => (
      <li key={d} className="list-group-item d-flex justify-content-between">
        <span>{d}</span>
        <strong>{c}</strong>
      </li>
    ))}
  </ul>
);

export default DeviceStats;
