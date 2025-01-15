import * as React from 'react';
import {Link,NavLink} from 'react-router-dom';
function Header()
{
return (
<div>
<header className="shadow sticky z-50 top-0">
<nav className='bg-white border-gray-300 px-4 lg:px-6 py-2'>
<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
<Link to="/" className="flex items-center">
<img src="./reactRouting1/images/home.png" alt="logs"/>

</Link>

<div className="flex items-center lg:order-2">
<Link to="#" 
className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"

>
Log in

</Link>
<Link to="#" 
className="text-white bg-gray-600 rounded-lg px-3 hover:bg-gray-400 font-medium text-sm lg:px-5 mr-2 focus:outline-none 
lg:py-5"
>
Get Started

</Link>
</div>
<div className="
hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 " id="mobile-menu-2">
<ul className="flex felx-col mt-4 font-medium lg:flex-row lg:space-x-1 ">
<li>
<NavLink to="/"
className={({isActive})=> `block py-2 pl-3 border-b ${isActive ? "text-red-400":"text-gray-800"} border-gray-300 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-500 lg:p-0`}
>
Home
</NavLink>
</li>
<li>
<NavLink to="/about"
className={({isActive})=> `${isActive ? "text-red-500":"text-gray-400"} px-3`}
>
About
</NavLink>

</li>
<li>
<NavLink to="/github"
className={({isActive})=> `block py-2 pl-3 border-b ${isActive ? "text-red-400":"text-gray-800"} border-gray-300 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-500 lg:p-0`}
>
Github
</NavLink>
</li>
</ul>

</div>




</div>



</nav>


</header>

</div>

)
}
export default Header;