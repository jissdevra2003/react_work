import *as React from 'react';
import { useState } from 'react'
import './index.css';



function App() {
  const [color,setColor]=useState('blue');

  return (
    
     
      <div className="w-full h-screen bg-stone-700 relative " >

 {/* to implement state -> style={{backgroundColor:color}} */}
<div className="grid-flow-col bg-orange-50 rounded-md p-3">
<button className="p-4 bg-green-600 rounded-lg text-slate-700  m-9 "
onClick={function()
{
setColor("green");
}}
>Green
</button>
<button className="p-4 bg-gray-400 rounded-md text-100"
onClick={function()
{
setColor("gray");
}}>
Gray
</button>
</div>

</div>

    
  );
}

export default App;
