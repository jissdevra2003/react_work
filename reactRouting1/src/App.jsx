import { useState } from 'react'
import {Header} from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="flex justify-center items-center">
   <h1 className="text-white font-bold p-4 underline w-full text-center">React Router</h1>
<Header/>
</div>
    </>
  )
}

export default App
