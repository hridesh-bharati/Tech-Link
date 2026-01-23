const CountryStats = ({ countries = {} }) => (
  <ul className="list-group">
    {Object.entries(countries).map(([c, v]) => (
      <li key={c} className="list-group-item d-flex justify-content-between">
        <span>{c}</span>
        <strong>{v}</strong>
      </li>
    ))}
  </ul>
);

export default CountryStats;
