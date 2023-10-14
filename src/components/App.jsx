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
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />

      <Statistics title="Upload stats" stats={stats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactionArr} />
    </>
  );
};
