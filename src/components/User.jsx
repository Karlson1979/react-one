export const User=({id,name,age,country,city,tel,email,status,sex='male' })=>{
    return(
        <div>
<p>name:{name}</p>
<p>age:{age}</p>
<p>country:{country}</p>
<p>city:{city}</p>
<p>tel:{tel}</p>
<p>email:{email}</p>
<p>status:{status}</p>
<p>sex:{sex}</p>
        </div>

    )
}