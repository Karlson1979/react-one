import React from 'react'
import { FriendListItem } from '../FriendListItem/FriendListItem'
export const FriendList = ({friends,toggleShowList,showList}) => {
  return (
    <>
    <button type='button' onClick={toggleShowList}>show list</button>
   {showList&&<ul >
	{friends.map ((friend)=>
       <li key={friend.id}>
		<FriendListItem 
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        />
	</li> 
    )}
	
</ul>}
</>
    

  )
}
