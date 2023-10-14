import styles from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className="sectionContainer">
      <h2 className="sectionTitle">Friends</h2>
      <ul className={styles.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
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
        })}
      </ul>
    </section>
  );
};
