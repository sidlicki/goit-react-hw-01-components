import { FriendListItem } from './FriendListItem';
import styles from './Friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className="sectionContainer">
      <h2 className="sectionTitle">Friends</h2>
      <ul className={styles.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        ))}
      </ul>
    </section>
  );
};
