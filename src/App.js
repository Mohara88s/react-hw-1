import React from 'react';

import Profile from './conponents/Profile/Profile';
import user from './conponents/Profile/user.json';

import Statistics from './conponents/Statistics/Statistics';
import statisticalData from './conponents/Statistics/statistical-data.json';

import FriendList from './conponents/FriendList/FriendList';
import friends from './conponents/FriendList/friends.json';

import TransactionHistory from './conponents/TransactionHistory/TransactionHistory';
import transactions from './conponents/TransactionHistory/transactions.json';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>React Homework 1</h1>
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Upload stats" stats={statisticalData} />

        <FriendList friends={friends} />

        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
