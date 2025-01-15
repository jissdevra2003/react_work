import *as React from 'react'
import {useParams} from 'react-router-dom'
function User()
{
const {username}=useParams();
return (
<>
<h1 className="items-center p-4 text-2xl font-bold bg-white flex flex-wrap justify-center">User : {username}</h1>

</>
)
}
export default User;