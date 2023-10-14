import styles from './Statistic.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="sectionContainer">
      {title && <h2 className="sectionTitle">{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={styles.statListItem} key={id}>
              <span className={styles.itemLabel}>{label}</span>
              <span className={styles.itemPercentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
