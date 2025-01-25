import * as React from 'react';
import {useState,useContext} from 'react'
import UserContext from '../context/UserContext.js'
function Login()
{
const [password,setPassword]=useState('')
const [userName,setUserName]=useState('')

const {setUser}=useContext(UserContext)

const handleClick=function(e)
{
e.preventDefault();
setUser({userName,password})

}


return (
<>
<h1>Login Page</h1>
<input
type='text'
placeholder='Email or phone number'
value={userName}
onChange={(e)=>{
setUserName(e.target.value)
}}
/>
<input
type='text'
placeholder='Password'
value={password}
onChange={(e)=>{
setPassword(e.target.value)
}}
/>
<button
onClick={handleClick}
>Login</button>
</>
)

}

export default Login;