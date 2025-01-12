import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{
let [counter,setCounter]=useState(90);
let incrementVaaalue=function()
{
if(counter>95) return;
counter++;
setCounter(counter);

}
let decrementValue=function()
{
if(counter<=90) return;
counter--;
setCounter(counter);

}

return (
<>
<h1>Jiss is learning react</h1>
<button onClick={incrementValue}>Increment</button>
<br/>
<br/>
<button onClick={decrementValue}>Decrement</button>
<br/>
<p>Value is {counter}</p>
</>
);

}
export default App;
