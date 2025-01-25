import * as React from 'react'
import UserContext from './UserContext'
import {useState} from 'react'

function UserContextProvider({children})
{
const [user,setUser]=useState(null);
const [player,setPlayer]=useState('');

return (
<UserContext.Provider value={{user,setUser,player,setPlayer}}>
{children}
</UserContext.Provider>
)
}

export default UserContextProvider;