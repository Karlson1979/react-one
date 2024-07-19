import React from 'react';
import { User } from './components/User';
import './App.css';

function App() {
  return (
    <div>
      <User
        name="Alex"
        age={35}
        country="Ukraine"
        city="Kyiv"
        tel="+380123456789"
        email="alex@example.com"
        status="active"
        sex="male"
      />
    </div>
  );
}

export default App;