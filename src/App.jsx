import React from 'react';

import './App.css';
import { Counter } from './components/Counter/Counter';

import { UserList } from './components/UserList';
import { Section } from './components/Section';
function App() {
  return (
    <div>
      <Section>
      <UserList/>
      </Section>
      <Counter/>
    </div>
  );
}

export default App;