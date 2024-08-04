import { useState } from 'react';
import css from '../components/user.module.css';

export const User = ({ id, name, age, country, city, tel, email, status, sex, showName }) => {
    const cardColor = sex === 'male' 
        ? { backgroundColor: 'rgba(183, 226, 29, 0.2)' } 
        : { backgroundColor: 'rgba(255, 157, 0, 0.2)' };

    const [toggleUser, setToggleUser] = useState(true);

    const toggle = () => setToggleUser(prevState => !prevState);
const showCard=()=> !setToggleUser(prevState => !prevState)
    return (
        <>
     {toggleUser ?  <div className={css.userCard} style={cardColor}>
            <button type="button" onClick={toggle}> delete Card
            </button>
             
              
                    <p>name: {name}</p>
                    <p>age: {age}</p>
                    <p>country: {country}</p>
                    <p>city: {city}</p>
                    <p>tel: {tel}</p>
                    <p>email: {email}</p>
                    <p>status: {status}</p>
                    <p>sex: {sex}</p>
                    <button type="button" onClick={() => showName(name)}>name+age</button>
               
            
        </div>: <button type='button' onClick={showCard} style={{ height: '30px' }}>
  Show {name}
</button>
}

        </>
    );
};
