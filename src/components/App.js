import React from 'react';

import Profile from './Profile/Profile';
import Statistic from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';
import TransacrionHistory from './TransactionHistory/TransactionHistory';

import Users from '../data/user.json';
import Statistics from '../data/statistical-data.json';
import Friends from '../data/friends.json';
import Transactions from '../data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={Users.name}
        tag={Users.tag}
        avatar={Users.avatar}
        location={Users.location}
        stats={Users.stats}
      />
      <Statistic title="Download statistic" stats={Statistics} />
      <FriendList friends={Friends} />
      <TransacrionHistory transactions={Transactions} />
    </>
  );
};

export default App;
