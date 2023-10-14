export const FriendList = ({ friends }) => {
  return (
    <section className="sectionContainer">
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li key={id}>
              {isOnline ? <span> TAK </span> : <span> NIE </span>}
              <img src={avatar} alt="avatar" />
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
