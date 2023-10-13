import { Profile } from './profile/Profile';
import userInfo from '../data/user.json';

import { Statistics } from './statistic/Statistic';
import stats from '../data/data.json';

import { FriendList } from './friends/Friends';
import friends from '../data/friends.json';

import { TransactionHistory } from './transactions/Transactions';
import transactionArr from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <section className="sectionContainer">
        <Profile
          username={userInfo.username}
          tag={userInfo.tag}
          location={userInfo.location}
          avatar={userInfo.avatar}
          stats={userInfo.stats}
        />
      </section>

      <section className="sectionContainer">
        <Statistics title="Upload stats" stats={stats} />
      </section>

      <section className="sectionContainer">
        <FriendList friends={friends} />
      </section>

      <section className="sectionContainer">
        <TransactionHistory items={transactionArr} />
      </section>
    </>
  );
};
