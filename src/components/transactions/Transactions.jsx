import styles from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <section className="sectionContainer">
      <h2 className="sectionTitle">Transactions</h2>
      <table className={styles.table}>
        <thead className={styles.headerTable}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={styles.tr}>
                <td className={styles.typeTransaction}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
