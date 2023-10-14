import styles from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className="sectionContainer">
      <h2 className="sectionTitle">Profile</h2>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.listStats}>
        <li className={styles.listItem}>
          <span className={styles.itemLabel}>Followers</span>
          <span className={styles.itemQuantity}>{stats.followers}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.itemLabel}>Views</span>
          <span className={styles.itemQuantity}>{stats.views}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.itemLabel}>Likes</span>
          <span className={styles.itemQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};
