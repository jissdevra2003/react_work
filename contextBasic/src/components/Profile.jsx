import * as React from 'react'
import {useContext} from 'react'
import UserContext from '../context/UserContext.js'



function Profile()
{
const {user}=useContext(UserContext);

if(!user) return <div>Please login to proceed</div>
return <div>Welcome :{user.userName}</div>

}
export default Profile; 