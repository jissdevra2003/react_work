import React from 'react'
import UserContext from '../context/UserContext' 
import {useContext,useState} from 'react' 
function Players()
{
const {setPlayer}=useContext(UserContext)
const [playerName,setPlayerName]=useState('')
const [country,setCountry]=useState('')
const handleClick=(e)=>{
e.preventDefault();
setPlayer({playerName,country})
}

return (
<>
<input
type='text'
placeholder='Player name'
value={playerName}
onChange={(e)=>{
setPlayerName(e.target.value)
}
}
/>
<input
type='text'
placeholder='Country'
value={country}
onChange={(e)=>{
setCountry(e.target.value)
}}
/>
<button
onClick={handleClick}
>
Next

</button>
</>
)
}

export default Players;