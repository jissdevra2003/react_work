import React from 'react'
import UserContext from '../context/UserContext'
import {useContext} from 'react'

function ShowPlayer()
{
const {player}=useContext(UserContext);

return (
<>
<h1>Player Name:{player.playerName}</h1>
<p>Country :{player.country}</p>
</>
)

}

export default ShowPlayer;