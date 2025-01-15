import *as React from 'react';
import {Header, Footer} from './components';
import {Outlet} from 'react-router-dom';


function Layout()
{
return (
<>
<Header/>
<Outlet/>      {/* add pages dynamically through outlet placegolder like About,Contact us */}
<Footer/>
</>
)

}
export default Layout; 