export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
