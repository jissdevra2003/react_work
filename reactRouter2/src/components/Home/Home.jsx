import React from 'react'
import { Link } from 'react-router-dom';
import "tailwindcss";

function Home()
{
return (
<>
<h1
className='bg-cyan-400 flex flex-wrap p-4 justify-center font-bold text-2xl text-black'
>This is home page</h1>
<div className='mt-2'>
<Link
className="border-2 p-1  mt-2"
to="/about"
>About</Link>
</div>

</>

)
}

export default Home;