import { User } from "./User"
import users from '../users.json'
import css from '../components/user.module.css'
export const UserList = () => {
  return (
    
        <div className={css.userList}>
           { users.map(user=>(
            <User
            key={user.id}
            // id={user.id}
            name={user.name}
            age={user.age}
            country={user.country}
            city={user.city}
            tel={user.tel}
            email={user.email}
            status={user.status}
            sex={user.sex}
            />
           ))}
        
    </div>
  
    )
    
}
