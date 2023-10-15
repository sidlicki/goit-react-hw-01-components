import styles from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={styles.listItem}>
      {isOnline ? (
        <span className={styles.statusOnline}> Online </span>
      ) : (
        <span className={styles.statusOffline}> Offline </span>
      )}
      <img src={avatar} alt="avatar" className={styles.friendImg} />
      <p className={styles.friendName}>{name}</p>
    </li>
  );
};
