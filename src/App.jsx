import React from 'react';
import {Profile} from './components/Profile/Profile'
import './App.css';
import { Counter } from './components/Counter/Counter';
import userData from '../src/userData.json'
import { UserList } from './components/UserList';
import { Section } from './components/Section';
import { FriendList } from './components/FriendList/FriendList';
import friends from '../src/friends.json'
import transactions from '../src/transactions.json'
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
function App() {
  return (
    <div>
      {/* <Section>
      <UserList/>
      </Section>
      <Counter/> */}

<Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;