import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Players from './components/Players.jsx'
import ShowPlayer from './components/Showplayer.jsx'

function App() {

  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Context learning</h1>
<Login/>
<Profile/>
<Players/>
<ShowPlayer/>

    </UserContextProvider>
  )
}

export default App
