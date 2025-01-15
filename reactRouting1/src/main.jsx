import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'

import Layout from './Layout.jsx'
import {Home,About,User,Github,Orders} from './components';
import { Route } from 'react-router-dom'
import { githubInfoLoader } from './components/Github/Github.jsx'

// const router=createBrowserRouter([
// {
// path:'/',
// element: <Layout/> ,
// children:[
// {
// path:'',
// element:<Home/>
// },
// {
// path:"about",
// element:<About/>
// }
// ]
// }
//])

const router=createBrowserRouter(
createRoutesFromElements(

<Route path="/" element={<Layout/>}>
<Route path="" element={<Home/>}/>
<Route path="about" element={<About/>}>
<Route path="orders" element={<Orders/>}/>

</Route>
<Route path="user/:username" element={<User/>}/>
<Route 
loader={githubInfoLoader}
path="github"
element={<Github/>}
/>


</Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
