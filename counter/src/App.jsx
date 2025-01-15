//useState hook.

import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{
let [counter,setCounter]=useState(10);
let incrementValue=function()
{
//*****************1st case********************** */
//**********useState will perform batch processing*************** */

//React will batch the updates 
//together for performance reasons. 
//This means all five setCounter(counter + 1) calls will 
//likely end up only incrementing the counter by 1, not by 5.
// setCounter(counter+1);
// setCounter(counter+1);
// setCounter(counter+1);   
//  setCounter(counter+1);
// setCounter(counter+1); 

//**************2nd case********************** */
// React batches state updates for performance reasons, 
// which means that these updates wont 
// necessarily happen in the order you wrote them. Instead, 
//they'll often get 
// batched together, and the last one might override the others.

// setCounter(counter+1)
// setCounter(counter+2)
// setCounter(counter+3)
// setCounter(counter+4)
// setCounter(counter+5)

//*************3rd case*********************** */
//passing a callback to setCounter using the prevCounter value
setCounter((prevCount)=> prevCount+1)
setCounter((prevCount)=> prevCount+1)
setCounter((prevCount)=> prevCount+1)





}
let decrementValue=function()
{
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
