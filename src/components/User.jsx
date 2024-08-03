// import users from '../users.json'
import css from '../components/user.module.css'
export const User=({id,name,age,country,city,tel,email,status,sex})=>{
    const cardColor = sex === 'male' ? {  backgroundColor: ' rgba(183, 226, 29, 0.2)' } : { backgroundColor: ' rgba(255, 157, 0, 0.2);' };
    const showName=(userName)=>console.log(userName)
return (
<div  className={css.userCard } style={cardColor} >
        
<p>name:{name}</p>
<p>age:{age}</p>
<p>country:{country}</p>
<p>city:{city}</p>
<p>tel:{tel}</p>
<p>email:{email}</p>
<p>status:{status}</p>
<p>sex:{sex}</p>
<button type='button' onClick={()=>showName(name)}>name</button>
        </div>)

} 
