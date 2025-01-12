import *as React from 'react';
import {useState} from 'react';
function Aaa()
{
const [length,setLength]=useState(3);
return (
<>
<h1>JIss is learning</h1>
<h1>Watching friends</h1>
<p>{length}</p>
</>
);
}

export default Aaa;