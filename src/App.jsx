/* 
 */import {Profile} from './components/Profile/Profile'
import './App.css';
import { Description } from './components/Hw2/Description';
/* import { Counter } from './components/Counter/Counter';
import userData from '../src/userData.json'
import { UserList } from './components/UserList';
import { Section } from './components/Section';
import { FriendList } from './components/FriendList/FriendList';
import friends from '../src/friends.json'
import transactions from '../src/transactions.json'
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory'; */
import {Options} from './components/Hw2/Options'
import {Feedback} from './components/Hw2/Feedback'
import { Notification } from './components/Hw2/Notification';
import { useState,useEffect } from 'react';

function App() {
  const reviews={
  good: 0,
	neutral: 0,
	bad: 0
  }
  const [feedback,setFeedback]=useState(()=>{
    const updateFeedback=window.localStorage.getItem('feedback')
    try{
      return updateFeedback?JSON.parse(updateFeedback):reviews
    }
    catch(e){
      return reviews

    }
  })
  
  const updateFeedback=(typeFeedback) => {
    setFeedback(prevFeedback=>({... prevFeedback,[typeFeedback]:prevFeedback[typeFeedback]+1}))
    
   }
   
   const reset=()=>{
    setFeedback(reviews)
  }
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive=Math.round((feedback.good / totalFeedback) * 100)
useEffect(()=>{
  window.localStorage.setItem('feedback',JSON.stringify(feedback))
},[feedback])
  
  return (
    <div>
<Description/>
{totalFeedback===0&&<Notification />}
{totalFeedback>0&&<Feedback feedback={feedback} totalFeedback={totalFeedback} positive={positive }/>}
<Options feedback={feedback} updateFeedback={updateFeedback}  reset={reset}/>

      {/* <Section>
      <UserList/>
      </Section>
      <Counter/> */}

{/* <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      /> */}

      {/* <FriendList friends={friends}/> */}
      {/* <TransactionHistory items={transactions}/> */}
      
    </div>
  );
}

export default App;